<template>
  <div>
    <template v-for="key in FeatureKeys" :key="`adventurer-${key}`">
      <FeatureGenerator
        :key="`adventurer_${key}`"
        v-if="!FeatureOptional[key as FeatureType] || props[key as FeatureType]"
        class="attribute-container"
        style="z-index: key + 1"
        :size="size"
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
.attribute-container {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
