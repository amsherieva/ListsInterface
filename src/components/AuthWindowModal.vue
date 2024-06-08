<template>
    <div class="auth-window">

        <ConfirmationPopup :id="id" @positiveButtonClicked="getToken" :isNecessary='true' :ref=id>
            <template v-slot:title>
                Добро пожаловать!
            </template>
            <template v-slot:body>
                <template v-if="isTokenCheckFailed">
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
<!--        <ConfirmationPopup :id="idFailed" @negativeButtonClicked="tokenCheckFailed" :isNecessary='true'-->
<!--                           :use-positive-response-button="false" :use-negative-response-button="true">-->
<!--            <template v-slot:title>-->
<!--                Ошибка-->
<!--            </template>-->
<!--            <template v-slot:body>-->
<!--                <p>Введен невалидный токен!</p>-->
<!--            </template>-->
<!--            <template v-slot:negativeButtonText>-->
<!--                Повтор-->
<!--            </template>-->
<!--        </ConfirmationPopup>-->

    </div>
</template>

<script>
import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";
import { Modal } from "bootstrap";
import axiosInstance from "@/axiosConfig";

export default {
    name: 'AuthWindowModal',
    components: {ConfirmationPopup},

    props: {
        token: String,
        //id: String
    },

    data() {
        return {
            enteredToken: "",
            id: "enterTokenModalTest",
            idFailed: "enterTokenModalTest_failed",
            isTokenCheckFailed: false,
        }
    },

    updated() {
        this.showDefaultModal();
    },

    methods: {
        showDefaultModal() {
            // const modalElement = this.$refs[this.id];
            // const modal = new Modal(modalElement);
            // modal.show();
            this.$refs.enterTokenModalTest.showModal();
            this.autoResize();
        },

        async testGetRequest() {
            let errorCode = 0;
            try {
                const response = await axiosInstance.get("/api/dictionaries");
                this.dictionaries = response.data;
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                //errorCode = error.response.status;
                errorCode = error.response.status;
            }
            return errorCode;
        },

        getToken: async function () {
            sessionStorage.setItem("token", this.enteredToken);
            const testRequestResponse = await this.testGetRequest();
            console.log("testRequestResponse: ",testRequestResponse);
            if (testRequestResponse === 500 || testRequestResponse === "ERR_NETWORK") {
                this.isTokenCheckFailed = true;
                sessionStorage.removeItem("token");
                //const failedModal = new bootstrap.Modal(document.getElementById(this.idFailed));
                //failedModal.show();
            } else {
                this.$emit("getToken", this.enteredToken);
            }
            this.enteredToken = "";
        },

        tokenCheckFailed() {
            this.showDefaultModal();
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