<script>
    import { goto } from '$app/navigation';

    export let title = "Card Title";
    export let image;
    export let href = "#";

    function handleClick() {
        goto(href);
    }
</script>

<!-- Entire card is clickable -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card" on:click={handleClick}>
    <div class="image-wrapper">
        <img src={image} alt={title} class="card-image" />
        <div class="overlay">
            <h2>{title}</h2>
        </div>
    </div>
</div>

<style>
    .card {
        width: 250px;
        height: 250px;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 12px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .card:hover .overlay {
        opacity: 1;
    }

    .overlay h2 {
        color: #ffdaac;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
    .card {
      width: 175px; /* Set the width to 150px on smaller screens */
      height: 175px; /* Maintain a square aspect ratio */
    }

    .overlay h2 {
      font-size: 1rem; /* Adjust overlay text size for smaller cards */
    }
  }
</style>
