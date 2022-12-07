<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="7">
      <v-card align="center">
        <v-card-title>Stories</v-card-title>
        <v-card-actions v-for="(story, i) in stories" :key="i" class="d-inline-flex">
          <div class="d-flex flex-column mr-6">
            <v-avatar size="60">
              <v-img :src="story.pic"></v-img>
            </v-avatar>
            <v-card-text>
              <p>{{story.name}}</p>
            </v-card-text>
          </div>
        </v-card-actions>
        <v-avatar size="40" class="mt-n13">
          <v-btn icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-avatar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    stories: [
      { pic: require('../assets/images/p1.jpg'), name: "Adam" },
      { pic: require('../assets/images/p2.jpg'), name: "Zach" },
      { pic: require('../assets/images/p3.jpg'), name: "Penny" },
      { pic: require('../assets/images/p4.jpg'), name: "Mark" },
      { pic: require('../assets/images/p5.jpg'), name: "Peter" },
      { pic: require('../assets/images/p6.jpg'), name: "Amber" },
    ]
  }),
}
</script>
