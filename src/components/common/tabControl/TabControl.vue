<!--  -->
<template>
	<div class="tab-control">
		<div v-for="(item, index) in tabs" 
		     class="tab-control-item" 
			   :class="{active: index === currentIndex}" 
			   @click="tabClick(index)">
			<span>{{ item }}</span>
		</div>
		
	</div>
</template>

<script>

	export default {
		name: 'TabControl',
		props: {
			tabs: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data(){
			return {
				currentIndex: 0
			}
		},
		components: {
		},
		methods: {
			tabClick(index){
				this.currentIndex = index;
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style scoped>
.tab-control {
	/* position: sticky;
	top: 44px; */
	/* display: inline; */
	display: flex;
	text-align: center;
	height: 40px;
	line-height: 40px;
	background-color: #fff;
}
.tab-control-item {
	flex: 1;
	font-size: 16px;
}
.active {
	/* color: var(--color-high-text); */
	color: var(--color-high-text);
}
.active span {
	padding: 5px;
	border-bottom: 3px solid var(--color-tint);
}

</style>
