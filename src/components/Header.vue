<template>
    <div class="header">
        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 p-0 mx-auto">
                <div class="p-2 px-md-3 d-flex justify-content-center align-items-center">
                    <div class="flex-shrink-1">
                        <a href="https://etu.ru/" target="_blank"
                        ><img src="@/assets/image/logo-fin.svg" alt="" style="height: 50px;"
                        /></a>
                    </div>
                    <div class="px-2 me-auto">
                        <h1 class="p-0 m-0">Интерфейс списков</h1>
                    </div>
                    <div class="ms-auto ">
                        <button type="button" class="btn p-0 border-0 text-nowrap" id="deleteTokenButton"
                                @click="deleteToken">
                            <h2 class="p-0 m-0">
                                <i class="bi bi-box-arrow-right"></i>&nbsp;Завершить сеанс
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";

export default {
    name: "Header",
    components: {ConfirmationPopup},

    props: {
        token: String,
    },

    data() {
        return {
            enteredToken: "",
        }
    },

    methods: {
        getToken() {
            this.$emit("getToken", this.enteredToken);
            this.enteredToken = "";
        },

        deleteToken() {
            this.$emit("deleteToken");
            this.enteredToken = "";
        }
    }
};
</script>

<style scoped>
.header {
    background-color: #02346f;

    width: 100%;
}

h1,
h2 {
    font-family: Roboto-Black;
    color: white;
}

h1 {
    font-size: calc(0.8rem + 1.0vw);
}

h2 {
    text-align: right;
    font-size: calc(0.6rem + 0.8vw);
}
</style>
