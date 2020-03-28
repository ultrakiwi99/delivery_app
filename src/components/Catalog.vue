<template>
    <div class="catalog">
        <div class="container" v-if="products">
            <div id="row">
                <div class="col-sm-12">
                    <div class="card fluid" v-for="(product, idx) in products" :key="idx">
                        <strong>{{product.name}}</strong>
                        <button @click="toCart(product)">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="spinner-wrapper">
            <span class="spinner"></span>
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
    .catalog {
        height: 100%;
    }

    .spinner-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>