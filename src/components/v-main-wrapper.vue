<template>
  <div class="v-main-wrapper">
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <!-- <vCatalog/>
    <vCart v-if="CART.length" 
    :cart_data="CART"/> -->
  </div>
</template>

<script>
// import vCatalog from './v-catalog.vue';
// import vCart from './v-cart.vue';
import {mapGetters} from "vuex"

export default {
name:'v-main-wrapper',
// components:{
//     vCart,
//     vCatalog
// },
props:{},
data(){
    return{
        title:"Hi guys, hi ladies!"
    }
},
computed:{
  ...mapGetters(["CART"])
},
methods:{},
watch:{},
mounted(){

}
};
</script>

<style lang="scss">
.v-main-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
}
</style>