<template>
  <div class="card">
    <router-link
      class="card__thumbnail"
      to="/"
    >
      <figure class="card__figure">
        <img
          class="card__img"
          src="https://placehold.jp/256x192.png"
          alt=""
        >
      </figure>
    </router-link>
    <router-link
      class="card__name"
      to="/"
    >
      リボン
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Data, Methods, Computed, Props } from './index';

export default Vue.extend<Data, Methods, Computed, Props>();
</script>

<style lang="scss">
.card {
  &__thumbnail {
    display: block;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 8px;
  }
  &__figure {
    margin: 0;
  }
  &__img {
    display: block;
    width: 100%;
  }
  &__name {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: $oc-gray-9;
  }
}
</style>
