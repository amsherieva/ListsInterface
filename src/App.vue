<template>
    <Header />
    <ListSelector />
</template>

<script>
import Header from "@/components/Header.vue";
import ListSelector from "@/components/ListSelector.vue"

export default {
  components: {
    Header, ListSelector
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto-Black";
  src: url("/src/assets/fonts/Roboto-Black.ttf") format("ttf");
}
</style>
