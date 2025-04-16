<script>
    import {onMount} from 'svelte';
    import { on } from 'svelte/events';

    onMount(() =>{
        console.log("About Page Loaded");
    });
</script>

<h1>About Us</h1>
<p> We are passionate about...</p>

<style>
    h1{color:#007bff;}
    p{font-size: 18px;}
</style>