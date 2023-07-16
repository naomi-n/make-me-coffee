<template>
  <HelloWorld :msg=greeting />
  <CoffeeMethods/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      greeting
    }
  }
}

// set greeting message 
var greeting = new String();
var today = new Date()
var currentHour = today.getHours()

if (currentHour < 12) {
  greeting = "good morning"
}
else if (currentHour < 18) {
  greeting = "good afternoon"
}
else {
  greeting = "good evening"
}

</script>

<style>
#app {
  font-family: Helvetica;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

body {
  background-image: url("@/assets/lavender_matcha.jpg");
  background-size: cover;
  background-color:rgb(203, 248, 216);
}

button {
  font-family: Helvetica;
  font-size: 30px;
  color: #2c3e50ae;
}

@font-face {
  font-family: Rosmatika;
  src: url("@/assets/RosmatikaRegular-BWA45.ttf");
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
</style>
