<template>
    <Header :token="apiToken" @getToken="receiveToken" @deleteToken="deleteToken"/>
    <ListSelector
        :selected-competitions="selectedCompetitions"
        @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>
    <!--    <Test/>-->

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

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
// axios
import axiosInstance from "@/axiosConfig";

export default {
    components: {
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification, MultipleCompetitionsControls,
    },

    mounted() {
        this.apiToken = sessionStorage.getItem("token");
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
            apiToken: "",

            testItems: {},
        };
    },

    methods: {
        competitionListsStateUpdated(selectedStatus, selectedCompetitions, parentGroupName) {
            this.competitionListsState = selectedStatus;
            this.selectedCompetitions[parentGroupName] = selectedCompetitions;
            console.log("selectedCompetitions: ", this.selectedCompetitions);
        },

        receiveToken(receivedToken) {
            this.apiToken = receivedToken;
            sessionStorage.setItem("token", this.apiToken);
        },

        deleteToken() {
            this.apiToken = "";
            sessionStorage.removeItem("token")
        },

        async testPostRequest() {
            try {
                const response = await axiosInstance.post('/api/dictionaries');
                this.testItems = response.data;
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
