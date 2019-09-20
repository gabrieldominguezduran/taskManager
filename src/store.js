import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from './services/AuthService';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoggedIn: false,
		apiUrl: 'http://localhost:3000',
		username: null,
		userId: null
	},
	mutations: {
		authenticate(state) {
			state.isLoggedIn = auth.isLoggedIn();
			if (state.isLoggedIn) {
				state.username = auth.getUserName();
				state.userId = auth.getUserId();
			} else {
				state.getUserId = null;
				state.getUserName = null;
			}
		}
	},
	actions: {
		authenticate(context) {
			context.commit('authenticate');
		}
	}
});
