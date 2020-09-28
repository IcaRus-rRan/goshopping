<!--  -->
<template>
  <div id="tab-bar">
  <!-- <main-tab-bar id="tab-bar"></main-tab-bar> -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'TabBar',
    components:{
      // TabBarItem
    },
    data () {
      return {
      }
    }
  }
</script>

<style  scoped>
#tab-bar {
  display: flex;
  /* background-color: #f2f2f2; */
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 21px rgba(100, 100, 100, 0.2);
}


</style>
