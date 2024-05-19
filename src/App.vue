<template>
    <Header/>
    <ListSelector/>
<!--    <Test/>-->
    <ListSelectorNotification/>
</template>

<script>
import Header from "@/components/Header.vue";
import Test from "@/components/Test.vue";
import ListSelector from "@/components/ListSelector.vue";
import ListSelectorNotification from "@/components/ListSelectorNotification.vue";

export default {
    components: {
        Header, ListSelector, ListSelectorNotification ,Test,
    },

    // TODO: make ListSelector return list selection status (none, one competition selected, multiple selected)
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
