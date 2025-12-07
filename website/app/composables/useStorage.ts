import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "~~/shared/types/supabase";
import { onUnmounted } from "vue";

type StorageFileApi = ReturnType<SupabaseClient<Database>["storage"]["from"]>;

export default function useStorage(folderName: string) {
	const config = useRuntimeConfig();
	const queryClient = useQueryClient();
	const supabaseUrl = `https://${config.public.supabaseProjectId}.supabase.co`;
	const supabaseKey = config.public.supabaseKey;

	const supabase = createClient<Database>(supabaseUrl, supabaseKey);
	const bucketName = "games";

	const Storage = supabase.storage;
	const Bucket: StorageFileApi = Storage.from(bucketName);

	const {
		data: Files,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["storage", bucketName, folderName],
		staleTime: 1000 * 60 * 5, // 5 minutes
		queryFn: async () => {
			const { data, error } = await Bucket.list(folderName, {
				limit: 100,
				offset: 0,
				sortBy: { column: "name", order: "asc" },
			});

			if (error) {
				throw new Error(error.message);
			}

			return data;
		},
	});

	// Subscribe to storage changes
	// Note: This requires enabling replication for the 'storage.objects' table in Supabase Dashboard
	// Database -> Replication -> Source: storage, Table: objects
	const channel = supabase
		.channel(`storage-changes-${bucketName}-${folderName}`)
		.on(
			"postgres_changes",
			{
				event: "*",
				schema: "storage",
				table: "objects",
			},
			(payload: any) => {
				const newRecord = payload.new;
				const oldRecord = payload.old;
				const record = newRecord || oldRecord;

				console.log("Storage change detected:", { payload });

				// Check if the file belongs to our bucket
				if (record && record.bucket_id === bucketName) {
					const fileName = record.name;
					// If folderName is provided, check if fileName starts with it
					if (!folderName || fileName.startsWith(folderName)) {
						queryClient.invalidateQueries({
							queryKey: ["storage", bucketName, folderName],
						});
					}
				}
			},
		)
		.subscribe();

	onUnmounted(() => {
		supabase.removeChannel(channel);
	});

	return {
		Files,
		Storage,
		Bucket,
		isLoading,
		isError,
		error,
		refetch,
	};
}
