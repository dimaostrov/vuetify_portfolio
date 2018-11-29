<template>
  <v-layout row wrap align-center>
    <v-flex v-for="(item, i) in items" v-bind:key="i" xs12 md4>
      <v-card class="elevation-0 transparent">
        <v-card-text class="text-xs-center">
          <v-icon x-large class="blue--text text--lighten-2">{{item.icon}}</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
          <div class="headline text-xs-center">{{item.title}}</div>
        </v-card-title>
        <v-card-text>{{item.text}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "color_lens",
          title: "Meal Recipe Prepper",
          text:
            "An example app with authentication, built in React, uses Redux for state management, and also a 3rd party API to get recipes.",
          link: "https://dimaostrov.github.io/meal_prep-react/"
        },
        {
          icon: "flash_on",
          title: "Vuegram",
          text:
            "An app built with Vue on top of firebase for users to post articles and comment on them.",
          link: "https://savvy-80e51.firebaseapp.com/"
        },
        {
          icon: "build",
          title: "Property Explorer",
          text:
            "A web app that chronicles information about different properties by region. Built with React, Express",
          link: "http://li897-213.members.linode.com"
        }
      ]
    };
  }
};
</script>

