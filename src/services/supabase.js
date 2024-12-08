import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://btbdvurwgjodcnyidzqk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0YmR2dXJ3Z2pvZGNueWlkenFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTE3MTEsImV4cCI6MjA0ODcyNzcxMX0.5grVN01onxnheSAKYgWmacW3Lo9lj5widArxR6Bnb2s`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
