<template>
  <ul class="card-list">
    <li v-for="card in cards" :key="card.id" class="card-list__item">
      <Card />
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Data, Methods, Computed, Props } from './index';
import Card from '@/components/Card/index.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        }
      ]
    }
  }
});
</script>

<style lang="scss">
.card-list {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 40px 16px;
  max-width: #{256 * 2 + 16 * 1}px;
  list-style: none;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: #{256 * 3 + 32 * 2 + 80}px) {
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 40px 32px;
    max-width: #{256 * 3 + 32 * 2}px;    
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: #{256 * 4 + 32 * 3 + 80}px) {
    max-width: #{256 * 4 + 32 * 3}px;    
  }
}
</style>
