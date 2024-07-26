import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dhgjolwdcksslfoxbomd.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZ2pvbHdkY2tzc2xmb3hib21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTM5MDA4MywiZXhwIjoyMDM2OTY2MDgzfQ.6WjAPCKyKhhP5EL-o7AYnESm6rF9hPL2hyDF0rGBFq8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
