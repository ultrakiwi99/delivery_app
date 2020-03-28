<template>
    <div>
        <input type="text" placeholder="Ваше имя..." v-model="name" required>
        <input type="text" placeholder="Куда привезти кофе..." v-model="address" required>
        <input type="tel" placeholder="8-921-111-11-11" v-model="phone" required>
        <button @click="makeOrder">Заказать</button>
    </div>
</template>

<script>
    export default {
        name: "Checkout",
        data() {
            return {
                name:null,
                address:null,
                phone: null
            };
        },
        methods: {
            makeOrder() {
                if (!this.name || !this.address || !this.phone) {
                    return;
                }
                this.$emit('makeOrder', this.name, this.address, this.phone);
            }
        }
    }
</script>

<style scoped>

</style>