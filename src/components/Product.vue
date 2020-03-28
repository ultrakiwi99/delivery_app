<template>
    <div class="container" v-if="product">
        <div class="card">
            <div class="section">
                <strong>{{ product.name }}</strong>
            </div>
            <div class="section">
                <div v-for="(mod, idx) in product.modifiers" :key="idx">
                    {{mod.name}} {{ mod.price }}
                    <button>+</button>
                </div>
            </div>
        </div>
        <footer class="sticky">
            <button class="inverse" @click="$emit('toCatalog')">В каталог</button>
            <button class="primary" @click="$emit('toCart', product)">Добавить</button>
        </footer>
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