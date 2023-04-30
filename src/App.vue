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
  <v-app>
    <div class="div">
      <v-row class="justify-center">
        <v-col sm="10" cols="12" class="pb-0 mt-2">
          <!--<div class="title"></div>-->
        </v-col>
      </v-row>
      <v-row class="r justify-center">
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col sm="8"></v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
      </v-row>
      <v-row class="r justify-center">
        <v-col class="c3" sm="10"> </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col sm="8" class="c2">
          <v-row>
            <!--<v-col v-if="false" align="center">
            <router-link to="/"
              ><v-btn class="active">Kezdő oldal</v-btn></router-link
            >
            <router-link to="/map"><v-btn>Térkép</v-btn></router-link>
            <router-link to="/contact"><v-btn>Elérhetőség</v-btn></router-link>
            <router-link to="/prices"><v-btn>Árak</v-btn></router-link>
            <router-link to="/images"><v-btn>Képek</v-btn></router-link>
          </v-col>-->
            <v-col class="tab">
              <v-btn v-if="isMobile" v-on:click="btnClick" block
                >Navigáció<v-icon>{{
                  tabOpen ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon></v-btn
              >
              <v-expand-transition>
                <v-tabs
                  v-model="tab"
                  grow
                  :direction="dir"
                  show-arrows
                  v-if="tabOpen || !isMobile"
                >
                  <v-tab value="home"
                    >Kezdő oldal <v-icon icon="mdi-home"
                  /></v-tab>
                  <v-tab value="map">Térkép <v-icon icon="mdi-map" /></v-tab>
                  <v-tab value="price">Árak <v-icon icon="mdi-cash" /></v-tab>
                  <v-tab value="image">Képek <v-icon icon="mdi-image" /></v-tab>
                  <v-tab value="contact"
                    >Elérhetőség <v-icon icon="mdi-contacts"
                  /></v-tab>
                </v-tabs>
              </v-expand-transition>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-window v-model="tab" :touch="{ left: null, right: null }">
                <v-window-item value="home"> <Home /> </v-window-item>
                <v-window-item value="map" class="h"> <Map /> </v-window-item>
                <v-window-item value="price"> <Prices /></v-window-item>
                <v-window-item value="image" class="h">
                  <Image />
                </v-window-item>
                <v-window-item value="contact"> <Contact /></v-window-item>
              </v-window>
            </v-col> </v-row
        ></v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
      </v-row>
      <v-row class="r justify-center">
        <v-col class="c3" sm="10"></v-col>
      </v-row>
      <v-row class="row justify-center">
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col sm="8"> </v-col>
        <v-col
          :class="{ c1: true, img: !isMobile, mobil: isMobile }"
          sm="1"
        ></v-col>
        <v-col :class="{ c4: !isMobile, mobil: isMobile }" sm="1"></v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
import Map from "./components/Map.vue";
import Image from "./components/Image.vue";
import Contact from "./components/Contact.vue";
import Prices from "./components/Prices.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Map,
    Image,
    Contact,
    Prices,
  },
  data() {
    return {
      drawer: false,
      tab: null,
      windowWidth: window.innerWidth,
      isMobile: null,
      dir: null,
      tabOpen: null,
      arrowIcon: null,
    };
  },
  mounted() {
    if (this.windowWidth < 600) {
      this.isMobile = true;
      this.dir = "vertical";
    } else {
      this.isMobile = false;
      this.dir = "horizontal";
    }
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    openDrawer() {
      this.drawer = true;
    },
    btnClick() {
      this.tabOpen = !this.tabOpen;
    },
  },
  watch: {
    windowWidth: {
      handler() {
        if (this.windowWidth < 600) {
          this.isMobile = true;
          this.dir = "vertical";
        } else {
          this.isMobile = false;
          this.dir = "horizontal";
        }
      },
    },
  },
});
</script>

<style scoped>
.h {
  height: 73vh;
}
.tab {
  padding: 0;
}
.active {
  background: red;
}
.dialog {
  background-image: url("/tornpaper.png");
  background-size: cover;
}
.page {
  background-image: url("/haz.jpg");
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
  text-align: center;
  border-style: solid;
  height: 0;
  width: 100%;
  border-color: transparent transparent rgb(129, 63, 63) transparent;
  border-width: 0 45px 45px 45px;
}

.img {
  padding: 0;
  max-width: 50px;
  border-left: outset;
  border-right: outset;
  border-left-color: black;
  border-right-color: black;
}
.c1 {
  background-image: url("/images.jpg");
  background-repeat: repeat;
}
.c2 {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(14, 174, 87, 1) 0%,
    rgba(12, 116, 117, 1) 90%
  );
}
.c3 {
  background-image: url("/images.jpg");
  background-repeat: repeat;
  border-radius: 15px;
  border-style: outset;
  border-top-color: black;
  border-left-color: black;
  border-right-color: black;
  border-bottom-color: black;
  height: 40px;
}
.c4 {
  padding: 0;
  max-width: 50px;
}
.mobil {
  padding: 0;
  max-width: 10px;
}
.div {
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-image: url("/haz.jpg");
  background-size: cover;

  overflow: hidden;
  overflow-y: auto;
}
</style>
