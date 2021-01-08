<template>
	<b-card :title="product.name" :img-src="product.images[0]" footer-tag="footer">
		<b-badge>{{ product.price }} €</b-badge>
		<b-card-text>
			{{ minify(product.description) }}
			<br> <b-link :to="'/product/' + product.id">Vaata lähemalt »</b-link>
		</b-card-text>
		<template #footer>
			<b-button v-if="is_in_cart(product)" @click="remove_from_cart(product)" variant="info" squared v-b-tooltip.hover title="Eemalda ostukorvist"><font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon></b-button>
			<b-button v-else @click="add_to_cart(product)" variant="info" squared v-b-tooltip.hover title="Lisa ostukorvi"><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-button>
			
			<b-button v-if="!is_in_wishlist(product)" @click="add_to_wishlist(product)" variant="danger" squared v-b-tooltip.hover title="Lisa lemmikutesse"><font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></b-button>
			<b-button v-else @click="remove_from_wishlist(product)" variant="danger" squared v-b-tooltip.hover title="Eemalda lemmikutest"><font-awesome-icon :icon="['fas', 'heart-broken']"></font-awesome-icon></b-button>

			<b-button variant="secondary" squared v-b-tooltip.hover title="Jaga teistega"><font-awesome-icon :icon="['fas', 'share-alt']"></font-awesome-icon></b-button>
		</template>
	</b-card>
</template>

<script>
	export default {
		props: ['product'],

		methods: {
			minify(text) {
				return text.slice(0, 100).concat('...');
			},

			is_in_wishlist(product) {
				for (let item of this.$store.state.wishlist) {
					if (item.id == product.id) {
						return true;
					}
				}
			},

			add_to_wishlist(product) {
				this.$store.commit('ADD_TO_WISHLIST', product);

				this.$bvToast.toast('Lisasid ' + product.name + ' lemmikutesse.', {
					variant: 'success',
					title: 'Lemmikute muudatus',
					autoHideDelay: 1000
				});
			},

			remove_from_wishlist(product) {
				this.$store.commit('REMOVE_FROM_WISHLIST', product);

				this.$bvToast.toast('Eemaldasid ' + product.name + ' lemmikute hulgast.', {
					variant: 'danger',
					title: 'Lemmikute muudatus',
					autoHideDelay: 1000
				});
			},

			add_to_cart(product) {
				this.$store.commit('ADD_TO_CART', product);

				this.$bvToast.toast('Lisasid ' + product.name + ' ostukorvi.', {
					variant: 'success',
					title: 'Ostukorvi muudatus',
					autoHideDelay: 1000
				});
			},

			is_in_cart(product) {
				for (let listing of this.$store.state.cart) {
					if (listing.id == product.id) {
						return true;
					}
				}
			},

			remove_from_cart(product) {
				this.$store.commit('REMOVE_FROM_CART', product);

				this.$bvToast.toast('Eemaldasid ' + product.name + ' ostukorvist.', {
					variant: 'danger',
					title: 'Ostukorvi muudatus',
					autoHideDelay: 1000
				});
			}
		},

		computed: {
			cart() {
				return this.$store.state.cart;
			},
		}
	}
</script>

<style scoped>
	.card, .card-img {
		border-radius: 0px;
	}
</style>