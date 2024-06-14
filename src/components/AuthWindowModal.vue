<template>
    <div class="auth-window">

        <ConfirmationPopup id="authWindowModal" @positiveButtonClicked="getToken" :isNecessary='true'>
            <template v-slot:title>
                Добро пожаловать!
            </template>
            <template v-slot:body>
                <template v-if="!isTokenValid && !isFirstTime">
                    <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <!--                        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>-->
                        <div>
                            Введен невалидный токен!
                        </div>
                    </div>
                </template>
                <p>Пожалуйста, введите токен:</p>
                <textarea type="text" class="form-control" placeholder="Token" v-model="enteredToken"
                          @input="autoResize" ref="textarea" style="resize: none; overflow: hidden;"/>
            </template>
        </ConfirmationPopup>

    </div>
</template>

<script>
import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import axiosInstance from "@/axiosConfig";

export default {
    name: 'AuthWindowModal',
    components: {ConfirmationPopup},
    props: {
        isTokenValid: Boolean,
        //id: String
    },

    data() {
        return {
            enteredToken: "",
            isFirstTime: true,
            authModal: {},
        }
    },

    mounted() {
        console.log("isTokenValid: ", this.isTokenValid);
        this.authModal = new bootstrap.Modal('#authWindowModal', {});
        if (!this.isTokenValid) {
            //console.log("Modal mounted");
            this.OpenModal();
            this.autoResize();
        }
    },

    watch: {
        isTokenValid(newVal) {
            console.log("isTokenValid new value: ", this.isTokenValid);
            if (newVal) {
                console.log("CloseModal called");
                this.CloseModal();
            }
            if (!newVal) {
                console.log("OpenModal called");
                this.OpenModal();
            }
        }
    },

    methods: {
        OpenModal() {
            this.authModal.show();
        },

        CloseModal() {
            this.authModal.hide();
        },

        async testGetRequest() {
            console.log("Token test");
            let errorCode = 0;
            try {
                const response = await axiosInstance.get("/api/junk/lists/1/1/1");
                this.dictionaries = response.data;
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                //errorCode = error.response.status;
                errorCode = error.response.status;
            }
            this.isFirstTime = false;
            return errorCode;
        },

        isASCII(str) {
            return /^[\x00-\x7F]*$/.test(str);
        },

        async getToken() {
            if (!this.isASCII(this.enteredToken)) {
                this.enteredToken = "";
                this.isFirstTime = false;
                return;
            }

            sessionStorage.setItem("token", this.enteredToken);
            const testRequestResponse = await this.testGetRequest();
            console.log("testRequestResponse: ", testRequestResponse);
            if (testRequestResponse === 500 || testRequestResponse === "ERR_NETWORK") {
                sessionStorage.removeItem("token");
                //const failedModal = new bootstrap.Modal(document.getElementById(this.idFailed));
                //failedModal.show();
            } else {
                console.log("Token is valid");
                this.$emit("getToken", this.enteredToken);
            }
            this.enteredToken = "";
        },

        autoResize() {
            const textarea = this.$refs.textarea;
            if (this.enteredToken === "") {
                textarea.style.height = `0px`;
            } else {
                textarea.style.height = 'auto'; // Сбросить высоту для автоматического вычисления
                textarea.style.height = `${textarea.scrollHeight}px`; // Установить высоту по содержимому
            }
        },
    },
}
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
    font-size: calc(0.8rem + 1.25vw);
}

h2 {
    text-align: right;
    font-size: calc(0.6rem + 0.8vw);
}
</style>