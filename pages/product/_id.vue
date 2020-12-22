<template>
    <div>
        <Navigation></Navigation>
        <b-container>
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

                    <b-button variant="info" squared v-b-tooltip.hover title="Lisa ostukorvi"><font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-button>
			        <b-button variant="danger" squared v-b-tooltip.hover title="Lisa lemmikutesse"><font-awesome-icon :icon="['fas', 'heart']"></font-awesome-icon></b-button>
			        <b-button variant="secondary" squared v-b-tooltip.hover title="Jaga teistega"><font-awesome-icon :icon="['fas', 'share-alt']"></font-awesome-icon></b-button>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue';

    export default {
        components: {
            Navigation
        },
        
        created() {
            this.$store.dispatch('fetch_product', parseInt(this.$route.params.id));
        },

        computed: {
            product() {
                return this.$store.state.product;
            }
        }
    }
</script>