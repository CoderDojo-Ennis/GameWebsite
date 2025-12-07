<script setup lang="ts">
	import { useGamesStore } from "~/stores/useGamesStore";

	const { Games, isLoading, isError, error } = useGamesStore();
</script>

<template>
	<div class="page-container container rainbow-bg">
		<h1 class="title">Geeky Monkey Games !!</h1>
		<div class="cards">
			<NuxtLink to="/games/space-invaders" class="card neon-blue">
				<img
					src="~/assets/images/space-invaders/title.svg"
					alt="Space Invaders"
				/>
			</NuxtLink>
			<NuxtLink to="/games/missile-command" class="card neon-pink">
				<img
					src="~/assets/images/missile-command/title.webp"
					alt="Missile Command"
				/>
			</NuxtLink>
		</div>

		<games-list></games-list>
	</div>
</template>

<style scoped>
	.container {
		font-family: "Orbitron", sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 4rem;
		margin-bottom: 4rem;
		text-align: center;
		text-transform: uppercase;
		color: #fff;
		text-shadow:
			0 0 5px #fff,
			0 0 10px #fff,
			0 0 20px #0ff,
			0 0 40px #0ff,
			0 0 80px #0ff;
		animation: flicker 3s infinite alternate;
	}

	.cards {
		display: flex;
		gap: 3rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.card {
		background: black;
		border: 2px solid #fff;
		border-radius: 15px;
		padding: 2rem;
		width: 300px;
		text-decoration: none;
		color: #fff;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.card img {
		width: 100%;
		max-width: 100%;
		height: auto;
		object-fit: contain;
	}

	.neon-blue {
		border-color: #0ff;
		box-shadow:
			0 0 10px #0ff,
			inset 0 0 10px #0ff;
	}

	.neon-blue:hover {
		background: rgba(0, 255, 255, 0.1);
		box-shadow:
			0 0 20px #0ff,
			inset 0 0 20px #0ff;
		transform: scale(1.05);
	}

	.neon-pink {
		border-color: #f0f;
		box-shadow:
			0 0 10px #f0f,
			inset 0 0 10px #f0f;
	}

	.neon-pink:hover {
		background: rgba(255, 0, 255, 0.1);
		box-shadow:
			0 0 20px #f0f,
			inset 0 0 20px #f0f;
		transform: scale(1.05);
	}

	.rainbow-bg {
		background: linear-gradient(
			45deg,
			#ff000020,
			#ff7f0020,
			#ffff0020,
			#00ff0020,
			#0000ff20,
			#4b008220,
			#9400d320
		);
		background-size: 400% 400%;
		animation: rainbow 10s ease infinite;
	}

	@keyframes rainbow {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			text-shadow:
				0 0 4px #fff,
				0 0 11px #fff,
				0 0 19px #fff,
				0 0 40px #0ff,
				0 0 80px #0ff,
				0 0 90px #0ff;
		}

		20%,
		24%,
		55% {
			text-shadow:
				0 0 4px #88f,
				0 0 11px #55f,
				0 0 19px #88f,
				0 0 40px #0ff,
				0 0 80px #0ff,
				0 0 90px #0ff;
		}
	}
</style>
