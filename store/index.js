import axios from "axios";

export const state = () => ({
    categories: [],
    products: [],
    product: [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    loading: false,
    active_tab: 'all'
});

export const actions = {
    fetch_products(context) {
        context.commit('SET_LOADING', true);

        axios.get('/api/products.json').then(response => {
            context.commit('SET_PRODUCTS', response.data);
        });

        context.commit('SET_LOADING', false);
    },

    fetch_product(context, id) {
        context.commit('SET_LOADING', true);

        axios.get('/api/products.json').then(response => {
            let products = Object.values(response.data);
            
            for (let product of products) {
                if (product.id == id) {
                    context.commit('SET_PRODUCT', product);
                    break;
                }
            }
        });

        context.commit('SET_LOADING', false);
    },

    fetch_categories(context) {
        context.commit('SET_LOADING', true);

        axios.get('/api/categories.json').then(response => {
            context.commit('SET_CATEGORIES', response.data);
        });

        context.commit('SET_LOADING', false);
    }
}

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload;
    },

    SET_PRODUCT(state, payload) {
        console.log(payload);
        state.product = payload;
    },

    SET_LOADING(state, payload) {
        state.loading = payload;
    },

    ADD_TO_CART(state, payload) {
        state.cart.push(payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    ADD_TO_WISHLIST(state, payload) {
        state.wishlist.push(payload);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    REMOVE_FROM_CART(state, payload) {
        let index = 0;

        for (let listing of state.cart) {
            if (listing.id == payload.id) {
                index = state.cart.indexOf(listing);
                break;
            }
        }

        state.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    REMOVE_FROM_WISHLIST(state, payload) {
        let index = 0;

        for (let item of state.wishlist) {
            if (item.id == payload.id) {
                index = state.wishlist.indexOf(item);
                break;
            }
        }

        state.wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    SET_CATEGORIES(state, payload) {
        state.categories = payload;
    }
}