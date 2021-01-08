<template>
	<b-navbar sticky toggleable="lg" type="light" variant="light">
		<b-container>
			<b-navbar-brand>
				<img src="/assets/images/logo.png" alt="">
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse">
				<template>
					<font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
				</template>
			</b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Avaleht</b-nav-item>
					<b-nav-item to="/products">Tooted</b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right no-caret>
						<template v-slot:button-content>
							<font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
							<b-badge v-if="cart.length > 0" class="cart-counter" variant="danger" pill>{{ cart.length }}</b-badge>
						</template>
						<Cart class="cart-dropdown"></Cart>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
	import Cart from '@/components/Cart.vue';

	export default {
		components: {
			Cart
		},

		computed: {
			cart() {
				return this.$store.state.cart;
			}
		}
	}
</script>