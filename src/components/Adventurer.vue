<template>
  <div>
    <Face :size="size" color="white" />
    <Eyebrow class="attribute-container" :size="size" variant="brow-4" />
  </div>
</template>

<script setup lang="ts">
import Eyebrow from './features/Eyebrow.vue';
import Face from './features/Face.vue';

type Props = {
  size: number;
};
const props = defineProps<Props>();
</script>

<style scoped>
.attribute-container {
  position: absolute;
  top: 0; /* Adjust to stack from top */
  left: 0; /* Adjust to stack from left */
}
</style>
