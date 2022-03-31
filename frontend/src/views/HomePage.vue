<template>
    <div id="home">
        <h1>HomePage</h1>
        <h2>Welcome <span id="user">{{ name }}</span> you are logged in</h2>
        <router-link @click="logOut" id="logOutButton" to="/">Log out</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        // Set name from local storage when component is created
        this.name = localStorage.getItem('firstName')
    },
    methods: {
        logOut() {
            //  Remove user data
            localStorage.removeItem('token')
            localStorage.removeItem('firstName')
        }
    }
}
</script>

<style>
 * {
        margin: 0;
        padding: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        letter-spacing: 0.0625em;
    }

    #home {
        width: 40vw;
        height: 40vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20vh;
    }

    h1 {
        font-size: 3em;
        color: #343a40;
    }

    h2 {
        font-size: 1.5em;
        margin-top: 5vh;
    }

    #user {
        color: #0594B4;
        text-decoration: underline;
    }

    #logOutButton {
        width: 20em;
        height: 2em;
        margin-top: 1.5em;
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        padding-top: 0.4em;
        background-color: #0594B4;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    #logOutButton:hover {
        opacity: 0.95;
    }

    #logOutButton:active {
        transform: scale(0.99);
    }
</style>