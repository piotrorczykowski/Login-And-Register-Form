<template>
    <div id="nonAuth">
        <h1>Welcome!</h1>
        <h2>Unfortunately you don't have permisson to acces this site</h2>
        <p id="info">Do you have an accout? Please try to
            <router-link id="link" to="/">Sign in</router-link>
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        letter-spacing: 0.0625em;
    }

    #nonAuth {
        width: 40vw;
        height: 40vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20vh;
        text-align: center;
    }

    h1 {
        font-size: 3em;
        color: #343a40;
    }

    h2 {
        font-size: 1.5em;
        margin-top: 5vh;
    }

    #info {
        margin-top: 1.5em;
        font-size: 1.1em;
    }

    #link {
        text-decoration: none;
        color: #0594B4;
    }

    #link:hover {
        opacity: 0.8;
    }
</style>