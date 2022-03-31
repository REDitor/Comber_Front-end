import axios from './../axios-auth';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            token: null,
            username: null,
            role: null
        }
    },
    getters: {

    },
    mutations: {
        authenticateUser(state, parameters) {
            state.token = parameters.token;
            state.username = parameters.username;
            state.role = parameters.role;
        }
    },
    actions: {
        login({ commit }, parameters) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/users/login', {
                        username: parameters.username,
                        password: parameters.password
                    })
                    .then((res) => {
                        axios
                            .defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
                        localStorage.setItem('token', res.data.jwt);
                        localStorage.setItem('username', res.data.username);
                        localStorage.setItem('')
                        commit('authenticateUser', res.data);
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        },
        autoLogin({ commit }) {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');

            if (token && username && role) {
                axios
                    .defaults.headers.common['Authorization'] = `Bearer ${token}`;
                commit('authenticateUser', {
                    token: token,
                    username: username,
                    role: role
                });
            }
        },
    }
});

export default store;