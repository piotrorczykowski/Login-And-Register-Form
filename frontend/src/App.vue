<template>
  <div id="app">
    <div id="left">
      <WelcomeMessage />
    </div>
    <div id="right">
      <router-view />
    </div>
  </div>
</template>

<script>
import WelcomeMessage from './components/WelcomeMessage.vue'

export default {
  components: {
    WelcomeMessage
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
  }

  #left {
    width: 45vw;
    height: 100vh;
    background-color: #0594B4;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #right {
    width: 55vw;
    height: 100vh;
  }

</style>