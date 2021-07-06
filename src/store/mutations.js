const SET_RESOURCES = (state, payload) =>
	state.houseList = payload.results.map((house) => {

		return {
			id: house._id,
			description: house.description,
			address: house.address,
			floorsNumber: house.floorsNumber,
			label: house.label,
			createdAt: house.createdAt,
			updatedAt: house.updatedAt,
			__v: house.__v
		}
	})

const IS_LOADING = (state, payload) => {
	state.loading = payload
}

const SET_CURRENT_HOUSE = (state, payload) => {
	state.currentHouse = payload.data.result
}

export default {
	SET_RESOURCES,
	IS_LOADING,
	SET_CURRENT_HOUSE
}
