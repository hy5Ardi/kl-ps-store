<template>
	<div>
		<Navigation></Navigation>
		<b-container class="pb-5">
			<b-row class="mt-5">
				<div class="col-lg-6">
					<h1 class="title">{{ product.name }}
						<small>{{ product.price }} €</small>
					</h1>
					<b-carousel controls indicators>
						<b-carousel-slide v-for="image in product.images" :key="product.images.indexOf(image)" :img-src="image"></b-carousel-slide>
					</b-carousel>
				</div>
				<div class="col-lg-6">
					<p class="mt-5 pt-3">{{ product.description }}</p>

					<b-button v-if="is_in_cart(product)" @click="remove_from_cart(product)" variant="info" squared v-b-tooltip.hover title="Eemalda ostukorvist"><font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon></b-button>
					<b-button v-else @click="add_to_cart(product)" variant="info" squared v-b-tooltip.hover title="Lisa ostukorvi"><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-button>

					<b-button v-if="is_in_wishlist(product)" @click="remove_from_wishlist(product)" variant="danger" squared v-b-tooltip.hover title="Eemalda lemmikutest"><font-awesome-icon :icon="['fas', 'heart-broken']"></font-awesome-icon></b-button>
					<b-button v-else @click="add_to_wishlist(product)" variant="danger" squared v-b-tooltip.hover title="Lisa lemmikutesse"><font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></b-button>
				
					<b-button variant="secondary" squared v-b-tooltip.hover title="Jaga teistega"><font-awesome-icon :icon="['fas', 'share-alt']"></font-awesome-icon></b-button>
				</div>
			</b-row>
		</b-container>
		<Footer></Footer>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		components: {
			Navigation, Footer
		},
		
		created() {
			this.$store.dispatch('fetch_product', parseInt(this.$route.params.id));
		},

		computed: {
			product() {
				return this.$store.state.product;
			}
		},

		methods: {
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
		}
	}
</script>