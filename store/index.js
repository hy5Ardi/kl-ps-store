import axios from "axios";

export const state = () => ({
    products: [],
    product: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    loading: false
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
    }
}