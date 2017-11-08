<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>

      <vHeader />
      <router-view />
      <vFooter />

    </q-layout>
  </div>
</template>

<script>
import vHeader from './components/header.vue'
import vFooter from './components/footer.vue'

export default {
  components: {
    vFooter,
    vHeader
  }
}
</script>

<style>
html * {
  font-family: "Arial";
}

.layout {
  background-color: #D1C4E9;
  text-align: center;
}
</style>
