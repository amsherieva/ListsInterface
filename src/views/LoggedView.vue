<template>
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
</template>

<script>
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
import AuthWindowModal from "@/components/AuthWindowModal.vue";
import SingleCompetitionControls from "@/components/SingleCompetitionControls.vue";
// axios
import axiosInstance from "@/axiosConfig";

export default {
    name: "LoggedView",

    components: {
        AuthWindowModal,
        CheckableProgram, ListSelector, ListSelectorNotification, MultipleCompetitionsControls, SingleCompetitionControls
    },

    async created() {
        //this.apiToken = sessionStorage.getItem("token");
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

        deleteListsFromSelected() {
            this.clearTrigger = !this.clearTrigger;
            this.selectedCompetitions = {};
            this.competitionListsState = 0;
        }
    }
}
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