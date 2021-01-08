<template>
    <div class="categories-list">
        <ul class="nav-pills nav-stacked">
            <li class="active"><a href="#">Kõik tooted</a></li>
        </ul>
        <div class="category" v-for="category in categories" :key="categories.indexOf(category)">
            <h4 class="category-title">{{ category.name }}</h4>
            <ul class="nav-pills nav-stacked">
                <li v-for="item in category.subcategories" :key="category.subcategories.indexOf(item)">
                    <b-link :to="'products/' + category.id + '/' + item.id">{{ item.name }}</b-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('fetch_categories');
        },

        computed: {
            categories() {
                return this.$store.state.categories;
            }
        }
    }
</script>