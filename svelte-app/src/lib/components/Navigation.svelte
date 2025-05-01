<script>
    let isOpen = false;
    import {Clock} from "$lib";
</script>

<Clock />

<nav class="nav">

    <ul class:open={isOpen}>
        <li><a href="/">• Info</a></li>
        <li><a href="/portfolio">• Portfolio</a></li>
        <li><a href="/contact">• Contact</a></li> 
    </ul>
</nav>


<style>

    /* Base Navigation Styling */
    .nav {
        background-color: none;
        padding: 2px;
        text-align:left;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column; /* Stack buttons vertically */
        align-items: left; /* Optional: center horizontally */
        gap: 10px;
    }

    .nav ul li {
        display: inline-block;
    }

    .nav ul li a {
        color:#c8ac97;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.3em;
    }

    
    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {

         /* You'll likely need to adjust Navigation styling here to move it to the right */
    /* For example, if Navigation is a <nav> element: */
    :global(nav) {
        width: 100%; /* Take full width */
     display: flex;
     justify-content: flex-end; /* Push navigation to the right */
     }

     :global(nav ul) {
     flex-direction: row; /* Keep links in a row */
     align-items: center;
     }

     :global(nav ul li) {
     margin-left: 1rem;
     flex-direction: row; 
     }
        
    }
</style>
