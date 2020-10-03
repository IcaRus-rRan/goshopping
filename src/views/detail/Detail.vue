<!--  -->
<template>
	<div id="detail">
		<detail-nav-bar />
	</div>
</template>

<script>
	import Scroll from "components/common/scroll/Scroll.vue";
	// import BackTop from "components/content/backTop/BackTop.vue";
	import GoodsList from "components/content/goodslist/GoodsList.vue";

	import DetailNavBar from './childCpns/DetailNavBar'
	import DetailSwiper from './childCpns/DetailSwiper.vue'
	import DetailBaseInfo from './childCpns/DetailBaseInfo.vue'
	import DetailShopInfo from './childCpns/DetailShopInfo.vue'
	import DetailGoodsInfo from './childCpns/DetailGoodsInfo.vue'
	import DetailParamInfo from './childCpns/DetailParamInfo.vue'
	import DetailCommentInfo from './childCpns/DetailCommentInfo.vue'
	import DetailBotBar from './childCpns/DetailBotBar.vue'

	import { getDetail, Goods, Shop, Param, getRecommend } from 'network/detail'

	export default {
		data() {
			return {
				iid: null,
				topBnner: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: [],
				recommendInfo: [],
				// isShowBackTop: false, 
				themeTopY: [],
				currentIndex: 0,
				itemImgLister: null
			}
		},
		components: {
			DetailNavBar
		},
		created() {
			this.iid = this.$route.params.acm;
			// this.iid = this.$route.params.iid	
			getDetail(this.iid).then(res => {
				// console.log(res);
				const data = res.data.result;
				//1.获取顶部banner
				this.topBnner = data.itemInfo.topImages
				//2.获取商品详情
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
				//3.获取商家详情
				this.shop = new Shop(data.shopInfo)
				//4.获取商家详情图片
				this.detailInfo = data.detailInfo
				//5.获取参数信息
				this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
				//6.获取评论信息
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list
				}
			})
		}
	}
</script>

<style scoped>

</style>
