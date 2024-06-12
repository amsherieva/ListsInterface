<template>
    <Header :token="apiToken" @deleteToken="deleteToken"/>
    <ListSelector
        :selected-competitions="selectedCompetitions"
        @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>

    <template v-if="competitionListsState === 0">
        <ListSelectorNotification class="pb-3"/>
    </template>
    <template v-if="competitionListsState === 1">
        <SingleCompetitionControls :competition="selectedCompetitions"/>
    </template>
    <template v-if="competitionListsState >= 2">
        <MultipleCompetitionsControls :competitions="selectedCompetitions"
                                      @selectedCompetitionsUpdated="selectedCompetitionsUpdated"/>
    </template>
    <!--        <h2 class="text-center">Тестовая зона</h2>-->
    <!--        <TestButtons></TestButtons>-->
    <AuthWindowModal :isTokenValid @getToken="receiveToken" :id="'enterTokenModalTest'"/>
</template>

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
import AuthWindowModal from "@/components/AuthWindowModal.vue";
import SingleCompetitionControls from "@/components/SingleCompetitionControls.vue";
// axios
import axiosInstance from "@/axiosConfig";
import TestButtons from "@/components/Test2.vue";

export default {
    components: {
        TestButtons,
        AuthWindowModal,
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification, MultipleCompetitionsControls, SingleCompetitionControls
    },

    async created() {
        this.apiToken = sessionStorage.getItem("token");
        this.isTokenValid = (sessionStorage.getItem("isTokenValid") === 'true');

        //const temp = await this.getRequest("/api/dictionaries")
        //this.dictionaries = new Map(Object.entries(temp));
        //console.log([...this.dictionaries.keys()]); // Получить все ключи
        //console.log([...this.dictionaries.values()]); // Получить все значения
        //console.log([...this.dictionaries.entries()]); // Получить все записи (ключ, значение)
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
            apiToken: "",
            isTokenValid: false,

            // Obtained via API
            dictionaries: {
                type: Map
            },
            testItems: {},
        };
    },

    computed: {
        test() {
            let returnName;
            let returnKey;
            for (const [key, value] of Object.values(this.selectedCompetitions)[0].entries()) {
                returnKey = key;
                returnName = value.competition_group;
            }
            return String(returnName + ", uuid: " + returnKey);
        },

        // numberOfElementsTotal() {
        //     //console.log("Number of elements total: ", this.selectedCompetitions);
        //     for (const elem of Object.values(this.selectedCompetitions)) {
        //         console.log("elem: ",elem);
        //     }
        // }
    },

    methods: {
        selectedCompetitionsUpdated(selectedLists) {
            this.selectedCompetitions = selectedLists;
        },

        competitionListsStateUpdated(selectedStatus, selectedCompetitions, parentGroupName) {
            this.selectedCompetitions[parentGroupName] = selectedCompetitions;

            let tempSize = 0;
            for (const elem of Object.values(this.selectedCompetitions)) {
                tempSize += elem.size;
            }
            this.competitionListsState = tempSize;
            //console.log("selectedCompetitions: ", this.selectedCompetitions);
        },

        receiveToken(receivedToken) {
            this.apiToken = receivedToken;
            this.isTokenValid = true;
            sessionStorage.setItem("token", this.apiToken);
            sessionStorage.setItem("isTokenValid", this.isTokenValid);
        },

        deleteToken() {
            this.apiToken = "";
            sessionStorage.removeItem("token");
            this.isTokenValid = false;
            sessionStorage.setItem("isTokenValid", this.isTokenValid);
        },

        async testPostRequest() {
            try {
                const response = await axiosInstance.post('/api/dictionaries');
                console.log('Ответ сервера:', response.data);
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            }
        },

        async getRequest(url) {
            console.log(url)
            try {
                const response = await axiosInstance.get(url);
                console.log('Ответ сервера:', response.data);
                this.testItems = response.data;
                return response.data;
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
            }
        },

        async testGetRequest() {
            try {
                const response = await axiosInstance.get("/api/lists/1/1");
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
