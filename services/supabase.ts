import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tjauzrsixhovhupgdjgo.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_uVaTWsU_9S-uNO8Iidz77g_DyyoIQJ0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
