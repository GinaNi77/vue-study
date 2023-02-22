<template>
  <h2 class="catalog-title">Catalog</h2>
  <div class="v-catalog">
    <vCatalogItem v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product"
    @hello="showArticleFromChilde"/>
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
      ...mapActions(["GET_PRODUCTS_FROM_API"]),

      showArticleFromChilde(data){
        console.log(data)
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
  color: #4554e0;
  text-transform: uppercase;
  font-size: 40px;
}
</style>