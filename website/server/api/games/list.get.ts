import { GamesData } from "../../db/GamesData";

export default defineEventHandler(async (event) => {
	try {
		const games = await GamesData.GetGames(event);
		return {
			success: true,
			data: games,
		};
	} catch (error) {
		return {
			success: false,
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
});
