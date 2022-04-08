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

// Global styles
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 0.0625em;
  }

  .container {
    width: 40vw;
    height: 40vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20vh;
  }

  .error {
    width: 25em;
    color: #ff0000;
  }

  .errorMessage {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    margin-top: 1em;
  }

  h1 {
    font-size: 3em;
    color: #343a40;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 5vh;
  }

  form {
    padding: 1em 3em 1em 3em;
  }

  .submit {
    width: 25em;
    height: 2.5em;
    margin-top: 0.5em;
    font-size: 1.2em;
    font-weight: bold;
    background-color: #0594B4;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .submit:hover {
    opacity: 0.95;
  }

  .submit:active {
    transform: scale(0.99);
  }

  .link {
    text-decoration: none;
    color: #0594B4;
  }

  .link:hover {
    opacity: 0.8;
  }

  /* TABLET */
  @media screen and (max-width: 1250px) {
    .container {
      width: 100vw;
      height: 55vh;
      margin-top: 5vh;
    }

    h1 {
      font-size: 3.5em;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .submit {
      width: 15em;
      height: 2.2em;
      font-size: 2em;
    }

    .container p {
      width: 80vw;
      font-size: 1.5em;
      text-align: center;
    }

    .error {
      margin-top: -1em;
    }

    .errorMessage {
      margin-top: 0;
    }
  }
  /* END */

  /* PHONE */
  @media screen and (max-width: 450px) {
    * {
      overflow: hidden;
    }
    
    .container {
      width: 100vw;
      height: 100vh;
    }

    .submit {
      width: 10em;
      height: 2.2em;
      font-size: 1.5em;
    }
  }
  /* END */
</style>





<style scoped>
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

  /* TABLET */
  @media screen and (max-width: 1250px) {
    #app {
      flex-direction: column;
    }

    #left {
      width: 100vw;
      height: 40vh;
    }

    #right {
      width: 100vw;
      height: 60vh;
    }
  }
  /* END */

  /* PHONE */
  @media screen and (max-width: 450px) {
    #left {
      display: none;
    }

    #right {
      width: 100vw;
      height: 100vh;
    }
  }
  /* END */
</style>