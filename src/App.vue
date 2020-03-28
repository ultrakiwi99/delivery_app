<template>
  <div id="app">
    <CartIcon :total="cart.products.length"/>
    <Catalog v-if="mode === 'catalog'" :products="products" @toProduct="switchToProduct"/>
    <Product v-if="mode === 'product'" :product="selectedProduct" @toCatalog="switchToCatalog" @toCart="switchToCart"/>
  </div>
</template>

<script>
import Catalog from "@/components/Catalog";
import Product from "@/components/Product";
import CartIcon from "@/components/CartIcon";
export default {
  name: 'App',
  components: {CartIcon, Product, Catalog},
  beforeCreate() {
    this.products = this.$api
            .get('delivery/products')
            .then(result => {
              this.products = result.data;
            });
  },
  data() {
    return {
      mode: 'catalog',
      products: null,
      selectedProduct: null,
      cart: {
        products: []
      }
    }
  },
  methods: {
    switchToProduct(product) {
      this.mode = 'product';
      this.selectedProduct = product;
    },
    switchToCatalog() {
      this.mode = 'catalog';
      this.selectedProduct = null;
    },
    switchToCart(product) {
      this.mode = 'cart';
      this.cart.products.push(product);
      this.selectedProduct = null;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
