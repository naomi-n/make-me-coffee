import { createApp } from 'vue'
// creates new application instance with the createApp function

import App from './App.vue'
// importing root component
// components: splits UI into independent and reusable pieces
// typically are organized into a tree of nested, reusable components

createApp(App).mount('#app')
// .mount() method renders an application instance
// expects a "container" argument
// #app is foundd in App.vue
// should always be called after all app configurations and asset registrations are done
