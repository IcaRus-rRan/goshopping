<!--  -->
<template>
  <div class="tab-bar-item"  @click="itemClick">
    <!-- <img src="../../assets/img/checked.png" alt="">
    <div>首页</div> -->
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
        type: String,
        default: '#ff5777'
      }
  },
  data () {
    return {
    }
  },
  computed:{
    isActive(){
        //   $route是处于活跃状态的路由页面
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
    //   console.log(this);
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
    //   console.log(this.path);
      this.$router.push(this.path)
    }
  }
}
</script>

<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
} 
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 7px;
  margin-bottom: 5px;
  vertical-align: middle;
}   
/* .active{
  color: red;
} */
</style>
