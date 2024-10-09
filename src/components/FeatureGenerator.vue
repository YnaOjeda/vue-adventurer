<template>
  <svg
    :height="size"
    :width="size"
    :viewBox="featureKey === FeatureKey.face ? '0 0 762 762' : '0 0 1024 1024'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="variantHTML"
  ></svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { FeatureKey, FeatureProps } from '../constants/features';
import { getSVGContent } from '../utils';

const props = defineProps<FeatureProps>();

const variantHTML = computed(() => {
  return getSVGContent(props.featureKey, props.variant, props.color);
});
</script>
