<script setup lang="ts">
	import { useGamesStore } from "~/stores/useGamesStore";
	import type { GameModel } from "~~/shared/types/models/GameModel";

	definePageMeta({
		layout: "game",
	});

	const route = useRoute();
	const gameSlug: string = route.params["gameslug"] as string;
	const { Games, isLoading, isError, error } = useGamesStore();
	const { Files, Storage, Bucket } = useStorage(gameSlug);

	const game = computed<GameModel | null>(() => {
		return Games.value?.find((g) => g.slug === gameSlug) || null;
	});

	const titleImage = computed<string>(() => {
		const file = Files.value?.find((f) =>
			f.name.toLowerCase().startsWith("title"),
		);
		console.log("file", { file, name: file?.name });
		console.log("files", Files.value);
		if (!file) {
			return "";
		}
		const url =
			Bucket?.getPublicUrl(`${gameSlug}/${file?.name}`)?.data.publicUrl ||
			"";
		return url;
	});

	const screenshotImages = computed<string[]>(() => {
		const screenshots = Files.value?.filter((f) =>
			f.name.toLowerCase().startsWith("screenshot"),
		);
		if (!screenshots || screenshots.length === 0) {
			return [];
		}
		return screenshots.map((file) => {
			const url =
				Bucket?.getPublicUrl(`${gameSlug}/${file?.name}`)?.data
					.publicUrl || "";
			return url;
		});
	});
</script>

<template>
	<div class="page-container">
		<h1 v-if="!titleImage">{{ game?.title }}</h1>
		<img
			v-if="titleImage"
			:src="titleImage"
			:alt="game?.title"
			class="game-title"
		/>

		<img
			v-for="screenshot in screenshotImages"
			:key="screenshot"
			:src="screenshot"
			class="game-screenshot"
		/>
		<p>Protect your cities from ballistic missiles!</p>
	</div>
</template>

<style scoped>
	.page-container {
		--theme-color: #f0f;
	}
</style>
