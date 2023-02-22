<template>
  <div class="v-cart-item">
    <p>item-1</p>
    <p>price</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';

export default {
    name: 'v-cart-item',
    props:{},
    data(){
        return{

        }
    },
    components:{
        vCart, vCatalog
    }
};
</script>

<style>

</style>