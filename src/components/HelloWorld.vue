<template>
  <div class="hello">
    <span>
      <h1>{{ msg }}</h1>
      <span>
      how would you like to prepare your coffee today?
      <br>
      <br>
      <CoffeeMethodDropdown :on-click='setCoffeeMethod' :coffeeMethods='coffeeMethods'></CoffeeMethodDropdown>
      </span>
        <!-- <p>Current selected: {{ activeCoffeeMethod.Method }}</p> -->
    </span>
  </div>
</template>

<script>

import CoffeeMethodDropdown from './CoffeeMethodDropdown.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CoffeeMethodDropdown
  },
  data: function() {
    return {
      activeCoffeeMethod: {Id: '1', Method: 'v60'},
      coffeeMethods: [
      {Id: '1', Method: 'v60'},
      {Id: '2', Method: 'french press'},
      {Id: '3', Method: 'aeropress'},
      ]
    }
  },
  methods: {
    setCoffeeMethod: function (coffeeMethod) {
      this.activeCoffeeMethod = coffeeMethod
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello {
  height: 500px;
  line-height: 500px;
} */
/* span {
  display: inline-block;
  vertical-align: middle;
  line-height: 18px;
} */

h1 {
  font-family: Rosmatika;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
