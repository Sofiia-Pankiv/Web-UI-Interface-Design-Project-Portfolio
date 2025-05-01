<script>
    import { catalogue } from '$lib/catalogue';
    import { onMount } from 'svelte';
    import { Card } from '$lib';
    import { goto } from '$app/navigation';

   
    onMount(() =>{
        console.log("Portfolio Page Loaded");
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


<div class="gallery">
    {#each catalogue as card}
           
        <Card image={card.image} title={card.title}  href={card.href} />
          
    {/each}
</div>


<style>
   .ticker-Project-wrapper {
	width: 100%;
	overflow: hidden;
	background-color: #ae1817;
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
	gap: 2rem;
}



.gallery{
    display: grid;
    grid-template-columns: repeat(5, 1fr);/*repeat(auto-fit, minmax(250px,1fr)); */
    gap: 40px;
    margin-top: 2rem;
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

   
    
@keyframes scrollTicker {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

@media (max-width: 768px) {
    .ticker-content {
      font-size: 1rem; /* Smaller text for the ticker */
      gap: 1rem; /* Reduce gap in ticker */
      animation-duration: 15s; /* Slightly faster animation on smaller screens */
    }

    .gallery {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Even smaller cards */
      gap: 10px; /* Further reduce gap */
      margin-top: 1rem; /* Further reduce top margin */
      
    }

    /* Remove hover effects on touch devices for better usability */
    :global(.gallery > .card:hover) {
      transform: none;
      z-index: auto;
    }

    :global(.gallery > .card:hover ~ .card) {
      transform: none;
      opacity: 1;
    }

    :global(.gallery > .card:hover + .card) {
      transform: none;
      opacity: 1;
    }
  }
</style>