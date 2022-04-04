<template>
    <div class="container containerExtended">
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

<style scoped>
    .containerExtended {
        text-align: center;
    }

    #info {
        margin-top: 1.5em;
        font-size: 1.1em;
    }
</style>