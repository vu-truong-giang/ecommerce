from supabase import create_client
from app.core.config import settings

supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_ROLE_KEY)
print("SUPABASE_URL:", settings.SUPABASE_URL)
print("SUPABASE_KEY:", settings.SUPABASE_SERVICE_ROLE_KEY)