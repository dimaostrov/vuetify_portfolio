<template>
<section id="portfolio">
    <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
                <h2 class="headline">The Best Developer For Your Team</h2>
                <span class="subheading">
                JS, Node.JS, React, Vue
              </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container grid-list-xl>
                <portfolio-items />
            </v-container>
        </v-flex>
    </v-layout>
</section>
</template>

<script>
import PortfolioItems from './portfolio-items.vue'

export default {
    components: {
        "portfolio-items": PortfolioItems
    }
}

</script>