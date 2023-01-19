<template>
  <div :class="$style.container">
    <div :class="$style.side">
      <div :class="$style.poster">
        <slot name="poster" />
      </div>
      <ul :class="$style.stats">
        <li :class="$style.item">
          <slot name="rating" />
        </li>
        <li :class="$style.item">
          <slot name="year" />
        </li>
        <li :class="$style.item">
          <slot name="genres" />
        </li>
        <li :class="$style.item">
          <slot name="countries" />
        </li>
        <li :class="$style.item">
          <slot name="duration" />
        </li>
      </ul>
    </div>
    <div :class="$style.content">
      <h1 :class="$style.title">
        <slot name="title" />
      </h1>
      <p :class="$style.description">
        <slot name="description" />
      </p>
      <div :class="$style.actions">
        <slot name="actions" />
      </div>
      <div :class="$style.about">
        <slot name="about" />
        <ul :class="$style.list">
          <slot name="information" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.container {
  width: 100%;
  display: flex;
  column-gap: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 690px) {
    flex-direction: column-reverse;
  }
}

.side {
  @media screen and (max-width: 690px) {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}

.content {
  max-width: 600px;
  width: 100%;
  @media screen and (max-width: 690px) {
    max-width: 100%;
  }
}

.stats {
  margin: 10px 0;
  @media screen and (max-width: 690px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
}

.trailer {
  width: 100%;
  height: 480px;
}

.poster {
  width: 320px;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
}

.item {
  font-size: 14px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    font-weight: 400;
    margin-right: 4px;
  }
}

.title {
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
}

.description {
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (max-width: 690px) {
    text-align: justify;
  }
}

.actions {
  display: flex;
  column-gap: 10px;
  @media screen and (max-width: 690px) {
    justify-content: space-around;
  }
}

.about {
  margin: 20px 0;
  h2 {
    margin-bottom: 20px;
  }
}

.list {
  li {
    font-weight: 600;
  }
}
</style>
