<template lang="pug">
	.wrapper
		img(:src="value")
		.wrap
</template>
<script>
export default {
	name: 'Icon',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	.wrapper{
		background-color: rgba(0,0,0,0.1);
		width: 100px;
		height: 100px;
		margin: auto;
		border-radius: 10px;
		margin-bottom: 1em;
	}
</style>