<template>
    <div id="cart" class="container">
        <div class="row" v-for="(product, idx) in cart.products" :key="idx">
            <div class="col-sm-10">
                {{ product.name }}
            </div>
            <div class="col-sm-2">
                {{ product.price }} р.
            </div>
        </div>
        <footer class="sticky">
            <button class="inverse" @click="$emit('toCatalog')">В Каталог</button>
            <button class="tertiary" @click="$emit('toCheckout')">Оформить</button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: {
            cart: Object
        }
    }
</script>

<style scoped>

</style>