<template>
    <b-dropdown-item v-if="cart.length < 1">Ostukorv on tühi.</b-dropdown-item>
	<div v-else>
		<b-dropdown-item v-for="listing in cart" :key="listing.id" :to="'/product/' + listing.id">
            <b-row>
                <b-col lg cols="10">
                    <b>{{ listing.name }} <br></b>
                    <small>{{ listing.price }} €</small>
                </b-col>
                <b-col lg cols="2" style="text-align: right">
                    <b-button @click.prevent="remove_from_cart(listing)" variant="light" size="sm" squared><font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon></b-button>
                </b-col>
            </b-row>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>
            <b>Kokku: {{ total_price }}€</b> <br>
            <b-button variant="success" size="md" squared>Maksma »</b-button>
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
        },

        methods: {
            remove_from_cart(product) {
				let index = 0;

				for (let listing of this.$store.state.cart) {
					if (listing.id == product.id) {
						index = this.$store.state.cart.indexOf(listing);
						break;
					}
				}

                this.$store.state.cart.splice(index, 1);

                this.$bvToast.toast('Eemaldasid ' + product.name + ' ostukorvist.', {
					variant: 'danger',
                    title: 'Ostukorvi muudatus',
                    autoHideDelay: 1000
				});
			}
        }
    }
</script>