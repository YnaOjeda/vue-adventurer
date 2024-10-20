<template>
  <div
    class="adventurer-container"
    :style="{
      width: `${size}px`,
    }"
  >
    <template v-for="(key, index) in FeatureKeys" :key="`adventurer-${key}`">
      <FeatureGenerator
        :key="`adventurer_${key}`"
        v-if="!FeatureOptional[key as FeatureType] || props[key as FeatureType]"
        :size="size"
        class="feature-container"
        :style="{ zIndex: index + 1 }"
        :feature-key="key as FeatureType"
        :variant="props[key as FeatureType]?.variant"
        :color="props[key as FeatureType]?.color"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  AdventurerProps,
  FeatureKeys,
  FeatureOptional,
  FeatureType,
} from '../constants/features';
import FeatureGenerator from './FeatureGenerator.vue';

const props = defineProps<AdventurerProps>();
</script>

<style scoped>
.feature-container {
  position: absolute;
  top: 0;
  left: 0;
}
.adventurer-container {
  position: 'relative';
  aspectratio: 1;
}
</style>
