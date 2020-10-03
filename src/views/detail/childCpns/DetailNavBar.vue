<!--  -->
<template>
	<div>
		<nav-bar>
			<template v-slot:leftNavBar>
				<div class="back" @click="backClick">
					<img src="~assets/img/common/back.svg" >
				</div>
			</template>
			<template v-slot:centerNavBar>
				<div class="title" >
					<div class="title-item" 
							 v-for="(item, index) in titles" 
							 @click="titleClick(index)"
							 :class="{active: index == currentIndex}" >
						{{ item }}
					</div>
				</div>
			</template>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	export default {
		data () {
			return {
				titles: ['商品', '详情', '评价', '推荐'],
				currentIndex: 0
			}
		},
		methods: {
			titleClick(index) {
				this.currentIndex = index;
			},
			backClick() {
				this.$router.back()
			}
		},
		components: {
			NavBar
		}
	}
</script>

<style  scoped>
	.back {
		padding-top: 6px;
	}
	.title {
		display: flex;
	}
	.title-item {
		flex: 1;
		font-size: 16px;
	}
	.active {
		 color: var(--color-high-text);
	}
</style>
