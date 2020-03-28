<template>
  <div id="app">
    <CartIcon :total="cart.products.length" @toggleCart="toggleCart"/>
    <Catalog v-if="mode === 'catalog'" :products="products" @toProduct="switchToProduct"/>
    <Product v-if="mode === 'product'" :product="selectedProduct" @toCatalog="switchToCatalog" @toCart="addToCart"/>
    <Cart v-if="mode === 'cart'" :cart="cart" @toCheckout="switchToCheckout" @toCatalog="switchToCatalog"/>
    <Checkout v-if="mode === 'checkout'" />
  </div>
</template>

<script>
import Catalog from "@/components/Catalog";
import Product from "@/components/Product";
import CartIcon from "@/components/CartIcon";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
export default {
  name: 'App',
  components: {Checkout, Cart, CartIcon, Product, Catalog},
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
    addToCart(product) {
      this.cart.products.push(product);
    },
    switchToCheckout() {
      this.mode = 'checkout';
    },
    toggleCart() {
      this.selectedProduct = null;
      if (this.mode === 'cart') {
        this.mode = 'catalog'
      } else {
        this.mode = 'cart';
      }
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
