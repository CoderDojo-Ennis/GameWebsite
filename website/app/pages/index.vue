<template>
    <div class="page-container container">
        <h1 class="title">Geeky Monkey Games</h1>
        <div class="cards">
            <NuxtLink to="/space-invaders" class="card neon-blue">
                <img src="~/assets/images/space-invaders/title.svg" alt="Space Invaders" />
            </NuxtLink>
            <NuxtLink to="/missile-command" class="card neon-pink">
                <img src="~/assets/images/missile-command/title.webp" alt="Missile Command" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    font-family: 'Orbitron', sans-serif;
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
    background: rgba(255, 255, 255, 0.05);
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
    box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;
}

.neon-blue:hover {
    background: rgba(0, 255, 255, 0.1);
    box-shadow: 0 0 20px #0ff, inset 0 0 20px #0ff;
    transform: scale(1.05);
}

.neon-pink {
    border-color: #f0f;
    box-shadow: 0 0 10px #f0f, inset 0 0 10px #f0f;
}

.neon-pink:hover {
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 0 20px #f0f, inset 0 0 20px #f0f;
    transform: scale(1.05);
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
            0 0 90px #0ff,
    }

    20%,
    24%,
    55% {
        text-shadow:
            0 0 4px #88F,
            0 0 11px #55F,
            0 0 19px #88F,
            0 0 40px #0ff,
            0 0 80px #0ff,
            0 0 90px #0ff,
    }
}
</style>
