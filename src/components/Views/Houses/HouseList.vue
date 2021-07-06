<template>
	<main class="houselist" v-if="$store.state.loading === false">

		<h1>House List:</h1>

		<router-link to="/" class="back">Back to previous page</router-link>

		<ul class="houselist__list">
			<li
					v-for="(house, index) in houseList"
					:id="index"
					class="houselist__list-item"
			>
				<House
						@click="getHouseID(house.id)"
						:house="house"
				/>
				<HouseDelete  @click="deleteHouse(house.id)"></HouseDelete>
			</li>
		</ul>
	</main>

<section class="isLoading" v-else>
	<h1>Loading</h1>
</section>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
