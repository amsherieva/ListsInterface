<template>
    <div class="row container-fluid mx-auto">
        <div class="col-lg-7 col p-0 mx-auto">
            <p class="actions-header mb-0 mt-4">Магистратура</p>
        </div>
    </div>
    <MagCompetitionLists :clearTrigger @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>

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

import SingleCompetitionControls from "@/components/SingleCompetitionControls.vue";
import MultipleCompetitionsControls from "@/components/MultipleCompetitionsControls.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import ListSelector from "@/components/ListSelector.vue";
import MagCompetitionLists from "@/components/MagCompetitionLists.vue";

export default {
    name: "MagView",
    components: {
        MagCompetitionLists,
        ListSelector, ListSelectorNotification, MultipleCompetitionsControls, SingleCompetitionControls},

    async created() {
        this.namingMap = new Map();

        this.namingMap.set("Mag", "Магистратура");

        this.namingMap.set("Applicants", "Списки подавших заявление");
        this.namingMap.set("Contest", "Конкурсные списки");
        this.namingMap.set("Applicants_quota", "Списки подавших заявление (ДЦК)");
        this.namingMap.set("Enrolled", "Списки зачисленных");
        this.namingMap.set("Contest_quota", "Конкурсные списки (ДЦК)");
        this.namingMap.set("Contest_insider", "Внутренние конкурсные списки");

        this.namingMap.set("Budget", "Бюджет");
        this.namingMap.set("Contract", "Контракт");
        this.namingMap.set("Target", "Целевое");
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
            clearTrigger: false,
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
.actions-header {
    color: #06326e;
    font-family: Roboto-Medium;
    font-size: calc(1.6rem + 0.4vw);
}
</style>