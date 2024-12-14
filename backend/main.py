import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import asyncio
import schedule
import time
from datetime import datetime, timedelta

from .database.models import get_db, Event
from .scrapers.eventbrite import EventbriteScraper
from .publishers.wordpress import WordPressPublisher
from .publishers.mailchimp import MailchimpPublisher
from .config import settings

app = FastAPI()

@app.get("/events/")
async def get_events(db: Session = Depends(get_db)):
    return db.query(Event).all()

async def scrape_and_publish():
    db = next(get_db())
    scraper = EventbriteScraper()
    wp_publisher = WordPressPublisher()
    mailchimp_publisher = MailchimpPublisher()
    
    try:
        # Scrape new events
        events = await scraper.scrape()
        
        # Save to database
        for event in events:
            existing = db.query(Event).filter(
                Event.title == event.title,
                Event.start_date == event.start_date
            ).first()
            
            if not existing:
                db.add(event)
                
                # Publish to WordPress
                if await wp_publisher.publish_event(event):
                    event.published_wp = True
        
        db.commit()
        
        # Weekly newsletter
        if datetime.now().weekday() == 0:  # Monday
            upcoming_events = db.query(Event).filter(
                Event.start_date >= datetime.now(),
                Event.start_date <= datetime.now() + timedelta(days=7)
            ).all()
            
            if upcoming_events:
                await mailchimp_publisher.create_campaign(upcoming_events)
    
    except Exception as e:
        print(f"Error in scrape_and_publish: {e}")
    finally:
        db.close()

@app.on_event("startup")
async def startup_event():
    # Schedule regular scraping
    schedule.every(settings.SCRAPE_INTERVAL).seconds.do(
        lambda: asyncio.create_task(scrape_and_publish())
    )
    
    # Run scheduler in background
    async def run_scheduler():
        while True:
            schedule.run_pending()
            await asyncio.sleep(1)
    
    asyncio.create_task(run_scheduler())

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)