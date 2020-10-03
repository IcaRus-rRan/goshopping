<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="leftNavBar"></slot>
		</div>
		<div class="center">
			<slot name="centerNavBar"></slot>
		</div>
		<div class="right">
			<slot name="rightNavBar"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		/* background-color: pink; */
		box-shadow: 0 1px 11px rgba(100, 100, 100, 0.2);
	}

	.center {
		width: 220px;
		flex: 1;
	}

	.left,
	.right {
		/* flex: 1; */
		width: 50px;
		/* background-color: skyblue; */
	}
</style>
