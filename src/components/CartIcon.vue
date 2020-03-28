<template>
    <div class="cart-icon" @click="$emit('toggleCart')">
        <button class="primary">
            <span class="icon-cart inverse"></span>&nbsp;{{ total }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "CartIcon",
        props: {
            total: Number
        }
    }
</script>

<style scoped>
    .cart-icon {
        width: 100px;
        height: 80px;
        position: fixed;
        right: 15px;
        top: 5px;
        padding: 10px;
        z-index: 1000;
    }
</style>