<template>
    <div class="wrapper">
        <div class="main">
            <Header :token="apiToken" @deleteToken="deleteToken"/>

            <RouterView/>

            <AuthWindowModal :isTokenValid @getToken="receiveToken" :id="'enterTokenModal'"/>
        </div>
        <Footer class="mt-5"/>
    </div>

</template>

<script>
import Header from "@/components/Header.vue";
import AuthWindowModal from "@/components/AuthWindowModal.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        AuthWindowModal, Header, Footer
    },

    async created() {
        this.apiToken = sessionStorage.getItem("token");
        this.isTokenValid = (sessionStorage.getItem("isTokenValid") === 'true');
    },

    data() {
        return {
            apiToken: "",
            isTokenValid: false,
        };
    },

    methods: {
        receiveToken(receivedToken) {
            this.apiToken = receivedToken;
            this.isTokenValid = true;
            sessionStorage.setItem("token", this.apiToken);
            sessionStorage.setItem("isTokenValid", this.isTokenValid);
            this.$router.push('/levelSelector');
        },

        deleteToken() {
            this.apiToken = "";
            sessionStorage.removeItem("token");
            this.isTokenValid = false;
            sessionStorage.setItem("isTokenValid", this.isTokenValid);
            this.$router.push('/');
        },
    }
};
</script>

<style>
.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.main {
    flex: 1 1 auto;
}

@font-face {
    font-family: 'Roboto-Black';
    src: url('/src/assets/fonts/Roboto-Black.ttf');
}

@font-face {
    font-family: 'Roboto-Medium';
    src: url('/src/assets/fonts/Roboto-Medium.ttf');
}

@font-face {
    font-family: 'Roboto-Regular';
    src: url('/src/assets/fonts/Roboto-Regular.ttf');
}
</style>
