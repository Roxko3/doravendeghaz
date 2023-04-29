<template>
  <!-- elso verzio
    <v-row class="justify-center">
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/kettoember.jpg"></v-img>
        <v-card-title>1-2 fő </v-card-title>
        <v-card-text>13-15000.-ft/éj/lakás</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/haromember.jpg"></v-img>
        <v-card-title>3 fő</v-card-title>
        <v-card-text>20000.-ft/éj/lakás</v-card-text>
      </v-card></v-col
    >
  </v-row>
  <v-row class="justify-center">
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/negyember.jpg"></v-img>
        <v-card-title>4 fő</v-card-title>
        <v-card-text>25000.-ft/éj/lakás</v-card-text>
      </v-card></v-col
    >
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/kedvezmeny.jpg"></v-img>
        <v-card-title>Kedvezmények</v-card-title>
        <v-card-text>Parkolási kedvezmény</v-card-text>
      </v-card></v-col
    >
  </v-row>-->
  <!-- masodik verzio test
    <v-row class="justify-center">
    <v-col v-for="t in tomb" cols="12" sm="6" lg="3">
      <v-card :append-icon="t.icon">
        <template v-slot:title> {{ t.people }} fő</template>
        <template v-slot:text>
          <div class="text-h5">{{ t.price }}.-Ft / éj</div>
        </template>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="justify-center">
    <v-col cols="12" lg="6">
      <v-card
        title="Kedvezmények"
        text="Parkolási kedvezmény"
        append-icon="mdi-percent"
      ></v-card>
    </v-col>
  </v-row>-->
  <v-row class="justify-center">
    <v-col cols="6">
      <v-icon v-if="value === 0" icon="mdi-account"></v-icon>
      <v-icon v-if="value === 1" icon="mdi-account-multiple"></v-icon>
      <v-icon v-if="value === 2" icon="mdi-account-multiple-plus"></v-icon>
      <v-icon v-if="value === 3" icon="mdi-account-group"></v-icon>
      <v-slider
        v-model="value"
        :ticks="tickLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      ></v-slider>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Prices",
  data() {
    return {
      value: 0,
      tomb: [
        { people: 1, price: 13000, icon: "mdi-account" },
        { people: 2, price: 15000, icon: "mdi-account-multiple" },
        { people: 3, price: 20000, icon: "mdi-account-multiple-plus" },
        { people: 4, price: 25000, icon: "mdi-account-group" },
      ],
      tickLabels: {
        0: "1 fő",
        1: "2 fő",
        2: "3 fő",
        3: "4 fő",
      },
    };
  },
});
</script>
