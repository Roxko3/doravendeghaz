<template>
  <v-carousel
    show-arrows="hover"
    hide-delimiters
    cycle
    v-on:click="check($event)"
  >
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  data() {
    return {};
  },
  methods: {
    check(event) {
      console.log(event.target.src);
    },
  },
});
</script>
