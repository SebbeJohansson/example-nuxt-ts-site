<template>
  <div class="container">
    {{ $t('message') }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  nuxtI18n: {
    paths: {
      en: '/test',
      sv: '/svenskttest',
    }
  }
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
