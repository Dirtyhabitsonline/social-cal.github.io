from abc import ABC, abstractmethod
from typing import List
from ..database.models import Event

class BaseScraper(ABC):
    @abstractmethod
    async def scrape(self) -> List[Event]:
        """Scrape events and return a list of Event objects"""
        pass
    
    @abstractmethod
    def parse_date(self, date_str: str) -> datetime:
        """Parse date string into datetime object"""
        pass