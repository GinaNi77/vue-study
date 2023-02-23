<template>
  <div class="v-cart">
    <h2 class="v-cart__title">cart</h2>
    <vCartItem
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"/>
  </div>
 
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import {mapActions} from "vuex";

export default {
    name: 'v-cart',
    props:{
      cart_data:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
        return{

        }
    },
    components:{
     vCartItem,
    },
    methods:{
      ...mapActions(['DELETE_FROM_CART']),

        deleteFromCart(index){
          this.DELETE_FROM_CART(index)
          console.log(index)
        }
    },
};
</script>

<style lang='scss'>
.v-cart{
  width: 65%;

  &__title{
  text-transform: uppercase;
  font-size: 40px;
  color: #fff;
  text-shadow:
   
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 5px #fff,
   
    0 0 11px #4554e0,
    0 0 20px #4554e0,
    0 0 30px #4554e0,
    0 0 55px #4554e0,
    0 0 80px #4554e0;
  }
}
</style>