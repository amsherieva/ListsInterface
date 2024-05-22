<template>
    <Header/>
    <ListSelector
        :selected-competitions="selectedCompetitions"
        @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>
    <!--    <Test/>-->

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

export default {
    components: {
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification, MultipleCompetitionsControls,
    },

    data() {
        return {
            competitionListsState: 0,
            selectedCompetitions: {},
        };
    },

    methods: {
        competitionListsStateUpdated(selectedStatus, selectedCompetitions, parentGroupName) {
            this.competitionListsState = selectedStatus;
            this.selectedCompetitions[parentGroupName] = selectedCompetitions;
            console.log("selectedCompetitions: ", this.selectedCompetitions);
        }
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
