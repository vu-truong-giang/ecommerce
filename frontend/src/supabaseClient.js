import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase
if (!supabaseUrl || !supabaseAnonKey) {
	console.warn('VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not set — supabase client stub created')
	const errResult = async () => ({ error: new Error('Supabase env vars not set') })
	const stubQuery = () => ({ select: errResult })

	supabase = {
		auth: { signInWithOtp: errResult },
		table: stubQuery,
		from: stubQuery,
	}
} else {
	supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export default supabase
