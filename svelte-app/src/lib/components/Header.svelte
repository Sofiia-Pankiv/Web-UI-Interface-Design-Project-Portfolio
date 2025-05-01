<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
    import { base } from '$app/paths';
   
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <a href="{ base }/">
            <img src="{ base }/Logo.png" alt="Website Logo">
        </a>
        <!-- <h1>My Svelte App</h1> -->
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 100px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
      flex-direction: row; /* Keep logo and navigation in a row */
      justify-content: space-between; /* Put space between logo and navigation */
      align-items: center; /* Vertically align items */
      padding: 1rem; /* Keep some padding */
    }

    .logo {
      justify-content: flex-start; /* Align logo to the left */
      margin-bottom: 0; /* Remove bottom margin */
    }

    .logo img {
      width: 80px; /* Keep logo size consistent on phones */
      margin-right: 1rem; /* Add some right margin for spacing */
    }

   

  }
</style>