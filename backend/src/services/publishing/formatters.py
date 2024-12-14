from typing import List
from ...models.event import Event

def format_wordpress_content(event: Event) -> str:
    return f"""
    <h2>{event.title}</h2>
    <p><strong>Date:</strong> {event.start_date.strftime('%B %d, %Y')}</p>
    <p><strong>Location:</strong> {event.location}</p>
    <p>{event.description}</p>
    <p><a href="{event.source_url}">More Information</a></p>
    """

def format_mailchimp_content(events: List[Event]) -> str:
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