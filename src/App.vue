<template>
  <v-app class="page">
    <v-app-bar title="Dóra Vendégház Kőszeg">
      <v-list density="compact">
        <router-link to="/"
          ><v-list-item title="Kezdő oldal"></v-list-item
        ></router-link>
        <router-link to="/about"
          ><v-list-item title="Térkép"></v-list-item
        ></router-link>
        <a>Elérhetőség</a> <a>Árak</a> <a> Kedvezmények</a>
      </v-list>
    </v-app-bar>
    <RouterView />
    <v-footer class="footer">
      <v-row
        ><v-col
          >Dóra Vendégház Kőszeg - {{ new Date().getFullYear() }}<br />
          NTAK regisztrációs szám: MA19008454</v-col
        >
      </v-row>
      <v-row>
        <v-col>
          Levél: 9730 Kőszeg Vadvirág u.11<br />
          Mobil: 06-30-2160846<br />
          Mobil: 06-30-3968249<br />
          E-mail: dora.peter@freemail.hu<br />
          <a
            href="https://www.facebook.com/profile.php?id=100008128930714"
            target="_blank"
            >Facebook: Dóra Vendégház Kőszeg</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.page {
  background-image: url("../../public/haz.jpg");
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: teal;
  color: white;
}
</style>
