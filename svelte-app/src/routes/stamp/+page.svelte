<script>
     import { onMount } from 'svelte';
     import { goto } from '$app/navigation';

onMount(() => {
    console.log("Stamp Page Loaded");
});
</script>

<div class="image-section">
    <img src="/stamp.png" alt="Fine Art" class="image" />
    <button on:click={() => goto('/portfolio')}>← </button>
    <div class="text-overlay">
      <h1>Post Marks</h1>
    </div>
</div>
  
<div class="image-section">
   <div class="text">
     <p>
        Marks made on PLC Graphic Design course using Adobe Illustration application and for the immage on some of it was used Adobe photoshop. Marks were made on Ukrainian Mythological theme.
     </p>
   </div>
</div>

<div class="scrolling-bar">

<img src="Final stamp1.png" alt="Post Mark" class="image-bar" />
<img src="Final Stamp 2.png" alt="Post Mark" class="image-bar" />
<img src="Final Stamp 3.png" alt="Post Mark" class="image-bar" />

</div>


<p>.</p>


<style>
    .image-section {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
    }
  
    .image {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  
    .text-overlay {
      position: absolute;
      top: 80%;
      padding: 3rem;
      width: 400px;
      height: 50px;
      color: #ffd99c;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
    }
  
    .text-overlay h1 {
      font-size: 4rem;
      font-family: "Sue Ellen Francisco";
    }
  
    .text{
      color:#ffdaac;
      font-size: 2rem;
      line-height: 1.6;
      margin-left:0%;
    }
  
    .scrolling-bar {
      display: flex; /* Arrange items horizontally */
      overflow-x: auto; /* Enable horizontal scrolling */
      padding: 1rem 0; /* Add some padding above and below the bar */

    }
  
    .image-bar {
      height:550px; /* Adjust the height as needed */
      width: auto; /* Maintain aspect ratio */
      margin-right: 1rem; /* Add some spacing between images */
      object-fit: contain; /* Make sure the whole image is visible within its container */
      border-radius: 0.75rem;
    }
  
    .image-bar:last-child {
      margin-right: 0; /* Remove margin from the last image */
    }

    /* Style the scrollbar track */
  .scrolling-bar::-webkit-scrollbar {
    height: 12px; /* Adjust height as needed */
    background-color: #520f0f; /* Make the track transparent if you only want to style the thumb */
    border-radius: 6px;
    outline-width: 46px;
    outline-color: black;
  }

  /* Style the scrollbar thumb (the part you drag) */
  .scrolling-bar::-webkit-scrollbar-thumb {
    background-color: #1e0505;
    border-radius: 6px;
  }

  /* Remove scrollbar arrows (WebKit browsers) */
  .scrolling-bar::-webkit-scrollbar-button {
    display: none;
  }

  button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: transparent;
    color: #ffdaac;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 2rem; /* Make the arrow larger */
    z-index: 10; /* Ensure it's above the image and overlay */
  }


  @media (max-width: 768px) {
    .text-overlay {
      top: 50%; /* Move the top edge to the vertical center */
      left: 50%; /* Move the left edge to the horizontal center */
      transform: translate(-50%, -50%); /* Shift the element back by half its width and height */
      padding: 1.5rem;
      width: 230px; /* Make overlay wider on phones */
      height: 60px; /* Adjust height automatically */
      display: flex; /* Enable flexbox for centering */
      flex-direction: column; /* Stack the heading and potentially other text */
      align-items: center; /* Center items horizontally along the cross-axis */
      justify-content: center; /* Center items vertically along the main-axis */
      text-align: center; /* Center the text within the heading itself */
      
    }

    .text-overlay h1 {
      font-size: 2.5rem; /* Smaller heading on phones */
      margin-bottom: 0.5rem; /* Add some space below the heading if needed */
    }

    .text {
      font-size: 1.1rem; /* Smaller text on phones */
      line-height: 1.4;
    }

    .image-bar {
      height: auto; /* Let video height adjust based on width */
      margin-right: 0; /* Ensure no horizontal margin */
      margin-bottom: 1rem;
      padding: 0.5rem; /* Further reduce padding */
      height:215px;
    }

    .scrolling-bar {
      padding: 0.5rem 0; /* Reduce padding for the scrolling bar */
    }
  }
  </style>