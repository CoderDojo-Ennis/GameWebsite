import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../shared/types/supabase";

export class SupabaseService {
	static Schema: string = "public";

	static GetSupabaseEnv() {
		const config = useRuntimeConfig();

		const supabaseProjectId = config.supabaseProjectId;
		if (!supabaseProjectId) {
			throw new Error(
				"Missing SUPABASE_PROJECT_ID environment variables",
			);
		}
		const supabaseUrl = `https://${supabaseProjectId}.supabase.co`;

		const supabaseKey = config.supabaseKey;
		if (!supabaseKey) {
			throw new Error("Missing SUPABASE_KEY environment variables");
		}
		const supabaseServiceKey = config.supabaseServiceKey;
		if (!supabaseServiceKey) {
			throw new Error(
				"Missing SUPABASE_SERVICE_KEY environment variables",
			);
		}

		return {
			supabaseUrl,
			supabaseKey,
			supabaseServiceKey,
		};
	}

	static getAnonClient() {
		const { supabaseUrl, supabaseKey } = this.GetSupabaseEnv();
		return createClient<Database>(supabaseUrl, supabaseKey);
	}
	static getAdminClient() {
		const { supabaseUrl, supabaseServiceKey } = this.GetSupabaseEnv();
		return createClient<Database>(supabaseUrl, supabaseServiceKey);
	}
}
