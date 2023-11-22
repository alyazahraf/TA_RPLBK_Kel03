import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://suhfcpwbulkcaghnsqgi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1aGZjcHdidWxrY2FnaG5zcWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2ODk3OTQsImV4cCI6MjAxNTI2NTc5NH0.zuYNgZejl2P1EZvFDfVuXNOjgmpo4kqwdMybn4x4GV8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
