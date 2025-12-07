// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: [
		// "@nuxt/icon",
		// "@nuxt/ui",
		// "@nuxtjs/color-mode",
		// "@nuxtjs/google-fonts",
		// "@nuxtjs/i18n",
		// "@nuxtjs/supabase",
		"@vueuse/nuxt",
		// "nitro-cloudflare-dev",
	],

	nitro: {
		preset: "netlify",
	},
	runtimeConfig: {
		supabaseServiceKey: process.env.SUPABASE_SERVICE_KEY,
		public: {
			supabaseProjectId: process.env.SUPABASE_PROJECT_ID,
			supabaseKey: process.env.SUPABASE_KEY,
		},
	},
	// build: {
	// 	transpile: ["@supabase/supabase-js"],
	// },

	// supabase: {
	// 	redirect: false,
	// 	types: "~~/shared/types/supabase.ts",
	// },
});
