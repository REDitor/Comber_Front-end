import axios from './../axios-auth';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            id: null,
            token: null,
            username: null,
            role: null
        }
    },
    getters: {
       
    },
    mutations: {
        authenticateUser(state, parameters) {
            state.id = parameters.id;
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
                        localStorage.setItem('id', res.data.id);
                        localStorage.setItem('token', res.data.jwt);
                        localStorage.setItem('username', res.data.username);
                        localStorage.setItem('role', res.data.role);
                        commit('authenticateUser', res.data);
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        },
        autoLogin({ commit }) {
            const id = localStorage.getItem('id');
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');

            if (id && token && username && role) {
                axios
                    .defaults.headers.common['Authorization'] = `Bearer ${token}`;
                commit('authenticateUser', {
                    id: id,
                    token: token,
                    username: username,
                    role: role
                });
            }
        },
        logout() {
            localStorage.clear();
        }
    }
});

export default store;