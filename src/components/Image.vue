<template>
  <v-carousel
    v-model="number"
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

  <v-overlay v-model="overlay"><img src="../../public/haz.jpg" /></v-overlay>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  data() {
    return {
      number: null,
      overlay: null,
    };
  },
  methods: {
    check(event) {
      if (event.target.src === undefined) {
        console.log("nincs");
      } else {
        this.overlay = true;
        console.log(this.number);
        console.log(event.target.src);
      }
    },
  },
});
</script>
