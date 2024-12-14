from fastapi import FastAPI
import asyncio
from .api import events
from .core.settings import settings
from .tasks.scheduler import start_scheduler

app = FastAPI()
app.include_router(events.router)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(start_scheduler(settings.SCRAPE_INTERVAL))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)