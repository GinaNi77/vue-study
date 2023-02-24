<template>
  <div class="v-cart">
    <router-link :to="{name:'catalog'}">
      <div class="v-cart__link_to_catalog">
        <i class="medium material-icons">store_mall_directory</i>
      </div>    
    </router-link>

    <h2 class="v-cart__title">cart</h2>
    <vCartItem
    v-for="(item, index) in CART"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"/>

    <div v-if="!CART.length" class="v-cart__empty_cart">
      <p class="v-cart__empty_cart_text">Cart is empty</p>
      <img src="../../public/img/icons/cat.png" alt="">

    </div>

  
  </div>
 
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import {mapActions, mapGetters} from "vuex";

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
    computed:{
      ...mapGetters(['CART']),
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
  color: #e9eaf5;
  margin-bottom: 1em;
  text-shadow:
   
    0 0 1px #e9eaf5,
    0 0 2px #e9eaf5,
    0 0 5px #e9eaf5,
   
    0 0 11px #4554e0,
    0 0 20px #4554e0,
    0 0 30px #4554e0,
    0 0 55px #4554e0,
    0 0 80px #4554e0;
  }

  &__link_to_catalog{
      color: #4554e0;
      position: absolute;
      top: 2em;
      right: 30em;

      &:hover{
        cursor: pointer;
      }
  }
  
  &__empty_cart_text{
    font-size: 4em;
    text-align: center;
    color: #4554e0,;
  }

}
</style>