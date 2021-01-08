<template>
    <footer class="bg-light my-auto">
        <b-container class="p-4">
            <b-row>
                <div class="col-lg-6">
                    <h5 class="title">Telli uudiskiri</h5>
                    <b-form>
                        <b-form-group>
                            <b-input-group>
                                <b-form-input class="squared" placeholder="E-Mail" v-model="email"></b-form-input>
                                <b-input-group-prepend>
                                    <b-button variant="primary">Telli »</b-button>
                                </b-input-group-prepend>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-form-checkbox v-model="terms">Nõustun kasutajatingimustega.</b-form-checkbox>
                        </b-form-group>
                    </b-form>
                </div>
                <div class="col-lg-3">
                    <h5 class="title">Info</h5>
                    <ul class="list-unstyled mb-0">
                        <li><b-link class="text-dark" to="terms">Tingimused</b-link></li>
                        <li><b-link class="text-dark" to="faq">KKK</b-link></li>
                        <li><b-link class="text-dark" to="outlets">Esindused</b-link></li>
                        <li><b-link class="text-dark" to="contact">Kontakt</b-link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h5 class="title">Jälgi meid</h5>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <b-link to="facebook">
                                <b-avatar variant="primary">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon>
                                </b-avatar>
                            </b-link>
                            <b-link to="instagram" class="p-2">
                                <b-avatar variant="info">
                                    <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                                </b-avatar>
                            </b-link>
                        </li>
                    </ul>
                </div>
            </b-row>
        </b-container>
        <div class="text-center p-3 title" style="background-color: rgba(0, 0, 0, 0.1)">
            &copy; Klõps OÜ 2020 - {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                terms: false
            }
        }
    }
</script>