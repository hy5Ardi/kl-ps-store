<template>
    <div>
        <Navigation></Navigation>
        <b-container>
            <b-row class="mt-5">
                <div class="col-lg-3">
                    <Categories></Categories>
                </div>
                <div class="col-lg-9">
                    <h2 class="title">Kõik tooted</h2>
                    <div class="product-list">
                        <b-card-group columns>
                            <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
                        </b-card-group>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue';
    import ProductCard from '@/components/ProductCard.vue';
    import Categories from '@/components/Categories.vue';

    export default {
        components: {
            Navigation, ProductCard, Categories
        },

        created() {
            this.$store.dispatch('fetch_products');
        },

        computed: {
            products() {
                return this.$store.state.products;
            }
        }
    }
</script>