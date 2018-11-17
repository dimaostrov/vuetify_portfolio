<template>
<div>
    <v-toolbar class="cyan" fixed>
        <v-toolbar-title v-text="title" v-scroll-to="'#hero'"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat v-scroll-to="'#portfolio'">Portfolio</v-btn>
            <v-btn flat v-scroll-to="'#about'">About</v-btn>
            <v-btn flat v-scroll-to="'#contact'">Contact</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
    name: 'Toolbar',
    data() {
        return {
            title: "Dmitriy Ostrovskiy"
        }
    }
}
</script>
