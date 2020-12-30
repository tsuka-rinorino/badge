<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Data, Methods, Computed, Props } from './index';
import HelloWorld from '@/components/HelloWorld/index.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    HelloWorld,
  },
});
</script>
