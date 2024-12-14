from mailchimp3 import MailChimp
from ..database.models import Event
from ..config import settings
from typing import List

class MailchimpPublisher:
    def __init__(self):
        self.client = MailChimp(mc_api=settings.MAILCHIMP_API_KEY)
        self.list_id = settings.MAILCHIMP_LIST_ID
    
    async def create_campaign(self, events: List[Event]) -> bool:
        try:
            campaign = self.client.campaigns.create({
                'type': 'regular',
                'recipients': {'list_id': self.list_id},
                'settings': {
                    'subject_line': 'Upcoming Events This Week',
                    'title': f'Events Newsletter {datetime.now().strftime("%Y-%m-%d")}',
                    'from_name': 'Event Scout',
                }
            })
            
            content = self._format_content(events)
            self.client.campaigns.content.update(
                campaign_id=campaign['id'],
                data={'html': content}
            )
            
            return True
        except Exception as e:
            print(f"Error creating Mailchimp campaign: {e}")
            return False
    
    def _format_content(self, events: List[Event]) -> str:
        html = "<h1>Upcoming Events</h1>"
        for event in events:
            html += f"""
            <div style="margin-bottom: 20px;">
                <h2>{event.title}</h2>
                <p><strong>Date:</strong> {event.start_date.strftime('%B %d, %Y')}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
                <p><a href="{event.source_url}">More Information</a></p>
            </div>
            """
        return html