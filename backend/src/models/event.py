from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Event(Base):
    __tablename__ = "events"
    
    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)
    location = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    image_url = Column(String, nullable=True)
    source_url = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    published_wp = Column(Boolean, default=False)
    published_mailchimp = Column(Boolean, default=False)