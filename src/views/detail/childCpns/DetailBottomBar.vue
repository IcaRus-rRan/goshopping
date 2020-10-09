<template>
	<div class="flex bot-bar-wrap">
		<div class="bot-bar-item">
			<img src="~assets/img/detail/icon01.png" alt="">
			<p>客服</p>
		</div>
		<div class="bot-bar-item">
			<img src="~assets/img/detail/icon02.png" alt="">
			<p>店铺</p>
		</div>
		<div class="bot-bar-item">
			<img src="~assets/img/detail/icon03.png" alt="">
			<p>收藏</p>
		</div>
		<div class="bot-bar-item btn cart-btn" @click="addCart">加入购物车</div>
		<div class="bot-bar-item btn buy-btn">购买</div>
	</div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
		methods: {
			addCart() {
				this.$emit('addCart')
			}
		}
	}
</script>

<style lang="less" scoped>
	.bot-bar-wrap {
		height: 49px;
		position: fixed;
		display: flex;
		z-index: 9;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
  	box-shadow: 0 -1px 21px rgba(100, 100, 100, 0.2);
		.bot-bar-item {
			width: 15%;
			font-size: 12px;
			color: #333;
			text-align: center;
			img{
				width: 22px;
				height: 22px;
				margin: 6px 0 4px;
				vertical-align: middle;
			}
		}
		.btn {
			width: 29%;
			font-size: 16px;
			/* font-weight: 700; */
			line-height: 49px;
			text-align: center;
		}
		.cart-btn {
			background-color: #F9CD0B;
		}
		.buy-btn {
			color: #fff;
			background-color: var(--color-high-text);
		}
	}
</style>
