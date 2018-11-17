<template>
<div id="app">
    <v-app light>
        <toolbar />
        <v-content>
          <hero data-aos="fade-in" />
          <portfolio data-aos="fade-in"/>
          <about data-aos="fade-in" />
          <contact data-aos="fade-in" />
          <v-footer class="brown darken-2">
              <v-layout row wrap align-center>
                  <v-flex xs12>
                      <div class="white--text ml-3">
                          Made with
                          <v-icon class="red--text">favorite</v-icon>
                          by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                          and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>,
                          augmented and customized by <a class="white--text" href="https://github.com/dimaostrov">Dmitriy Ostrovskiy</a>
                      </div>
                  </v-flex>
              </v-layout>
          </v-footer>
        </v-content>
    </v-app>
</div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import Toolbar from "./components/toolbar.vue";
import Hero from "./components/hero.vue";
import Portfolio from "./components/portfolio.vue";
import About from "./components/about.vue";
import Contact from "./components/contact.vue";

AOS.init({
  duration: 750
});

export default {
    name: "App",
    components: {
        toolbar: Toolbar,
        hero: Hero,
        portfolio: Portfolio,
        about: About,
        contact: Contact
    },
    data() {
        return {
            title: "Dmitriy Ostrovskiy"
        };
    }
};
</script>
