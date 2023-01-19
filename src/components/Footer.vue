<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.footer {
  flex: 0 0 auto;
  width: 100%;
  background-color: #1a1a1a;
  color: #fafafa;
  padding: 10px 15px;
}

.container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
