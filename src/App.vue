<template>
    <Header :token="apiToken" @deleteToken="deleteToken"/>
    <template v-if="isTokenValid">
        <ListSelector
            :selected-competitions="selectedCompetitions"
            @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>

        <!--  Test button  -->
        <button class="btn-b" @click="testPostRequest">Тест POST запросов</button>
        <button class="btn-b" @click="testGetRequest">Тест GET запросов</button>

        <template v-if="competitionListsState === 0">
            <ListSelectorNotification class="pb-3"/>
        </template>
        <template v-if="competitionListsState === 1">
            Выбрана одна программа
        </template>
        <template v-if="competitionListsState >= 2">
            <MultipleCompetitionsControls/>
        </template>
    </template>
    <template v-else>
        <AuthWindowModal :token="apiToken" @getToken="receiveToken"/>
    </template>
</template>

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
import AuthWindow from "@/components/AuthWindow.vue";
import AuthWindowModal from "@/components/AuthWindowModal.vue";
// axios
import axiosInstance from "@/axiosConfig";

export default {
    components: {
        AuthWindowModal,
        AuthWindow,
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification, MultipleCompetitionsControls,
    },

    mounted() {
        this.apiToken = sessionStorage.getItem("token");
        this.isTokenValid = sessionStorage.getItem("isTokenValid");
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
            apiToken: "",
            isTokenValid: false,

            testItems: {},
        };
    },

    computed: {
        validateToken() {
            return this.isTokenValid;
        }
    },

    methods: {
        competitionListsStateUpdated(selectedStatus, selectedCompetitions, parentGroupName) {
            this.competitionListsState = selectedStatus;
            this.selectedCompetitions[parentGroupName] = selectedCompetitions;
            console.log("selectedCompetitions: ", this.selectedCompetitions);
        },

        receiveToken(receivedToken) {
            this.apiToken = receivedToken;
            this.isTokenValid = true;
            sessionStorage.setItem("token", this.apiToken);
            sessionStorage.setItem("isTokenValid", this.isTokenValid);
        },

        deleteToken() {
            this.apiToken = "";
            sessionStorage.removeItem("token")
        },

        async testPostRequest() {
            try {
                const response = await axiosInstance.post('/api/dictionaries');
                console.log('Ответ сервера:', response.data);
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            }
        },

        async testGetRequest() {
            try {
                const response = await axiosInstance.get("/api/dictionaries/dict_edu_forms");
                this.testItems = response.data;
                console.log("Список чего-то: ", this.testItems);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },
    }
};
</script>

<style>
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
