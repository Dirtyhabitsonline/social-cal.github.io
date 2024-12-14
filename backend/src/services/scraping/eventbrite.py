from datetime import datetime
from bs4 import BeautifulSoup
import aiohttp
from typing import List
from .base import BaseScraper
from ...models.event import Event

class EventbriteScraper(BaseScraper):
    def __init__(self, location: str = "leeds"):
        self.base_url = f"https://www.eventbrite.com/d/{location}/all-events/"
    
    async def scrape(self) -> List[Event]:
        async with aiohttp.ClientSession() as session:
            return await self._fetch_events(session)
    
    async def _fetch_events(self, session: aiohttp.ClientSession) -> List[Event]:
        async with session.get(self.base_url) as response:
            if response.status != 200:
                return []
            
            html = await response.text()
            return self._parse_events(html)
    
    def _parse_events(self, html: str) -> List[Event]:
        soup = BeautifulSoup(html, 'html.parser')
        event_cards = soup.find_all('div', {'class': 'event-card'})
        return [self._parse_event_card(card) for card in event_cards]
    
    def _parse_event_card(self, card) -> Event:
        return Event(
            title=card.find('h3').text.strip(),
            description=card.find('p', {'class': 'description'}).text.strip(),
            location=card.find('p', {'class': 'location'}).text.strip(),
            start_date=self.parse_date(card.find('time')['datetime']),
            source_url=card.find('a')['href']
        )
    
    def parse_date(self, date_str: str) -> datetime:
        return datetime.fromisoformat(date_str)