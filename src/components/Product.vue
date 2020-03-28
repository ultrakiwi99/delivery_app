<template>
    <div class="product" v-if="product">
        {{ product.name }}
        <div class="modifiers">
            <div class="modifier" v-for="(mod, idx) in product.modifiers" :key="idx">
                {{mod.name}} {{ mod.price }} <button>+</button>
            </div>
        </div>
        <div class="controls">
            <button @click="$emit('toCatalog')">В каталог</button>
            <button @click="$emit('toCart', product)">В корзину</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props: {
            product: Object
        }
    }
</script>

<style scoped>

</style>