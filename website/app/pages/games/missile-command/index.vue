<script setup lang="ts">
	definePageMeta({
		layout: "game",
	});
</script>

<template>
	<div class="page-container">
		<img
			src="~/assets/images/missile-command/title.webp"
			alt="Missile Command"
			class="game-title"
		/>

		<img
			src="~/assets/images/missile-command/screenshot1.png"
			alt="Missile Command Gameplay"
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
