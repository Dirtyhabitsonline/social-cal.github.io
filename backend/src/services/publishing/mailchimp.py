from mailchimp3 import MailChimp
from typing import List
from datetime import datetime
from ...models.event import Event
from ...core.settings import settings
from .formatters import format_mailchimp_content

class MailchimpPublisher:
    def __init__(self):
        self.client = MailChimp(mc_api=settings.MAILCHIMP_API_KEY)
        self.list_id = settings.MAILCHIMP_LIST_ID
    
    async def create_campaign(self, events: List[Event]) -> bool:
        try:
            campaign = await self._create_campaign()
            return await self._update_campaign_content(campaign['id'], events)
        except Exception as e:
            print(f"Error creating Mailchimp campaign: {e}")
            return False
    
    async def _create_campaign(self) -> dict:
        return self.client.campaigns.create({
            'type': 'regular',
            'recipients': {'list_id': self.list_id},
            'settings': {
                'subject_line': 'Upcoming Events This Week',
                'title': f'Events Newsletter {datetime.now().strftime("%Y-%m-%d")}',
                'from_name': 'Event Scout',
            }
        })
    
    async def _update_campaign_content(self, campaign_id: str, events: List[Event]) -> bool:
        content = format_mailchimp_content(events)
        self.client.campaigns.content.update(
            campaign_id=campaign_id,
            data={'html': content}
        )
        return True