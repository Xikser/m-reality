import HouseDelete from '../HouseDelete/HouseDelete'
import {mapActions} from "vuex";

export default {
	name: 'House Details',
	components: {
		HouseDelete
	},
	props: {
		currentHouse: Object,
	},
	methods: {
		...mapActions(['deleteHouseByID']),

		deleteHouse(id) {
			this.deleteHouseByID(id)
			setTimeout(() => {
				this.$router.push('/houses')
			}, 200)
		}
	}
}
