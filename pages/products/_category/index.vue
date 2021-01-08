<template>
    <div>
        <Navigation></Navigation>
        <b-container>
            <b-row class="mt-5">
                <pre>{{ this.$route.params }}</pre>
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
        }
    }
</script>