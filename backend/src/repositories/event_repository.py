from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timedelta
from ..models.event import Event

class EventRepository:
    def __init__(self, db: Session):
        self.db = db
    
    async def get_all(self) -> List[Event]:
        return self.db.query(Event).all()
    
    async def get_upcoming_events(self, days: int = 7) -> List[Event]:
        return self.db.query(Event).filter(
            Event.start_date >= datetime.now(),
            Event.start_date <= datetime.now() + timedelta(days=days)
        ).all()
    
    async def find_existing(self, title: str, start_date: datetime) -> Optional[Event]:
        return self.db.query(Event).filter(
            Event.title == title,
            Event.start_date == start_date
        ).first()
    
    async def create(self, event: Event) -> Event:
        self.db.add(event)
        self.db.commit()
        self.db.refresh(event)
        return event