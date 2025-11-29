import type { EventHandlerRequest, H3Event } from "h3";
import { SupabaseService } from "./supabase";
import {
	type GameModel,
	gamesFromRecords,
	gamesToRecords,
} from "../../shared/types/models/GameModel";

const ErrorToString = (error: unknown): string => {
	if (error instanceof Error) return error.message;
	return String(error);
};

export const GamesData = {
	GetGames: async (
		event: H3Event<EventHandlerRequest>,
	): Promise<GameModel[]> => {
		const supabase = SupabaseService.getAdminClient();
		if (!supabase) {
			return [];
		}
		try {
			const query = supabase
				.from("games")
				.select("*")
				.order("title", { ascending: true });

			const { data, error } = await query;
			if (error || !data || data.length === 0) {
				console.error("Error fetching games:", error);
				return [];
			}
			return gamesFromRecords(data);
		} catch (error) {
			throw new Error(`Error fetching games: ${ErrorToString(error)}`);
		}
	},

	SaveGame: async (
		event: H3Event<EventHandlerRequest>,
		game: GameModel,
	): Promise<GameModel | null> => {
		const all = await GamesData.SaveGames(event, [game]);
		return all[0] || null;
	},

	SaveGames: async (
		event: H3Event<EventHandlerRequest>,
		games: GameModel[],
	): Promise<GameModel[]> => {
		const supabase = SupabaseService.getAdminClient();
		if (!supabase) {
			return [];
		}
		try {
			const { data, error } = await supabase
				.from("games")
				.upsert(gamesToRecords(games))
				.select();
			if (error || !data || data.length === 0) {
				console.error("Error saving games:", error);
				return [];
			}
			return gamesFromRecords(data);
		} catch (error) {
			throw new Error(`Error saving games: ${ErrorToString(error)}`);
		}
	},

	DeleteGame: async (
		event: H3Event<EventHandlerRequest>,
		gameId: string,
	): Promise<boolean> => {
		const supabase = SupabaseService.getAdminClient();
		if (!supabase) {
			return false;
		}
		try {
			const { error } = await supabase
				.from("games")
				.delete()
				.eq("id", gameId);
			if (error) {
				console.error("Error deleting game:", error);
				return false;
			}
			return true;
		} catch (error) {
			console.error(`Error deleting game: ${ErrorToString(error)}`);
			return false;
		}
	},
};
