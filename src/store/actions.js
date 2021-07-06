import axios from 'axios'

const getItems = ({commit}) => {
	const URL = 'http://mobile-reality-backend.sadek.usermd.net/houses/all'
	commit('IS_LOADING', true)

	axios.get(`${URL}`)
		.then((response) => {
			commit('SET_RESOURCES', response.data)

			setTimeout(() => {
				commit('IS_LOADING', false)
			}, 1000)
		})
		.catch((error) => {
			console.log(error)
		})
}

const getHousesByID = ({commit}, payload) => {
	const URL = 'http://mobile-reality-backend.sadek.usermd.net/houses/'

	axios.get(`${URL}${payload}`)
		.then((response) => {
			commit('SET_CURRENT_HOUSE', response)
		})
		.catch((error) => {
			console.log(error)
		})
}

const deleteHouseByID = ({dispatch, commit}, payload) => {
	const URL = 'http://mobile-reality-backend.sadek.usermd.net/houses/'

	axios.delete(`${URL}${payload}`)
		.then(response => {
			dispatch('getItems')
			commit('IS_LOADING', false)
		}).catch((error) => {
			console.log(error)
	})
}

export default {
	getItems,
	getHousesByID,
	deleteHouseByID
}
