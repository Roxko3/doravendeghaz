<template>
  <v-carousel
    v-model="number"
    cycle
    v-on:click="check($event)"
    height="100%"
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="image in images"
      :src="image"
      cover
    ></v-carousel-item>
  </v-carousel>

  <v-overlay v-model="overlay" class="justify-center align-center">
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
    <v-row
      align="center"
      v-touch="{ left: () => next(), right: () => previous() }"
    >
      <v-btn v-on:click="previous()" icon="mdi-chevron-left"></v-btn>

      <v-img :src="this.images[this.index]" width="auto" />

      <v-btn v-on:click="next()" icon="mdi-chevron-right"></v-btn></v-row
  ></v-overlay>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  data() {
    return {
      number: null,
      index: null,
      overlay: null,
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      ],
    };
  },
  methods: {
    next() {
      if (this.index == this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    previous() {
      if (this.index == 0) {
        this.index = this.images.length - 1;
      } else {
        this.index--;
      }
    },
    check(event) {
      if (event.target.src === undefined) {
        console.log("nincs");
      } else {
        this.overlay = true;
        console.log(event);
        console.log(this.number);
        this.index = this.number;
        console.log(event.target.src);
      }
    },
  },
});
</script>
