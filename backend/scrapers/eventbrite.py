from datetime import datetime
from bs4 import BeautifulSoup
import aiohttp
from typing import List
from .base import BaseScraper
from ..database.models import Event

class EventbriteScraper(BaseScraper):
    def __init__(self, location: str = "leeds"):
        self.base_url = f"https://www.eventbrite.com/d/{location}/all-events/"
    
    async def scrape(self) -> List[Event]:
        events = []
        async with aiohttp.ClientSession() as session:
            async with session.get(self.base_url) as response:
                if response.status == 200:
                    html = await response.text()
                    soup = BeautifulSoup(html, 'html.parser')
                    event_cards = soup.find_all('div', {'class': 'event-card'})
                    
                    for card in event_cards:
                        event = Event(
                            title=card.find('h3').text.strip(),
                            description=card.find('p', {'class': 'description'}).text.strip(),
                            location=card.find('p', {'class': 'location'}).text.strip(),
                            start_date=self.parse_date(card.find('time')['datetime']),
                            source_url=card.find('a')['href']
                        )
                        events.append(event)
        
        return events
    
    def parse_date(self, date_str: str) -> datetime:
        return datetime.fromisoformat(date_str)