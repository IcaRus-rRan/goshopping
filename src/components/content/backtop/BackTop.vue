<!--  -->
<template>
	<div class="backtop">
		<img src="~assets/img/common/top.png">
	</div>
</template>

<script>
export default {
	name: 'BackTop',
	data () {
		return {
		}
	},

}
</script>

<style  scoped>
	.backtop {
		width: 52px;
		height: 52px;
		position: fixed;
		bottom: 60px;
		right:  15px;
	}
	.backtop img {
		width: 100%;
	}

</style>
