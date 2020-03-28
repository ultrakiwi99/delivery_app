<template>
    <div class="container">
        <div id="row" v-if="products">
            <div class="col-12">
                <div class="card" v-for="(product, idx) in products" :key="idx">
                    {{product.name}}
                    <button @click="toCart(product)">Добавить</button>
                </div>
            </div>
        </div>
        <div v-else>
            Каталог загружается...
        </div>
    </div>
</template>

<script>
    export default {
        name: "Catalog",
        props: {
            products: Array
        },
        methods: {
            toCart(product) {
                this.$emit('toProduct', product);
            }
        }
    }
</script>

<style scoped>

</style>