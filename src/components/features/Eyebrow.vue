<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="variantHTML"
  ></svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Eyebrows, EyebrowType } from '../../constants/features/eyebrows';
import { FeatureProps } from '../../constants/features';
import { getSVGContent } from '../../utils';

const props = defineProps<FeatureProps<EyebrowType>>();

const variantHTML = computed(() => {
  return getSVGContent(Eyebrows, props.variant, props.color);
});
</script>
