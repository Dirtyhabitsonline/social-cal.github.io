from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./events.db")
    WP_URL: str = os.getenv("WP_URL", "")
    WP_USERNAME: str = os.getenv("WP_USERNAME", "")
    WP_PASSWORD: str = os.getenv("WP_PASSWORD", "")
    MAILCHIMP_API_KEY: str = os.getenv("MAILCHIMP_API_KEY", "")
    MAILCHIMP_LIST_ID: str = os.getenv("MAILCHIMP_LIST_ID", "")
    SCRAPE_INTERVAL: int = int(os.getenv("SCRAPE_INTERVAL", "3600"))

settings = Settings()