<template>
    <div id="cart" class="container">
        <ul>
            <li v-for="(product, idx) in cart.products" :key="idx">
                {{ product.name }}
            </li>
        </ul>
        <div class="controls">
            <button @click="$emit('toCatalog')">В Каталог</button>
            <button @click="$emit('toCheckout')">Оформить</button>
        </div>
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