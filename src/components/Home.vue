<template>
  <v-row class="justify-center"
    ><v-col cols="12" lg="6" md="8" sm="10" class="text-h3" align="center"
      >Dóra Vendégház Kőszeg</v-col
    ></v-row
  >
  <v-row class="justify-center">
    <v-col cols="12" lg="6" md="8" sm="10" class="text-h6" align="justify">
      <!--<img src="../../public/adjpg.jpg" /><br />-->
      Kőszeg belvárosában 1767-ben épült műemlék épületben a földszinten lett
      kialakítva egy 50m² -es apartman, mely két egybenyíló boltíves szobából,
      felszerelt konyhából ( kávé főző, mikró,hűtő vízforraló,elektromos tűzhely
      stb. ) fürdőből, kis étkezőből áll. Az apartmanunk egyszerre 4-fő számára
      biztosít kényelmes pihenést. Januártól - decemberig várjuk kedves
      vendégeinket. Télen központi fűtés gondoskodik az Ön kényelméről, amit Ön
      szabályozhat felár nélkül. Nálunk nincsenek közös helységek, nem kell
      alkalmazkodni másokhoz. Az érkezést-távozást rugalmasan kezeljük, ahogy a
      foglalások lehetővé teszik. Autóval érkező vendégeinknek ingyenes
      parkolóbérletet biztosítunk.
    </v-col>
    <!--<v-col cols="12" lg="5" class="text-body-1" align="justify">
      <v-list density="compact">
        <v-list-item>
          <v-list-item-title>Kedvezményezett neve</v-list-item-title>
          <v-list-item-subtitle>Dóráné Gyarmati Tünde</v-list-item-subtitle>
        </v-list-item>
        <v-list-item lines="two">
          <v-list-item-title>Támogatási projekt címe</v-list-item-title>
          <v-list-item-subtitle>
            Kisfaludy Szálláshelyfejlesztési Konstukció - magánszálláshelyek és
            egyéb szálláshelyek fejlesztése</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Pályázat azonosító száma</v-list-item-title>
          <v-list-item-subtitle>TFC-M-1.1.2-2020-15177</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Szerződött támogatás összege</v-list-item-title>
          <v-list-item-subtitle>500.000,-Ft</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>A támogatás mértéke</v-list-item-title>
          <v-list-item-subtitle>100 %</v-list-item-subtitle>
        </v-list-item>
        <v-list-item lines="two">
          <v-list-item-title
            >A támogatott projekt tartalmának bemutatása</v-list-item-title
          >
          <v-list-item-subtitle
            >vendégházban található étkező,konyha, fürdőszoba burkolatainak
            teljes felújítása, cseréje, ablakok, bejárati ajtó
            cseréje</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            >A támogatott projekt befejezési dátuma</v-list-item-title
          >
          <v-list-item-subtitle>2021.03.31</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      Kedvezményezett neve: Dóráné Gyarmati Tünde Támogatási projekt címe:
      Kisfaludy Szálláshelyfejlesztési Konstukció - magánszálláshelyek és egyéb
      szálláshelyek fejlesztése Pályázat azonosító száma: TFC-M-1.1.2-2020-15177
      Szerződött támogatás összege: 500.000,-Ft A támogatás mértéke: 100 % A
      támogatott projekt tartalmának bemutatása: vendégházban található
      étkező,konyha, fürdőszoba burkolatainak teljes felújítása, cseréje,
      ablakok, bejárati ajtó cseréje. A támogatott projekt befejezési dátuma:
      2021.03.31 „ A támogatott projekt a Kisfaludy Turisztika Fejlesztési
      program keretében valósul meg” <br />NTAK regisztrációs szám: MA19008454
    </v-col>-->
  </v-row>
  <v-row class="justify-center"
    ><v-col cols="12" lg="6" md="8" sm="10" align="center"
      ><v-btn variant="tonal" v-on:click="openDialog()"
        >Kisfaludy Turisztika Fejlesztési Program</v-btn
      >
    </v-col></v-row
  >
  <v-row class="justify-center"
    ><v-col
      cols="12"
      lg="6"
      md="8"
      sm="10"
      class="text-subtitle-1"
      align="center"
    >
      NTAK regisztrációs szám: MA19008454
    </v-col></v-row
  >

  <!--<img src="../../public/haz.jpg" />
    <img src="../../public/adjpg.jpg" />
    <p>
      Kedvezményezett neve: Dóráné Gyarmati Tünde Támogatási projekt címe:
      Kisfaludy Szálláshelyfejlesztési Konstukció - magánszálláshelyek és egyéb
      szálláshelyek fejlesztése Pályázat azonosító száma: TFC-M-1.1.2-2020-15177
      Szerződött támogatás összege: 500.000,-Ft A támogatás mértéke: 100 % A
      támogatott projekt tartalmának bemutatása: vendégházban található
      étkező,konyha, fürdőszoba burkolatainak teljes felújítása, cseréje, ablakok,
      bejárati ajtó cseréje. A támogatott projekt befejezési dátuma: 2021.03.31 „
      A támogatott projekt a Kisfaludy Turisztika Fejlesztési program keretében
      valósul meg”
    </p>-->

  <v-dialog v-model="isOpen" class="dialog" width="auto">
    <img src="../../public/adjpg.jpg" />
    <v-list density="compact">
      <v-list-item>
        <v-list-item-title>Kedvezményezett neve</v-list-item-title>
        <v-list-item-subtitle>Dóráné Gyarmati Tünde</v-list-item-subtitle>
      </v-list-item>
      <v-list-item lines="two">
        <v-list-item-title>Támogatási projekt címe</v-list-item-title>
        <v-list-item-subtitle>
          Kisfaludy Szálláshelyfejlesztési Konstukció - magánszálláshelyek és
          egyéb szálláshelyek fejlesztése</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Pályázat azonosító száma</v-list-item-title>
        <v-list-item-subtitle>TFC-M-1.1.2-2020-15177</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Szerződött támogatás összege</v-list-item-title>
        <v-list-item-subtitle>500.000,-Ft</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>A támogatás mértéke</v-list-item-title>
        <v-list-item-subtitle>100 %</v-list-item-subtitle>
      </v-list-item>
      <v-list-item lines="two">
        <v-list-item-title
          >A támogatott projekt tartalmának bemutatása</v-list-item-title
        >
        <v-list-item-subtitle
          >vendégházban található étkező,konyha, fürdőszoba burkolatainak teljes
          felújítása, cseréje, ablakok, bejárati ajtó
          cseréje</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          >A támogatott projekt befejezési dátuma</v-list-item-title
        >
        <v-list-item-subtitle>2021.03.31</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-dialog>
  <v-layout>
    <v-navigation-drawer v-model="drawer" location="top" temporary>
      asd
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openDialog() {
      this.isOpen = true;
    },
  },
});
</script>

<style scoped>
.content {
  font-size: large;
  padding: 10px;
}
img {
  width: 100%;
}
</style>
