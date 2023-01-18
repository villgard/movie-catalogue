<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <RouterLink to="/" :class="$style.logo">
        <div :class="$style.icon">
          <img src="/image/logo.svg" alt="Movie App" />
        </div>
        <span :class="$style.title">Movie App</span>
      </RouterLink>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.header {
  background-color: #2e353d;
}
.container {
  max-width: 1230px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin: 5px 0;
}

.title {
  display: block;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
}

.icon {
  width: 48px;
  height: 48px;
}
</style>
