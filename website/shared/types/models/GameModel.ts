import { z } from "zod";
import type { Database } from "../supabase";

export type GameRecord = Database["public"]["Tables"]["games"]["Row"];
export type GameInsert = Database["public"]["Tables"]["games"]["Insert"];

export const GameModelSchema = z.strictObject({
	id: z.string(),
	title: z.string(),
	createdAt: z.string(),
	slug: z.string(),
});

export type GameModel = z.infer<typeof GameModelSchema>;

/**
 * Turn a game title into a URL slug.
 */
export function Slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export function gamesFromRecords(records: GameRecord[]): GameModel[] {
	return records.map((r) => ({
		id: r.id,
		title: r.title,
		createdAt: r.created_at,
		slug: r.slug || Slugify(r.title),
	}));
}

export function gamesToRecords(models: GameModel[]): GameInsert[] {
	return models.map((m) => ({
		id: m.id,
		title: m.title,
		created_at: m.createdAt,
		slug: m.slug,
	}));
}
