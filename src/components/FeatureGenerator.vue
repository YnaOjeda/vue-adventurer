<template>
  <g v-html="variantHTML"></g>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { FeatureProps } from '../constants/features';
import { getSVGContent } from '../utils';

const props = defineProps<FeatureProps>();

const variantHTML = computed(() => {
  return getSVGContent(props.featureKey, props.variant, props.color);
});
</script>
