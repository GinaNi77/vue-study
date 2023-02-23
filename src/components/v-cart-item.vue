<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info-wrap">
            <div class="v-cart-item__name-del-btn-wrap">
                <p class="v-cart-item__name">{{cart_item_data.name}}</p>
                <button class="v-cart-item__delete-btn" @click="deleteFromCart">Delete</button>
            </div>
            <p class="v-cart-item__article">{{cart_item_data.article}}</p>
            <p class="v-cart-item__price">{{cart_item_data.price}}</p>
            <div class="v-cart-item__quantity-wrap">
                <button class="quantity-wrap__decrease-btn">-</button>
                <p class="v-cart-item__quantity">{{cart_item_data.quantity}}</p>
                <button  class="quantity-wrap__increase-btn">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-cart-item',
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{}
    },
    computed:{

    },
    methods:{
        deleteFromCart(){
        this.$emit('deleteFromCart')
      }
    },
    mounted(){
        console.log("123")
    },
};
</script>

<style scoped lang="scss">

.v-cart-item{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em;
    margin-bottom: 3em;
    border: 10px solid #3d0335;
    border-image: linear-gradient(to left top,#7b0d91 10%,  transparent 30%, transparent 70%, #4554e0 90%);
    border-image-slice: 1;
    background-color: #03031f; 
    color: #e9eaf5;
    font-size: 16px;

    &__name{
        font-size: 25px;
    }

    &__article, &__price{
        color: #8d8d8d;
    }

    &__article::before, &__price::before{
        content: '\29BF'+" Price:";
        color: #4554e0;
        padding-right: .5em ;
        font-weight: 700;
        text-transform: uppercase;
    }

    &__article::before{
        content: '\29BF'+" Article:";
    }

    &__price::after{
        content: '\20BD';
        padding-left: 5px;
    }
    &__quantity-wrap{
        margin-top: 1em;
        width: 30%;
        & p{
            text-align: center;
        }
    }

    &__name-del-btn-wrap, 
    &__quantity-wrap{
        display: flex;
        justify-content: space-between;
    }
    &__info-wrap{
        width: 60%;
    }   
}

p{
    text-align: left;
    width: 100%;
}

button{
    border-radius: 10px;
    font-size: 14px;
    padding: .8em 2em;
    border: none;
    color: #e9eaf5;
    background-image: linear-gradient(to right, #4554e0, #7b0d91);
}

button:hover{
    cursor: pointer;
}

.quantity-wrap__decrease-btn, .quantity-wrap__increase-btn{
    padding: 0 1em;
}

</style>