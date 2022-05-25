import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import signup from "./pages/signup.vue"
import wall from "./pages/wall/wall.vue"
import login from "./pages/login.vue"
import profil from "./pages/profil.vue"
import updateProfil from "./pages/updateProfil.vue"


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const routes = [
    { path: "/", component: login},
    { path: "/signup", component: signup},
    { path: "/wall", component: wall},
    { path: "/login", component: login},
    { path: "/profil/:id_user", component: profil},
    { path: "/updateProfil", component: updateProfil}

    
]
const router = createRouter({ history: createWebHistory(), routes })
    


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
