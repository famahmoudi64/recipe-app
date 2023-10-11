import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router1'
import './recipe.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
