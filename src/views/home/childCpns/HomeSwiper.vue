<!--  -->
<template>
	<swiper>
		<swiper-item v-for='item in banner'>
			<a :href="item.link">
				<img :src="item.image" title="item.title" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import { Swiper, SwiperItem } from 'components/common/swiper'

	export default {
		name: 'HomeSwiper',
		data(){
			return {
				isLoad: false
			}
		},
		props: {
			banner: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		},
		methods: {
			imageLoad() {
				if (!this.isLoad) {
					this.$emit('imageLoad');
					this.isLoad = true
				}
			}
		}
	}
</script>

<style scoped>

</style>
