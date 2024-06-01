<template>
    <div class="header">
        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 col p-0 mx-auto">
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
                        <div class="dropdown">
                            <button type="button" class="btn p-0 border-0 text-nowrap" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <h2 class="p-0 m-0">
                                    <i class="bi bi-person-circle"></i>&nbsp;Тест Тестович Тестов
                                </h2>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <button class="dropdown-item" type="button"><i class="bi bi-box-arrow-right"></i>&nbsp;Выйти
                                    </button>
                                </li>
<!--                                <li>-->
<!--                                    <button class="btn-b dropdown-item" type="button" data-bs-toggle="modal"-->
<!--                                            data-bs-target="#enterTokenModal">Ввести токен-->
<!--                                    </button>-->
<!--                                </li>-->
                            </ul>
                        </div>
                    </div>
<!--                    <template v-if="token && token.length > 0">-->
<!--                        <ConfirmationPopup :id="'enterTokenModal'" :usePositiveResponseButton="false"-->
<!--                                           :useNegativeResponseButton="true"-->
<!--                                           @negativeButtonClicked="deleteToken">-->
<!--                            <template v-slot:title>-->
<!--                                Добро пожаловать!-->
<!--                            </template>-->
<!--                            <template v-slot:body>-->
<!--                                Обнаружен существующий токен: {{ token }}.-->
<!--                            </template>-->
<!--                            <template v-slot:negativeButtonText>-->
<!--                                Удалить токен-->
<!--                            </template>-->
<!--                        </ConfirmationPopup>-->
<!--                    </template>-->
<!--                    <template v-else>-->
<!--                        <ConfirmationPopup :id="'enterTokenModal'" @positiveButtonClicked="getToken">-->
<!--                            <template v-slot:title>-->
<!--                                Добро пожаловать!-->
<!--                            </template>-->
<!--                            <template v-slot:body>-->
<!--                                <p>Пожалуйста, введите токен:</p>-->
<!--                                <input type="text" class="form-control" placeholder="Token" v-model="enteredToken">-->
<!--                            </template>-->
<!--                        </ConfirmationPopup>-->
<!--                    </template>-->
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
    font-size: calc(0.8rem + 1.25vw);
}

h2 {
    text-align: right;
    font-size: calc(0.6rem + 0.8vw);
}
</style>
