<!--  -->
<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:centerNavBar>
				<h4>购物街</h4>
			</template>
		</nav-bar>
		<home-swiper :banner='banner'/>
		<recommond-view :recommend='recommend'/>
		<feature-view/>
		<span>首页content</span>
	</div>
</template>

<script>
	import { getHomeMultidata } from 'network/home'

	import NavBar from 'components/common/navbar/NavBar.vue'
	import HomeSwiper from "./childCpns/HomeSwiper";
	import RecommondView from "./childCpns/RecommendView";
	import FeatureView from "./childCpns/FeatureView";

	export default {
		name: 'Home',
		data() {
			return {
				banner: [],
				recommend: [],
				keywords: [],
				dKeyword: []
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			RecommondView,
			FeatureView
		},
		created() {
			getHomeMultidata().then(res => {
				// console.log(res);
				this.banner = res.data.data.banner.list;
				this.recommend = res.data.data.recommend.list;
				this.keywords = res.data.data.keywords.list;
				this.dKeyword = res.data.data.dKeyword.list;
			}).catch(err => {
				console.log(err);
			})
		}
	}
</script>

<style scoped>
	.home-nav {
		background-color: var(--color-tint);
	}
</style>
