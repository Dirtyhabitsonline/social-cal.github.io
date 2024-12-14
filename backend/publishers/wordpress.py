from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import NewPost
from ..database.models import Event
from ..config import settings

class WordPressPublisher:
    def __init__(self):
        self.client = Client(
            settings.WP_URL,
            settings.WP_USERNAME,
            settings.WP_PASSWORD
        )
    
    async def publish_event(self, event: Event) -> bool:
        try:
            post = WordPressPost()
            post.title = event.title
            post.content = self._format_content(event)
            post.post_status = 'draft'
            
            post_id = self.client.call(NewPost(post))
            return bool(post_id)
        except Exception as e:
            print(f"Error publishing to WordPress: {e}")
            return False
    
    def _format_content(self, event: Event) -> str:
        return f"""
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.start_date.strftime('%B %d, %Y')}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <p><a href="{event.source_url}">More Information</a></p>
        """