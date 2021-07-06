<template>
	<router-view :currentHouse="this.$store.state.currentHouse"/>
</template>

<style lang="sass">
@import './assets/sass/variables'
html
	font-size: 10px
	scroll-behavior: smooth

*, *::before, *::after
	margin: 0
	box-sizing: border-box

body
	overflow-x: hidden
	background: white
	width: 100%
	color: $color--dark
	font-family: $font--default

main
	position: relative
	width: 100%
	margin: auto

i
	color: $color--dark

@media screen and (min-width: 320px) and (max-width: 980px)
	.main
		width: 100vw
		padding: 0 10px

a
	text-decoration: none
	color: $color--dark

ol, ul, li
	list-style: none
</style>
