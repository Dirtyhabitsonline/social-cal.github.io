import asyncio
import schedule
from datetime import datetime
from ..core.database import get_db
from ..services.scraping.eventbrite import EventbriteScraper
from ..services.publishing.wordpress import WordPressPublisher
from ..services.publishing.mailchimp import MailchimpPublisher
from ..repositories.event_repository import EventRepository

async def scrape_and_publish():
    with get_db() as db:
        repository = EventRepository(db)
        scraper = EventbriteScraper()
        wp_publisher = WordPressPublisher()
        mailchimp_publisher = MailchimpPublisher()
        
        try:
            events = await scraper.scrape()
            
            for event in events:
                existing = await repository.find_existing(event.title, event.start_date)
                if not existing:
                    event = await repository.create(event)
                    if await wp_publisher.publish_event(event):
                        event.published_wp = True
            
            if datetime.now().weekday() == 0:  # Monday
                upcoming_events = await repository.get_upcoming_events()
                if upcoming_events:
                    await mailchimp_publisher.create_campaign(upcoming_events)
        
        except Exception as e:
            print(f"Error in scrape_and_publish: {e}")

async def start_scheduler(interval: int):
    schedule.every(interval).seconds.do(
        lambda: asyncio.create_task(scrape_and_publish())
    )
    
    while True:
        schedule.run_pending()
        await asyncio.sleep(1)