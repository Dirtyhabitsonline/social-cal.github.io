from abc import ABC, abstractmethod
from typing import List
from datetime import datetime
from ...models.event import Event

class BaseScraper(ABC):
    @abstractmethod
    async def scrape(self) -> List[Event]:
        pass
    
    @abstractmethod
    def parse_date(self, date_str: str) -> datetime:
        pass