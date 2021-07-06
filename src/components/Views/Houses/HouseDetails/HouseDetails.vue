<template>
	<section class="current-house">
		<router-link to="/houses">Go back</router-link>

		<p>Name: {{ currentHouse.label }}</p>
		<p>Address: {{ currentHouse.address }}</p>
		<p>Floors number: {{ currentHouse.floorsNumber }}</p>
		<p>Desc: {{ currentHouse.description }}</p>
		<p>ID: {{ currentHouse._id }}</p>

		<HouseDelete  @click="deleteHouse(currentHouse._id)"></HouseDelete>
	</section>

</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
