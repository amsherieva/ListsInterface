<template>
    <div class="wrapper">
        <div class="main">
            <Header :token="apiToken" @deleteToken="deleteToken"/>
            <ListSelector :clearTrigger @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>

            <template v-if="competitionListsState === 0">
                <ListSelectorNotification class="pb-3"/>
            </template>
            <template v-if="competitionListsState === 1">
                <SingleCompetitionControls :competition="selectedCompetitions" :namingMap
                                           @deleteListsFromSelected="deleteListsFromSelected"/>
            </template>
            <template v-if="competitionListsState >= 2">
                <MultipleCompetitionsControls :competitions="selectedCompetitions" :namingMap
                                              @selectedCompetitionsUpdated="selectedCompetitionsUpdated"/>
            </template>
            <!--        <h2 class="text-center">Тестовая зона</h2>-->
            <!--        <TestButtons></TestButtons>-->
            <AuthWindowModal :isTokenValid @getToken="receiveToken" :id="'enterTokenModalTest'"/>
        </div>
        <Footer class="mt-5"/>
    </div>

</template>

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
import AuthWindowModal from "@/components/AuthWindowModal.vue";
import SingleCompetitionControls from "@/components/SingleCompetitionControls.vue";
import Footer from "@/components/Footer.vue";
// axios
import axiosInstance from "@/axiosConfig";
import TestButtons from "@/components/Test2.vue";

export default {
    components: {
        TestButtons,
        AuthWindowModal,
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification, MultipleCompetitionsControls, SingleCompetitionControls, Footer
    },

    async created() {
        this.apiToken = sessionStorage.getItem("token");
        this.isTokenValid = (sessionStorage.getItem("isTokenValid") === 'true');

        this.namingMap = new Map();

        this.namingMap.set("Bak", "Бакалавриат");
        this.namingMap.set("Mag", "Магистратура");
        this.namingMap.set("Asp", "Аспирантура");

        this.namingMap.set("Applicants", "Списки подавших заявление");
        this.namingMap.set("Contest", "Конкурсные списки");
        this.namingMap.set("ApplicantsQuota", "Списки подавших заявление (ДЦК)");
        this.namingMap.set("Enrolled", "Списки зачисленных");
        this.namingMap.set("ContestQuota", "Конкурсные списки (ДЦК)");

        this.namingMap.set("Budget", "Бюджет");
        this.namingMap.set("Contract", "Контракт");
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
            clearTrigger: false,
            apiToken: "",
            isTokenValid: false,
            namingMap: [],

            // Obtained via API
            dictionaries: {
                type: Map
            },
            testItems: {},
        };
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

        deleteListsFromSelected() {
            this.clearTrigger = !this.clearTrigger;
            this.selectedCompetitions = {};
            this.competitionListsState = 0;
        }
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
