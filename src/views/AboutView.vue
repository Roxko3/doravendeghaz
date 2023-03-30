<template>
  <div class="div">
    <v-container class="justify-center">
      <v-row class="title">
        <v-col>
          <h1>Dóra Vendégház Kőszeg</h1>
        </v-col>
      </v-row>
      <v-row class="r">
        <v-col sm="1"></v-col>
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="8"> </v-col>
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="1"></v-col>
      </v-row>
      <v-row class="r">
        <v-col class="c3" sm="12"></v-col>
      </v-row>
      <v-row>
        <v-col sm="1"></v-col>
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="8" class="c2">
          <v-row>
            <v-col>
              <v-btn>Kezdő oldal</v-btn>
              <v-btn>Térkép</v-btn>
              <v-btn>Elérhetőség</v-btn>
              <v-btn>Árak</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Kőszeg belvárosában 1767-ben épült műemlék épületben a földszinten
              lett kialakítva egy 50m² -es apartman, mely két egybenyíló
              boltíves szobából, felszerelt konyhából ( kávé főző, mikró,hűtő
              vízforraló,elektromos tűzhely stb. ) fürdőből, kis étkezőből áll.
              Az apartmanunk egyszerre 4-fő számára biztosít kényelmes pihenést.
              Januártól - decemberig várjuk kedves vendégeinket. Télen központi
              fűtés gondoskodik az Ön kényelméről, amit Ön szabályozhat felár
              nélkül. Nálunk nincsenek közös helységek, nem kell alkalmazkodni
              másokhoz. Az érkezést-távozást rugalmasan kezeljük, ahogy a
              foglalások lehetővé teszik. Autóval érkező vendégeinknek ingyenes
              parkolóbérletet biztosítunk.
            </v-col>
          </v-row></v-col
        >
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="1"></v-col>
      </v-row>
      <v-row class="r">
        <v-col class="c3" sm="12"></v-col>
      </v-row>
      <v-row class="row">
        <v-col sm="1"></v-col>
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="8"> </v-col>
        <v-col class="c1 img" sm="1"></v-col>
        <v-col sm="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.title {
  width: 0;
  height: 0;
  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 250px solid #666;
}
.img {
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
}
</style>
