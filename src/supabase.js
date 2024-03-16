import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ijenvtdkurlcuigndhfp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZW52dGRrdXJsY3VpZ25kaGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyODc0MjUsImV4cCI6MjAyNTg2MzQyNX0.OwnG3UXMsRIxJQpWbqy-9mTsS5p8ksoEMA_FzZISV3E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
