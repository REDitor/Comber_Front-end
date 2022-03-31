import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/store';

import Home from './components/home/Home.vue';
import Login from './components/Login.vue';
import MyPosts from './components/MyPosts.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/myposts', component: MyPosts }
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');