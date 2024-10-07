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
import { AppearanceBaseProp } from '../appearanceTypes';
import { ColorFlag, EyebrowIDs, Eyebrows, EyebrowType } from './options';

const props = withDefaults(defineProps<AppearanceBaseProp<EyebrowType>>(), {
  color: '#000',
});

const variantHTML = computed(() => {
  const variantKey = props.variant ?? (EyebrowIDs[1] as EyebrowType);
  const content = Eyebrows[variantKey];
  const variantColor = isValidColor(props.color) ? props.color : '#000';

  return content.replace(ColorFlag, variantColor);
});

const isValidColor = (color: string): boolean => {
  const testerElement = document.createElement('div');
  testerElement.style.color = color;
  return testerElement.style.color !== '';
};
</script>
