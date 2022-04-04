<template>
    <div class="container">
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

<style scoped>
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