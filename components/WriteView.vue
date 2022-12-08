<template>
    <v-row justify="center">
        <v-col cols="12" sm="7">
            <v-card class="py-3 px-4">
                <div class="d-flex flex-row">
                    <v-avatar size="60" class="mt-4">
                        <v-img :src="pic"></v-img>
                    </v-avatar>
                    <v-card-text>
                        <v-text-field v-model="newPublication" @keypress.enter="sharePublication" label="What are you thinking?"
                            class="d-none d-sm-none d-md-flex"
                            filled solo flat rounded outlined
                        ></v-text-field>
                    </v-card-text>
                </div>
                <div class="d-flex flex-row mt-n5">
                    <v-btn fab dark small class="mr-3" color="white">
                        <v-icon dark color="primary">mdi-image</v-icon>
                    </v-btn>
                    <v-btn fab dark small class="mr-3" color="white">
                        <v-icon dark color="red">mdi-heart</v-icon>
                    </v-btn>
                    <v-btn fab dark small class="mr-3" color="white">
                        <v-icon dark color="yellow">mdi-star</v-icon>
                    </v-btn>
                    <v-btn fab dark small class="mr-3" color="white">
                        <v-icon dark color="green">mdi-pencil</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        newPublication: '',
        pic: require('../assets/images/eu.png'),
    }),

    methods: {
        sharePublication() {
            if(this.newPublication) {
                this.$store.commit('ADD_PUBLICATION', this.newPublication)
                this.newPublication = ''
            }
        }
    }
}
</script>

<style>

</style>