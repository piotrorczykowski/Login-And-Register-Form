<template>
    <div class="container containerExtended">
        <h1>Welcome!</h1>
        <h2>Unfortunately you don't have permisson to acces this site</h2>
        <p id="info">Do you have an accout? Please try to
            <router-link class="link" to="/">Sign in</router-link>
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .containerExtended {
        text-align: center;
    }

    #info {
        margin-top: 1.5em;
        font-size: 1.1em;
    }

    /* TABLET */
    @media screen and (max-width: 1250px) {
        .containerExtended {
            margin-top: 10vh;
        }

        h2 {
            margin-top: 1em;
            font-size: 1.6em;
        }

        #info {
            margin-top: 1em;
            font-size: 1.3em;
        }
    }
    /* END */
    
    /* PHONE */
    @media screen and (max-width: 450px) {
        .containerExtended {
            margin-top: 20vh;
        }
    }
    /* END */
</style>