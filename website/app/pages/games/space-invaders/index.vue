<script setup lang="ts">
	definePageMeta({
		layout: "game",
	});
</script>

<template>
	<div class="page-container">
		<img
			src="~/assets/images/space-invaders/title.svg"
			alt="Space Invaders"
			class="game-title"
		/>
		<img
			src="~/assets/images/space-invaders/screenshot.png"
			alt="Space Invaders Gameplay"
			class="game-screenshot"
		/>
		<p>Defend Earth from the alien invasion!</p>
	</div>
</template>

<style scoped>
	.page-container {
		--theme-color: #0ff;
	}
</style>
