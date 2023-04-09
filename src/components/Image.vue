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

  <v-overlay v-model="overlay" class="justify-center align-center" width="90vw">
    <!--<v-row>
      <v-carousel>
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
    </v-row>-->
    <v-row>
      <v-col sm="1" cols="1"> <v-btn icon="mdi-chevron-left"></v-btn></v-col
      ><v-col sm="10" cols="10"
        ><v-img
          src="../../public/haz.jpg"
          width="80vw"
          aspect-radio="16/9" /></v-col
      ><v-col sm="1" cols="1"
        ><v-btn icon="mdi-chevron-right"></v-btn></v-col></v-row
  ></v-overlay>
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
        console.log(event);
        console.log(this.number);
        console.log(event.target.src);
      }
    },
  },
});
</script>
