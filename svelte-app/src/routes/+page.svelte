<script>
	import { onMount } from 'svelte';
    import { Card } from '$lib';
	import { fade } from 'svelte/transition';

	let showSplash = true;

    onMount(() => {
        console.log("Home Page Loaded");
    });

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
		}, 5000);
	});
</script>

{#if showSplash}
	<div class="splash-screen" transition:fade>
		<div class="splash-content">
			<img src="splash.png" alt="Portrait of Sofiia Pankiv" class="splash-img" />
			<div class="splash-box">
				<p class="portfolio-label">Portfolio</p>
				<h1 class="splash-title">Sofiia Pankiv</h1>
			</div>
		</div>
	</div>
{:else}
	<!-- Gallery Container-->
    <div class="gallery">
        <Card title="Card 1" description="This is the first card."/>
        <Card title="Card 2" description="This is the second card."/>
        <Card title="Card 3" description="This is the third card."/>
        <Card title="Card 4" description="This is the fourth card."/>
        <Card title="Card 5" description="This is the sixth card."/>
     </div>
{/if}

<style>
	.splash-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: black;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}

	.splash-content {
		text-align: center;
		position: relative;
	}

	.splash-img {
		width: auto;
		max-height: 80vh;
		object-fit: contain;
	}

	.splash-box {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		background-color: #5c1d1d;
		padding: 1rem 2rem;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.portfolio-label {
		font-size: 1rem;
		color: #f5d5b2;
		margin: 0;
		font-family: 'Georgia', serif;
	}

	.splash-title {
		margin: 0;
		font-size: 2rem;
		color: #fce9c6;
		font-weight: bold;
		font-family: 'Brush Script MT', cursive;
	}


    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Creates spacing between items */
        justify-content: center;
        margin-top: 2rem;
    }

    /* Pseudo-Element: Add Decorative Lines Before Gallery */
    .gallery::before {
        content: "Featured Cards";
        font-size: 1.5rem;
        font-weight: bold;
    }

    /* Pseudo-Element: Add Decorative Line After Gallery */
    .gallery::after {
        content: "";
        width: 60%;
        height: 3px;
        background: linear-gradient(to right, #007bff, transparent);
        margin: 2rem auto 0 auto;
    }

    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card:first-child) {
        border: 3px solid gold; /* Emphasize the first card */
    }

    :global(.gallery > .card:last-child) {
        border: 3px solid crimson; /* Emphasize the last card */
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(even)) {
        background-color: #ebebeb;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

    /* Apply a special styling to every third card */
    :global(.gallery > .card:nth-child(3n)) {
        border-left: 5px solid #98caff; /* Left accent border */
    }

    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }
</style>
