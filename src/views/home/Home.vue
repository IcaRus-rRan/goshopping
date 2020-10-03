<!--  -->
<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:centerNavBar>
				<h4>购物街</h4>
			</template>
		</nav-bar>
		<tab-control :tabs="tabs" 
								 @tabClick="tabClick" 
								 ref="tabControl1"
								 v-show="isFixed"
								 class="tab-control" />
		<scroll class="content" 
						ref="scroll" 
						:probe-type="3" 
						:pull-up-load="true"
						@scroll='contentScroll'
						@pullingUp='loadMore'
						>
			<Home-swiper :banner='banner' @imageLoad="swiperImageLoad"/>
			<recommond-view :recommend='recommend' />
			<feature-view />
			<tab-control :tabs="tabs" 
								   @tabClick="tabClick" 
									 ref="tabControl2" /> 
			<!-- <goods-list :goods='goods[currentType].list' /> -->
			<goods-list :goods='recommend' />
			<ul>
				<li>liebiaoshuju1</li>
				<li>liebiaoshuju2</li>
				<li>liebiaoshuju3</li>
				<li>liebiaoshuju4</li>
				<li>liebiaoshuju5</li>
				<li>liebiaoshuju6</li>
				<li>liebiaoshuju7</li>
				<li>liebiaoshuju8</li>
				<li>liebiaoshuju9</li>
				<li>liebiaoshuju10</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
				<li>liebiaoshuju11</li>
				<li>liebiaoshuju12</li>
				<li>liebiaoshuju13</li>
				<li>liebiaoshuju14</li>
				<li>liebiaoshuju15</li>
				<li>liebiaoshuju16</li>
				<li>liebiaoshuju17</li>
				<li>liebiaoshuju18</li>
				<li>liebiaoshuju19</li>
				<li>liebiaoshuju20</li>
			</ul>
		</scroll>

		<back-top @click.native="backClick" v-show="isShow" />
	</div>
</template>

<script>
	import { getHomeMultidata, getHomeGoods } from 'network/home'
	import { debounce } from 'common/utils.js'

	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/common/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goodslist/GoodsList.vue'
	import Scroll from "components/common/scroll/Scroll";
	import BackTop from "components/content/backtop/BackTop"

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
				dKeyword: [],

				tabs: ['流行', '新款', '精选'],
				// goods: {
				// 	'pop': { page: 0, list: [] },
				// 	'new': { page: 0, list: [] },
				// 	'sell': { page: 0, list: [] }
				// },
				goods: {
					type: Array,
					default() {
						return []
					}
				},
				tabOffsetTop: 0,
				currentType: 'pop',
				isShow: false,
				isFixed: false
			}
		},
		components: {
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			BackTop,
			HomeSwiper,
			RecommondView,
			FeatureView,
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					// console.log(res);
					this.banner = res.data.data.banner.list;
					this.recommend = res.data.data.recommend.list;
					this.keywords = res.data.data.keywords.list;
					this.dKeyword = res.data.data.dKeyword.list;
				}).catch(err => {
					console.log(err);
				})
			},
			getHomeGoods(type) {
				// const page = this.goods[type].page + 1;
				getHomeGoods(type, 1).then(res => {
					// console.log(res);
					this.goods[type].list.push(...res.data.list);
					// this.goods[type].page++;
				}).catch(err => {
					// console.log(err);
				})
			},
			tabClick(index) {
				// console.log(index);
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break;
					case 2:
						this.currentType = 'sell'
						break;
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},
			backClick() {
				// console.log('backClick');
				this.$refs.scroll.scrollTo(0, 0, 500)
			},
			contentScroll(position) {
				// console.log(position);
				this.isShow = position.y < -700;
				this.isFixed = position.y < -this.tabOffsetTop;
			},
			loadMore() {
				// console.log('加载更多的方法');
				this.getHomeGoods(this.currentType);
				this.$refs.scroll.finishPullUp();
			},
			swiperImageLoad() {
				this.tabOffsetTop =  this.$refs.tabControl2.$el.offsetTop;
				// console.log(this.tabOffsetTop);
			}
		},
		created() {
			this.getHomeMultidata(),
			this.getHomeGoods('pop'),
			this.getHomeGoods('new'),
			this.getHomeGoods('sell')
			
		},
		mounted() {
			const refresh = debounce(this.$refs.scroll.refresh, 200);
			this.$bus.$on('imageItemLoad', ()=> {
				refresh()
			})
		}
	}
</script>

<style scoped>
	#home {
		position: relative;
		height: 100vh;
	}

	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}
	.tab-control {
		position: relative;
		z-index: 9;
	}
	.content {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
