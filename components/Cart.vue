<template>
    <b-dropdown-item v-if="cart.length < 1">Ostukorv on tühi.</b-dropdown-item>
	<div v-else>
		<b-dropdown-item v-for="listing in cart" :key="listing.id">
            {{ listing.name }} <br>
            <small>{{ listing.price }}€</small>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>
            <b>Kokku: {{ total_price }}€</b> <br>
            <button class="btn btn-sm btn-info btn-block squared">Maksma ></button>
        </b-dropdown-item>
	</div>
</template>

<script>
    export default {
        computed: {
            cart() {
                return this.$store.state.cart;
            },

            total_price() {
                let price = 0;
                
                for (let item of this.$store.state.cart) {
                    price+= item.price;
                }

                return price;
            }
        }
    }
</script>