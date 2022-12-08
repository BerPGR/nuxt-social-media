<template>
    <v-row justify="center">
        <v-col cols="12" sm="7">
            <v-card class="py-5 px-5">
                <div class="d-flex flex-row align-center mt-n4">
                    <v-avatar size="40">
                        <v-img :src="image"></v-img>
                    </v-avatar>
                    <v-card-title>Bernardo de Melo Matuchewski</v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </div>
                <v-card-text class="text-justify">{{publication.content}}</v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['publication'],
    data: () => ({
        image: require('../assets/images/eu.png')
    })
}
</script>

<style>

</style>