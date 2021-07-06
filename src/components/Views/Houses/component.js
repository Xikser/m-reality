import {mapState, mapActions} from 'vuex'
import House from './HouseItem/House'
import HouseDelete from './HouseDelete/HouseDelete'
export default {
	name: 'HomeList',
	components: {
		House,
		HouseDelete
	},
	created() {
		this.getItems()
	},
	computed: {
		...mapState(['houseList'])
	},
	methods: {
		...mapActions(['getItems', 'getHousesByID', 'deleteHouseByID']),
		getHouseID(id) {
			this.getHousesByID(id)
		},
		deleteHouse(id) {
			this.deleteHouseByID(id)
		}
	}
}
