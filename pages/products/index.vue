<template>
    <div style="position: relative;">
        <Navigation></Navigation>
        <b-container class="content pb-5">
            <b-row class="mt-5 d-block d-md-block d-lg-none">
                <b-col lg cols="12">
                    <b-button v-b-toggle.categories variant="info" size="md" squared><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon> Kategooriad</b-button>
                    <b-button variant="warning" class="text-white" size="md" squared><font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon> Otsing</b-button>
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <div class="col-lg-3 d-block d-md-block d-lg-none">
                    <b-collapse visible id="categories">
                        <Categories></Categories>
                    </b-collapse>
                </div>
                <div class="col-lg-3 d-none d-lg-block">
                    <Categories></Categories>
                </div>
                <div class="col-lg-9">
                    <h2 class="title">Kõik tooted
                        <small>{{ products.length }}</small>
                    </h2>
                    <div class="product-list">
                        <b-card-group columns>
                            <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
                        </b-card-group>
                    </div>
                </div>
            </b-row>
        </b-container>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue';
    import ProductCard from '@/components/ProductCard.vue';
    import Categories from '@/components/Categories.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Navigation, Footer, ProductCard, Categories
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