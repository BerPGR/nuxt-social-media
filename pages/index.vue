<template>
  <v-row>
    <v-col cols="12">
      <HeaderView />
      
      <div class="mt-2">
        <WriteView />
      </div>

      <div class="mt-2">
        <ContentView v-for="(publication, i) in $store.state.publications" :key="i" :publication="publication"/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
