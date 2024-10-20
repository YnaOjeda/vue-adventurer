<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-for="key in FeatureKeys" :key="`adventurer-${key}`">
      <FeatureGenerator
        v-if="!FeatureOptional[key as FeatureType] || props[key as FeatureType]"
        :key="`adventurer-feature-${key}`"
        :feature-key="key as FeatureType"
        :variant="props[key as FeatureType]?.variant"
        :color="props[key as FeatureType]?.color"
      />
    </template>
  </svg>
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
