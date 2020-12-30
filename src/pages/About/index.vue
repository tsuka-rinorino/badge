<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Data, Methods, Computed, Props } from './index';

export default Vue.extend<Data, Methods, Computed, Props>();
</script>