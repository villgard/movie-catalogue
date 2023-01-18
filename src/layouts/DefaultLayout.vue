<template>
  <div :class="$style.wrapper">
    <Header />
    <main :class="$style.main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
}

.main {
  max-width: 1230px;
  width: 100%;
  min-height: calc(100vh - 102px);
  margin: 0 auto;
  padding: 20px 15px 0;
}
</style>
