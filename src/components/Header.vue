<template lang="pug">
	header.header-wrapper
		.logo
			i.fa.fa-map-marker-alt
			router-link(to='/') DAILY
		ul.navi-wrapper
			li.navi
				router-link(to='/5days') 5DAYS
</template>
<script>
export default {
	name: 'Header',
}
</script>
<style lang="scss" scoped>
.header-wrapper {
	color: #ffffff;
	background-color: #3f87a6;
	@include flex($FS, $CT);
	.logo {
		@include flex($FS, $CT);
		padding: 1em;
		i {
			margin-right: 1em;
		}
	}
	.navi-wrapper {
		@include flex($FS, $CT);
		.navi {
			padding: 1em;
		}
	}
}
</style>