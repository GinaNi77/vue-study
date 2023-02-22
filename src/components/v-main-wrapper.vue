<template>
  <div class="v-main-wrapper">
    <vCatalog/>
    <vCart/>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';

export default {
name:'v-main-wrapper',
components:{
    vCart,
    vCatalog
},
props:{},
data(){
    return{
        title:"Hi guys, hi ladies!"
    }
},
computed:{},
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