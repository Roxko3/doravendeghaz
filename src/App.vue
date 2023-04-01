<template>
  <!--<v-app class="page">
    <div>
      <v-app-bar title="Dóra Vendégház Kőszeg">
        <router-link to="/">Kezdő oldal </router-link>
        <router-link to="/about">Térkép </router-link>
        <a>Elérhetőség</a> <a>Árak</a> <a> Kedvezmények</a>
      </v-app-bar>
    </div>
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
  </v-app>-->
  <div class="div">
    <v-row class="title justify-center">
      <v-col>
        <h1>Dóra Vendégház Kőszeg</h1>
      </v-col>
    </v-row>
    <v-row class="r justify-center">
      <v-col class="c4" sm="1"></v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col sm="8"> </v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col class="c4" sm="1"></v-col>
    </v-row>
    <v-row class="r justify-center">
      <v-col class="c3" sm="10"></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col class="c4" sm="1"></v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col sm="8" class="c2">
        <v-row>
          <v-col v-if="true" align="center">
            <router-link to="/"
              ><v-btn class="active">Kezdő oldal</v-btn></router-link
            >
            <router-link to="/map"><v-btn>Térkép</v-btn></router-link>
            <router-link to="/contact"><v-btn>Elérhetőség</v-btn></router-link>
            <router-link to="/prices"><v-btn>Árak</v-btn></router-link>
            <router-link to="/images"><v-btn>Képek</v-btn></router-link>
          </v-col>
          <v-col v-else>
            <v-btn v-on:click="openDrawer">nav</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <RouterView />
          </v-col> </v-row
      ></v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col class="c4" sm="1"></v-col>
    </v-row>
    <v-row class="r justify-center">
      <v-col class="c3" sm="10"></v-col>
    </v-row>
    <v-row class="row justify-center">
      <v-col class="c4" sm="1"></v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col sm="8"> </v-col>
      <v-col class="c1 img" sm="1"></v-col>
      <v-col class="c4" sm="1"></v-col>
    </v-row>
  </div>

  <v-dialog v-model="isOpen" class="dialog" width="auto">
    <img src="../public/adjpg.jpg" />
    Kedvezményezett neve: Dóráné Gyarmati Tünde Támogatási projekt címe:
    Kisfaludy Szálláshelyfejlesztési Konstukció - magánszálláshelyek és egyéb
    szálláshelyek fejlesztése Pályázat azonosító száma: TFC-M-1.1.2-2020-15177
    Szerződött támogatás összege: 500.000,-Ft A támogatás mértéke: 100 % A
    támogatott projekt tartalmának bemutatása: vendégházban található
    étkező,konyha, fürdőszoba burkolatainak teljes felújítása, cseréje, ablakok,
    bejárati ajtó cseréje. A támogatott projekt befejezési dátuma: 2021.03.31 „
    A támogatott projekt a Kisfaludy Turisztika Fejlesztési program keretében
    valósul meg”
  </v-dialog>
  <v-layout>
    <v-navigation-drawer v-model="drawer" location="top" temporary>
      asd
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  data() {
    return {
      isOpen: false,
      drawer: false,
    };
  },
  methods: {
    openDialog() {
      this.isOpen = true;
    },
    openDrawer() {
      this.drawer = true;
    },
  },
});
</script>

<style scoped>
.active {
  background: red;
}
.dialog {
  background-image: url("../public/tornpaper.png");
  background-size: cover;
}
.page {
  background-image: url("../../public/haz.jpg");
}
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: teal;
  color: white;
}
.title {
  width: 0;
  height: 0;
  border-left: 800px solid transparent;
  border-right: 800px solid transparent;
  border-bottom: 150px solid #666;
}

.img {
  padding: 0;
  max-width: 50px;
}
.c1 {
  background-image: url("../../public/wood.jpg");
  background-size: cover;
}
.c2 {
  background: green;
}
.c3 {
  background-image: url("../../public/wood.jpg");
  background-size: cover;
  border-radius: 15px;
  border-style: outset;
  height: 40px;
}
.c4 {
  padding: 0;
  max-width: 50px;
}
.div {
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-image: url("../../public/koszeg.jpg");
  background-size: cover;

  overflow: hidden;
  overflow-y: auto;
}
</style>
