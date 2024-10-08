<template>
  <div>
    <Face :size="size" :color="props.face?.color" />
    <Eyebrow
      class="attribute-container"
      :size="size"
      :variant="props.brows?.variant"
      :color="props.brows?.color"
    />
  </div>
</template>

<script setup lang="ts">
import Eyebrow from './features/Eyebrow.vue';
import Face from './features/Face.vue';
import { AdventurerProps } from '../constants/features';

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
