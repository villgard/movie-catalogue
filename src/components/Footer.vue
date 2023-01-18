<template>
  <footer :class="$style.footer">
    {{ new Date().getFullYear() }}
  </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
.footer {
  flex: 0 0 auto;
  width: 100%;
  background-color: #1a1a1a;
  color: #fafafa;
  padding: 10px 15px;
}
</style>