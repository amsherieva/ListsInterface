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
