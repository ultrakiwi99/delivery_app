<template>
    <div class="container">
        <div class="card fluid">
            <label>
                <input type="text" placeholder="Ваше имя..." v-model="name" required>
            </label>
            <label>
                <input type="text" placeholder="Куда привезти кофе..." v-model="address" required>
            </label>
            <label>
                <input type="tel" placeholder="8-921-111-11-11" v-model="phone" required>
            </label>
        </div>
        <footer class="sticky" style="justify-self: end">
            <button class="tertiary" @click="makeOrder">Заказать</button>
        </footer>
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