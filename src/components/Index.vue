<template>
  <q-layout ref="layout">

    <vLanding />
    <vAbout />
    <vWork />
    <vContact />

    <router-view />
  </q-layout>
</template>

<script>

import vLanding from './cards/landing.vue'
import vAbout from './cards/about.vue'
import vWork from './cards/work.vue'
import vContact from './cards/contact.vue'

export default {
  data() {
    return {}
  },
  components: {
    vLanding,
    vAbout,
    vWork,
    vContact,
  }
}

</script>

<style>
#card-title {
  background-color: #673AB7;
  color: white;
}

#flaticons {
  width: 40px
}

.q-card {
  background: white;
  width: 700px;
  max-width: 100%;
  margin: .5em auto;
}
</style>
