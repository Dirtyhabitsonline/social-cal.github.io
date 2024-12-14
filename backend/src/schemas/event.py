from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class EventBase(BaseModel):
    title: str
    description: str
    location: str
    start_date: datetime
    end_date: Optional[datetime] = None
    image_url: Optional[str] = None
    source_url: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int
    created_at: datetime
    published_wp: bool
    published_mailchimp: bool

    class Config:
        from_attributes = True