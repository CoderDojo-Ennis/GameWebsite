<script setup lang="ts">
	import { useGamesStore } from "~/stores/useGamesStore";

	const { Games, isLoading, isError, error } = useGamesStore();
</script>

<template>
	<div class="games-list">
		<div v-if="isLoading">Loading games…</div>
		<div v-else-if="isError">Error: {{ error }}</div>
		<ul v-else>
			<li v-for="game in Games" :key="game.id">
				<NuxtLink :to="`/games/${game.slug}`">{{
					game.title
				}}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.games-list {
		margin-top: 4rem;
		color: #fff;
		text-align: center;
		width: 100%;

		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
			text-shadow: 0 0 10px #0ff;
		}

		ul {
			list-style: none;
			padding: 0;

			li {
				font-size: 1.2rem;
				margin: 0.5rem 0;
			}
		}
	}
</style>
