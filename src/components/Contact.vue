<template>
  <!--<v-row class="justify-center">
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/level.jpg"></v-img>
        <v-card-title>Levél</v-card-title>
        <v-card-text>9730 Kőszeg Vadvirág u.11</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/email.jpg"></v-img>
        <v-card-title>E-mail</v-card-title>
        <v-card-text>dora.peter@freemail.hu</v-card-text>
      </v-card></v-col
    >
  </v-row>
  <v-row class="justify-center">
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/telefon.jpg"></v-img>
        <v-card-title>Mobil</v-card-title>
        <v-card-text
          >06-30-2160846 <br />
          06-30-3968249</v-card-text
        >
      </v-card></v-col
    >
    <v-col cols="12" sm="6" lg="4"
      ><v-card>
        <v-img src="/facebook.jpg"></v-img>
        <v-card-title>Facebook</v-card-title>
        <v-card-actions>
          <v-btn
            href="https://www.facebook.com/profile.php?id=100008128930714"
            target="_blank"
            variant="outlined"
            >Felkeresés</v-btn
          >
        </v-card-actions>
      </v-card></v-col
    >
  </v-row>-->
  <v-row class="justify-center">
    <v-col v-for="t in tomb" cols="12" sm="6" lg="3">
      <v-card variant="tonal">
        <v-img :src="t.image"></v-img>
        <v-divider
          :thickness="2"
          color="teal-darken-4"
          class="border-opacity-100"
        ></v-divider>
        <v-card-title>{{ t.title }}</v-card-title>
        <v-card-text v-if="t.text.startsWith('http')"
          ><v-btn :href="t.text" target="_blank" variant="outlined"
            >Felkeresés</v-btn
          ></v-card-text
        >
        <v-card-text v-else>{{ t.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  data() {
    return {
      tomb: [
        {
          title: "Levél",
          text: "9730 Kőszeg Vadvirág u.11",
          image: "/mailbox.png",
        },
        {
          title: "E-mail",
          text: "dora.peter@freemail.hu",
          image: "/gmail-logo.png",
        },
        {
          title: "Mobil",
          text: "06-30-2160846 06-30-3968249",
          image: "/old-typical-phone.png",
        },
        {
          title: "Facebook",
          text: "https://www.facebook.com/profile.php?id=100008128930714",
          image: "/facebook.png",
        },
      ],
    };
  },
});
</script>
