<!--  -->
<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null,
			}
		},
		mounted() {
			// console.log(this.$refs.wrapper);
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			}),
			this.scroll.on('scroll', (position)=> {
				// console.log(position);
				this.$emit('scroll', position)
			}),
			this.scroll.on('pullingUp', ()=> {
				console.log(1111);
				this.$emit('pullingUP')
			})
		},
		methods: {
			scrollTo(x, y, time= 500) { 
				this.scroll && this.scroll.scrollTo(x, y, time);
			},
			finishFullUp() {
				this.scroll.finishFullUp();
			},
			refresh() {
				console.log('-----------');
				this.scroll && this.scroll.refresh()
			}
		}
	}
</script>

<style scoped>

</style>
