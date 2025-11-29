<template>
	<nav class="top-nav">
		<NuxtLink to="/" class="nav-title">Geeky Monkey Games</NuxtLink>
	</nav>
</template>

<style scoped>
	.top-nav {
		padding: 1rem 2rem;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.5);
	}

	.nav-title {
		font-family: "Orbitron", sans-serif;
		font-size: 1.5rem;
		text-transform: uppercase;
		text-decoration: none;
		color: #fff;
		text-shadow:
			0 0 2px #fff,
			0 0 5px #fff,
			0 0 10px #0ff,
			0 0 20px #0ff;
		transition: all 0.3s ease;
	}

	.nav-title:hover {
		text-shadow:
			0 0 4px #fff,
			0 0 10px #fff,
			0 0 20px #0ff,
			0 0 40px #0ff;
	}
</style>
