import { getWeather } from '../api/weather-api'

export default {
	async ACT_DAILY({ commit }, value) {
		// 로딩바 나타남
		commit('MUT_LOADING', true);
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getWeather(value, 'daily'))
		// 로딩바 사라짐
		commit('MUT_LOADING', false);
	},
	async ACT_DAYS({ commit }, value) {
		// 로딩바 나타남
		commit('MUT_LOADING', true);
		commit('MUT_DAYS', await getWeather(value, 'days'))
		// 로딩바 사라짐
		commit('MUT_LOADING', false);
	},
}