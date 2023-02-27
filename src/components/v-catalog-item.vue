<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image)" alt="">
    <div class="v-catalog-item__wrap">
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__about">{{product_data.about}}</p>
    </div>
    <p class="v-catalog-item__price">{{product_data.price}}</p>
    <button class="v-catalog-item__add_to_cart_btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
    name: 'v-catalog-item',
    props:{
      product_data:{
        type: Object,
        default(){
          return{};
        }
      }
    },
    data(){
        return{

        }
    },
    methods:{
      addToCart(){
        this.$emit('addToCart', this.product_data)
        this.product_data.quantity++
      }
    }
};
</script>

<style lang="scss">
.v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 2px #c170da;
    padding: 20px;
    margin: 20px;
    border: 10px solid #3d0335;
    border-image: linear-gradient(to left top,#7b0d91 10%,  transparent 30%, transparent 70%, #4554e0 90%);
    border-image-slice: 1;
    background-color: #03031f; // #0c0c47;
    color: #e9eaf5;
    font-size: 14px;

    &__image{
      border: 2px solid #7b0d91;
      margin-bottom: 20px;
    }

    &__wrap{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1em;
    }

    &__name{
      font-size: 25px;
    }

    &__price{
      margin-bottom: 1em;
      color: #8d8d8d;
    }

    &__price::before{
      content: '\29BF'+" Price:";
      color: #4554e0;
      padding-right: .5em ;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__price::after{
      content: '\20BD';
      padding-left: .2em;
    }

    &__add_to_cart_btn{
      border-radius: 10px;
      font-size: 14px;
      padding: .8em 2em;
      border: none;
      color: #e9eaf5;
      background-image: linear-gradient(to right, #4554e0, #7b0d91);
      
      &:hover{
        cursor: pointer;
      } 
    }

    
}

p{
  margin: 0;
  text-align: left;
  line-height: 2em;
}
</style>