<template>
  <li :class="[$style.container]">
    <div v-show="!onFocus" :class="$style.poster">
      <slot name="poster" />
    </div>
    <div v-if="onFocus" :class="$style.info">
      <h3 :class="$style.title">
        <slot name="title" />
      </h3>
      <ul :class="$style.genres">
        <slot name="genres" />
      </ul>
      <ul :class="$style.stats">
        <li>
          <slot name="time" />
        </li>
        <li>
          <slot name="year" />
        </li>
        <li>
          <slot name="rating" />
        </li>
      </ul>
      <p :class="$style.description">
        <span>
          <slot name="description" />
        </span>
      </p>
      <div :class="$style.blackout" />
    </div>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  onFocus: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  cursor: pointer;
  color: #ffffff;
}

.poster {
  width: 100%;
  height: 100%;
}

.info {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(rgba(77, 77, 85, 0), #4d4d55);
  }
}

.genres,
.stats {
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  list-style: none;
  font-size: 14px;
  line-height: 19px;
}

.title {
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 1;
}

.time {
  display: flex;
  align-items: center;
  column-gap: 3px;
}

.description {
  font-size: 13px;
  line-height: 18px;
}
</style>
