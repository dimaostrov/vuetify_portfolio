<template>
<v-layout row wrap align-center>
                    <v-flex v-for="item in items" xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">{{item.icon}}</v-icon>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline text-xs-center">{{item.title}}</div>
                            </v-card-title>
                            <v-card-text>
                                {{item.text}}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
</template>

<script>
export default {
    data(){
        return {
            items: [
                { icon: 'color_lens', title: 'Material Design', text: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti." },
                { icon: 'flash_on', title: 'Fast Development', text: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti." },
                { icon: 'build', title: 'Completely Open Sourced', text: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti." },
            
            ]
        }
    }
}
</script>

