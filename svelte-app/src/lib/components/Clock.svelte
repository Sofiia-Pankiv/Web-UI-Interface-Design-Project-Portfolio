<script>
	import { onMount } from 'svelte';
	let date = new Date();
	$: hour = date.getHours();
	$: min = date.getMinutes();
	let dayOrNight = 'AM';
	
	onMount( () => {
		const interval = setInterval(() => {
			date = new Date();
			dayOrNight = (hour >= 12) ? "PM" : "AM";
		}, 1000);
	});
</script>

<style>
		section {
		display: flex;
		justify-content: flex-end; /* Align to the right side */
		align-items: center;
		width: 80%; /* Full width to push content to the right */
		padding-right: 1rem; /* Optional spacing from the edge */
	}

	.clockWrapper {
		display: flex;
		align-items: center;
	}

	.clockDisplay {
		font-size: 1.2em;
		border-radius: 15px;
		color: #ffd99c;
	}
</style>

<section>
	<div id='' class='clockWrapper'>
		<p class='clockDisplay'> 
			{hour} : {min} {dayOrNight}
		</p>
	</div>
</section>