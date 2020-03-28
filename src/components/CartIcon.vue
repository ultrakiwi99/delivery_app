<template>
    <div class="cart-icon" @click="$emit('toggleCart')">
        {{ total }}
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
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
    }
</style>