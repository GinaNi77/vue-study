<template>
  <h2 class="catalog-title">Catalog</h2>
  <div class="v-catalog">
    <vCatalogItem v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product"
    @addToCart="addToCart"/>
  </div>
   
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'v-catalog',
    props:{},
    components:{vCatalogItem},
    data(){
        return{};
    },
    computed:{
      ...mapGetters(['PRODUCTS'])
    },
     methods:{
      ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

      addToCart(data){
        this.ADD_TO_CART(data)
      },  
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response)=>{
          if(response.data){
            console.log("Данные пришли");
          }
        })
    }
};
</script>
  
<style>
.v-catalog{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

.catalog-title{
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
</style>