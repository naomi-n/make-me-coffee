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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color:rgb(203, 248, 216)
}

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2c3e50;
}
</style>
