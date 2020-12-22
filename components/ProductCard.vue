<template>
	<b-card :title="product.name" :img-src="product.images[0]" footer-tag="footer">
		<b-badge>{{ product.price }} €</b-badge>
		<b-link :to="'/product/' + product.id"><br> <br> Vaata lähemalt »</b-link>
		<br> {{ is_in_cart() }}
		<template #footer>
			<b-button v-if="is_in_cart" disabled variant="info" squared><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-button>
			<b-button v-else @click="add_to_cart(product)" variant="info" squared v-b-tooltip.hover title="Lisa ostukorvi"><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-button>
			
			<b-button variant="danger" squared v-b-tooltip.hover title="Lisa lemmikutesse"><font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></b-button>
			<b-button variant="secondary" squared v-b-tooltip.hover title="Jaga teistega"><font-awesome-icon :icon="['fas', 'share-alt']"></font-awesome-icon></b-button>
		</template>
	</b-card>
</template>

<script>
	export default {
		props: ['product'],

		methods: {
			add_to_cart(product) {
				this.$store.commit('ADD_TO_CART', product);
			},

			is_in_cart() {
				return this.$store.state.cart.includes(this.product);
			}
		},

		computed: {
			cart() {
				return this.$store.state.cart;
			},

			is_in_cart() {
				return this.$store.state.cart.includes(this.product);
			}
		}
	}
</script>