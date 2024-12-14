from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import NewPost
from ...models.event import Event
from ...core.settings import settings
from .formatters import format_wordpress_content

class WordPressPublisher:
    def __init__(self):
        self.client = Client(
            settings.WP_URL,
            settings.WP_USERNAME,
            settings.WP_PASSWORD
        )
    
    async def publish_event(self, event: Event) -> bool:
        try:
            post = self._create_post(event)
            return bool(self.client.call(NewPost(post)))
        except Exception as e:
            print(f"Error publishing to WordPress: {e}")
            return False
    
    def _create_post(self, event: Event) -> WordPressPost:
        post = WordPressPost()
        post.title = event.title
        post.content = format_wordpress_content(event)
        post.post_status = 'draft'
        return post