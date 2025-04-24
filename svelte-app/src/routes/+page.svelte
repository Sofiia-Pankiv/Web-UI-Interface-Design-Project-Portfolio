<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let showSplash = true;

    onMount(() => {
        console.log("Home Page Loaded");
    });

	onMount(() => {
		setTimeout(() => {
			showSplash = false;
		}, 3000);
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

    <div class="header-bar">
	    <h2 class="header-title">Sofiia Pankiv</h2>
    </div>

    <div class="ticker-wrapper">
	    <div class="ticker">
		    <span>About • About • About • About • About • About • About • About • About • About • About • About • About • About • About • About • </span>
            <span>About • About • About • About • About • About • About • About • About • About • About • About • About • About • About • About • </span>
	    </div>
    </div>

    <div class="main-content">
        <img src="barcode1.png" alt="Barcode" class="barcodeImg" />
        <img src="Ferret.png" alt="Ferret" class="ferret" />
        <p class="about-text">
            Hey there!<br><br>
            I'm Sofiia - student of South East Technology University studying Computing in Interactive Digital Art and Design.
            I’m a future graphic designer with a passion for art, crafting, and learning something new.<br><br>
            I love turning ideas into reality through creativity and problem-solving. Whether it's designing creative websites or animations,
            logos or brochures, illustrations or mini games—I’m always eager to push boundaries and create impactful work.<br><br>
            Let’s connect and bring great ideas to life!
        </p>
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
	width: 500px;
	height: 170px;
	padding: 1rem 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 12px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
	border: 3px solid #000000; /* 👈 outline added */
}

.portfolio-label {
	font-size: 1.3rem; /* 👈 larger */
	color: #f5d5b2;
	margin: 0;
	font-family: 'Georgia', serif;
}

.splash-title {
	margin: 0;
	margin-top: 0.5rem;
	font-size: 2.5rem; /* 👈 larger */
	color: #fce9c6;
	font-weight: bold;
	font-family: 'Brush Script MT', cursive;
	text-align: center;
}

.header-bar {
	width: 100%;
	background-color: #070709;
	color: #fce9c6;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 2px solid #000;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.header-title {
	margin: 0;
	font-size: 2rem;
	font-family: 'Brush Script MT', cursive;
	font-weight: bold;
	text-align: center;
}


.main-content {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 2rem;
	position: relative;
}

.barcodeImg {
	width: 250px;
	position: absolute;
	top: 1rem;
	left: 1rem;
}

.ferret {
	width: 650px;
	margin:  auto;
    position: center;
}

.about-text {
	max-width: 950px;
	margin-left: auto;
	margin-right: 0;
	color: #fce9c6;
    font-size: 2rem;
	font-weight: bold;
	font-family: 'Brush Script MT', cursive;
	text-align: left;
}

.ticker-wrapper {
	width: 100%;
	overflow: hidden;
	background-color: #ae1817; /* optional */
	color: #ffd99c;
	padding: 0.5rem 0;
    position: relative;
}

.ticker {
    display: flex;
	width: max-content;
	animation: scrollTicker 20s linear infinite;
	font-size: 1.5rem;
	font-weight: bold;
	font-family: 'Georgia', serif;
	gap: 2rem;
}

@keyframes scrollTicker {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-50%);
	}
}

   
</style>
