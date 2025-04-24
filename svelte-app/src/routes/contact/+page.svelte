<script>
    import { onMount } from 'svelte';
    import {Clock} from "$lib";

    onMount(() => {
        console.log("Contact Page Loaded");
    });
</script>

<div class = "vertical"></div>

<h1 class="title">Contact me</h1>

<div class="contact">
    <div class="info">
        <div class="line">
            <img src="email.png" alt="Email icon" />
            <a href="mailto:sophiapankiv10@gmail.com">sophiapankiv10@gmail.com</a>
        </div>

        <div class="line">
            <img src="instagram icon.png" alt="Instagram icon" />
            <a href="https://www.instagram.com/sophia18ad/">@sophia18ad</a>
        </div>

        <div class="line">
            <img src="facebook.png" alt="Facebook icon" />
            <a href="https://www.facebook.com/share/16HQiW6bcr/?mibextid=wwXIfr">Sophia Pankiv</a>
        </div>

        <div class="line">
            <img src="watsup.png" alt="Whatsapp icon" />
            <a href="https://api.whatsapp.com/send?phone=+3530852854744">+353 85 285 4744</a>
        </div>

        <div class="line">
            <img src="Linkidin.png" alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/sofiia-pankiv-181614350">Sofiia Pankiv</a>
        </div>
    </div>

</div>

<img src="ContactFerret.png" alt="Ferret" class="ferret" />

<div class="right-low">
    <div class="location">
        <h3>I'm Here:</h3>
        <p>Ireland, Co. Carlow</p>
        <Clock/>
    </div>
</div>

<style>
     
    .vertical {
     border-left: 6px solid #ffd99c;
     height: 100%;
     position: absolute;
     left: 10%;
    }

    .title {
        color: #ffd99c;
        font-size: 4rem;
        text-align: left;
        padding-left: 1rem;
        margin-top: 2rem;
        margin-left:15%;
    }

    .contact {
        display: flex;
        justify-content: space-between;
        color: #ffd99c;
        margin-left:15%;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.01rem;
    }

    .line {
        display: flex;
        align-items: center;
        gap: -10px;
        font-size: 1.5rem;
    }

    .line img {
        width: 90px;
        
    }

    .line a {
        text-decoration: none;
        color: #ffd99c;
        font-weight: bold;
    }

    .right-low {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom:10rem;
    }

    .ferret {
        width: 700px;
        margin-bottom: -6rem;
        margin-right: 3rem;
    }

    .location {
        color: #ffc75f;
        font-style: italic;
        font-size: 1.1rem;
        text-align: right;
    }

    .location h3 {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
</style>
