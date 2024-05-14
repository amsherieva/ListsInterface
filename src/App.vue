<template>
    <Header/>
    <ListSelector/>
    <Test/>
    <TempListSelector/>
</template>

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue"
import Test from "@/components/Test.vue";
import TempListSelector from "@/components/TempListSelector.vue";

export default {
    components: {
        Header, ListSelector, Test, TempListSelector
    },
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
