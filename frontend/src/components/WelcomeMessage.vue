<template>
  <div id="welcome">
    <div id="graphic">
        <img src="@/assets/welcomeImage.jpeg" id="image">
    </div>
    <div id="message">
        <h2>Welcome back!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin rhoncus quam scelerisque, ultrices velit non, interdum massa.
        </p>
    </div>   
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  #image {
    width: 35vw;
    height: auto;
    margin-left: calc((45vw - 35vw) / 2 );
  }

  #message {
    text-align: center;
    color: white;
  }

  #message h2 {
    font-size: 2em;
    color: white;
    padding-top: 1em;
  }

  #message p {
    font-size: 1.2em;
    padding: 1em;
  }

  /* TABLET */
  @media screen and (max-width: 1250px) {

  }
  /* END */
</style>