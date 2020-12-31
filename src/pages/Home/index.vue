<template>
  <div class="home">
    <CardList />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Data, Methods, Computed, Props } from './index';
import CardList from '@/components/CardList/index.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    CardList,
  },
});
</script>
