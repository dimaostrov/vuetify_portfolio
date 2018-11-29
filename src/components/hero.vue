<template>
<section id="hero">
    <v-parallax :src="require('@/assets/hero.png')" height="600">
        <v-layout column align-center justify-center class="white--text">
            <v-avatar size="200">
            <img src="../assets/profile.jpeg" alt="Dmitriy picture" />
            </v-avatar>
            <h1 class="white--text mb-2 display-1 text-xs-center">Dmitriy Ostrovskiy</h1>
            <div class="subheading mb-3 text-xs-center">JS Developer</div>
            <v-btn class="blue lighten-2 mt-5" dark large href="mailto:dmtrostrovskiy@gmail.com?Subject=Hire Dima!!">
                Email
            </v-btn>
        </v-layout>
    </v-parallax>
</section>
</template>

<script>
export default {
    
}
</script>

