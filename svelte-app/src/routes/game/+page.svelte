<script>
     import { onMount } from 'svelte';

onMount(() => {
    console.log("Web Game Page Loaded");
});
</script>

<h1>Sketch Detail Page</h1>

<p>This is where more details about the sketch go.</p>

<!-- svelte-ignore a11y_img_redundant_alt -->
<img src="/sketch1.jpg" alt="Sketch Image" style="width: 100%; max-width: 600px;" />
