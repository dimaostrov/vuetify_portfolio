<template>
  <section id="about">
    <v-parallax :src="require('@/assets/hero.png')" height="380">
      <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
      <em>Skills</em>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex v-for="(icon, i) in icons" v-bind:key="i" xs1>
            <v-card style="padding: 0.5rem">
              <i :class="icon" style="font-size: 4rem"></i>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "devicon-express-original-wordmark",
        "devicon-amazonwebservices-original",
        "devicon-babel-plain",
        "devicon-bitbucket-plain",
        "devicon-bootstrap-plain",
        "devicon-chrome-plain",
        "devicon-css3-plain",
        "devicon-d3js-plain",
        "devicon-debian-plain",
        "devicon-django-plain",
        "devicon-docker-plain",
        "devicon-express-original",
        "devicon-github-plain",
        "devicon-git-plain",
        "devicon-heroku-original",
        "devicon-html5-plain",
        "devicon-javascript-plain",
        "devicon-linux-plain",
        "devicon-mongodb-plain",
        "devicon-mysql-plain",
        "devicon-nodejs-plain",
        "devicon-nginx-original",
        "devicon-python-plain",
        "devicon-rails-plain",
        "devicon-react-original",
        "devicon-sequelize-plain",
        "devicon-typescript-plain",
        "devicon-ubuntu-plain",
        "devicon-vuejs-plain",
        "devicon-visualstudio-plain",
        "devicon-webpack-plain",
        "devicon-wordpress-plain"
      ]
    };
  }
};
</script>