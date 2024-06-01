<template>
    <div class="auth-window">

        <ConfirmationPopup :id="id" @positiveButtonClicked="getToken" :isNecessary='true'>
            <template v-slot:title>
                Добро пожаловать!
            </template>
            <template v-slot:body>
                <p>Пожалуйста, введите токен:</p>
                <textarea type="text" class="form-control" placeholder="Token" v-model="enteredToken"
                          @input="autoResize" ref="textarea" style="resize: none; overflow: hidden;"/>
            </template>
        </ConfirmationPopup>
        <ConfirmationPopup :id="idFailed" @negativeButtonClicked="tokenCheckFailed" :isNecessary='true'
                           :use-positive-response-button="false" :use-negative-response-button="true">
            <template v-slot:title>
                Ошибка
            </template>
            <template v-slot:body>
                <p>Введен невалидный токен!</p>
            </template>
            <template v-slot:negativeButtonText>
                Повтор
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
        token: String,
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
            const MyModal = new bootstrap.Modal(document.getElementById(this.id));
            this.autoResize();
            MyModal.show();
        },

        async testGetRequest() {
            let errorCode = 0;
            try {
                const response = await axiosInstance.get("/api/dictionaries");
                this.testItems = response.data;
                console.log("Список чего-то: ", this.testItems);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                errorCode = error.response.status;
            }
            return errorCode;
        },

        async getToken() {
            sessionStorage.setItem("token", this.enteredToken);
            const testRequestResponse = await this.testGetRequest();
            if (testRequestResponse === 500) {
                this.isTokenCheckFailed = true;
                sessionStorage.removeItem("token");
                const failedModal = new bootstrap.Modal(document.getElementById(this.idFailed));
                failedModal.show();
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