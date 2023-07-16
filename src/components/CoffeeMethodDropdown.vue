<template>
    <div>
        <button @click="showDropdown" class="dropdown">select a method</button>
        <div v-if="showMenu" class="menu">
            <div class="menu-item" v-for="coffeeMethod in coffeeMethods" v-bind:key="coffeeMethod.Id" @click="setCoffeeMethod(coffeeMethod)">{{ coffeeMethod.Method }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoffeeMethodDropdown',
    data: function() {
        return {
            showMenu: false
        }
    },
    props: {
        onClick: { type: Function },
        activeCoffeeMethod: String,
        coffeeMethods: {
            type: Object
        }
    },
    methods: {
        showDropdown: function () {
            this.showMenu = !this.showMenu
        },
        setCoffeeMethod: function (coffeeMethod){
            this.showDropdown()
            this.onClick(coffeeMethod)
        }
    }
}
</script>

<style>
.dropdown {
    background: none;
    padding: none;
    border: none;
}
.dropdown:hover {
    color: white;
    cursor: pointer;
}
.menu {
    cursor: pointer;
}

.menu-item:hover {
    color: white;
    cursor: pointer;
    display:block;
}
</style>