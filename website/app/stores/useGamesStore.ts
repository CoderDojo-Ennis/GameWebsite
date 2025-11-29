import baseDbTableStore from "./baseDbTableStore";
import type { GameModel } from "~~/shared/types/models/GameModel";

export function useGamesStore() {
	const gamesStore = baseDbTableStore<GameModel>({
		tableName: "games",
		getLabel: (game: GameModel) => game.title,
	});

	return {
		...gamesStore,
		Games: gamesStore.Items,
	};
}
