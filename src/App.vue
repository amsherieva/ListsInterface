<template>
    <Header/>
    <ListSelector
    @onCompetitionListsStateUpdate="competitionListsStateUpdated"/>
<!--    <Test/>-->

    <template v-if="competitionListsState === 0">
        <ListSelectorNotification/>
    </template>
    <p v-else>Флаг количества выбранных программ: {{ competitionListsState }}</p>
</template>

<script>
import Header from "@/components/Header.vue";
import Test from "@/components/Test.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";

export default {
    components: {
        CheckableProgram,
        Header, ListSelector, ListSelectorNotification ,Test,
    },

    data() {
        return {
            competitionListsState: 0,
        };
    },

    // TODO: make ListSelector return list selection status (none, one competition selected, multiple selected)
    methods: {
        competitionListsStateUpdated(selectedStatus) {
            this.competitionListsState = selectedStatus;
            console.log("competitionListsStateUpdated: ", this.competitionListsState);
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
