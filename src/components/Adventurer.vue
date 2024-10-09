<template>
  <div>
    <div v-for="key in FeatureKeys" :key="`adventurer-${key}`">
      <FeatureGenerator
        class="attribute-container"
        style="z-index: key + 1"
        :size="size"
        :feature-key="key as FeatureType"
        :variant=" props[key as FeatureType]?.variant"
        :color=" props[key as FeatureType]?.color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AdventurerProps,
  FeatureKeys,
  FeatureType,
} from '../constants/features';
import FeatureGenerator from './FeatureGenerator.vue';

type Props = {
  size: number;
};
const props = defineProps<AdventurerProps>();
</script>

<style scoped>
.attribute-container {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
