import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

if (! supabaseUrl || ! supabaseKey) {
    throw new Error('Environment variables are not set.')
}

export const supabase = createClient(supabaseUrl, supabaseKey);