<script>
    import {onMount} from 'svelte';
    import { Card } from '$lib';
    import { on } from 'svelte/events';

    onMount(() =>{
        console.log("About Page Loaded");
    });
</script>

<!-- Project Ticker -->
<div class="ticker-Project-wrapper">
	<div class="tickerP">
		<div class="ticker-content">
			<span>Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • </span>
			<span>Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • Project • </span>
		</div>
	</div>
</div>

<!-- Gallery Container-->
<div class="gallery">
    <Card title="Card 1" description="This is the first card."/>
    <Card title="Card 2" description="This is the second card."/>
    <Card title="Card 3" description="This is the third card."/>
    <Card title="Card 4" description="This is the fourth card."/>
    <Card title="Card 5" description="This is the sixth card."/>
 </div>

<style>
   .ticker-Project-wrapper {
	width: 100%;
	overflow: hidden;
	background-color: var(--primary-color);
	color: #ffd99c;
	padding: 0.5rem 0;
	position: relative;
}

.tickerP {
	width: 100%;
	overflow: hidden;
}

.ticker-content {
	display: flex;
	width: max-content;
	animation: scrollTicker 20s linear infinite;
	font-size: 1.5rem;
	font-weight: bold;
	font-family: 'Georgia', serif;
	gap: 2rem;
}

@keyframes scrollTicker {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

.gallery{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    gap: 40px;
    margin-top: 2rem;
}

.gallery > .card{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
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