<template>
  <body>
    <Adventurer
      :size="500"
      :face="face"
      :marking="marking"
      :mouth="mouth"
      :eyes="eyes"
      :brows="brows"
      :glasses="glasses"
      :earrings="earrings"
      :hair="hair"
    />
  </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Adventurer from './components/Adventurer.vue';
import { AdventurerProps } from './constants/features';
import {
  SkinColor,
  EyeColor,
  HairColor,
  EyeGlassesColor,
} from './constants/colors';

const face = ref<AdventurerProps['face']>({
  color: SkinColor['skin-tone-2'],
});
const marking = ref<AdventurerProps['marking']>({
  variant: 'marking-1',
});
const mouth = ref<AdventurerProps['mouth']>({
  variant: 'mouth-30',
});
const eyes = ref<AdventurerProps['eyes']>({
  variant: 'eye-7',
  color: EyeColor['eye-green-1'],
});
const brows = ref<AdventurerProps['brows']>({
  variant: 'brow-1',
  color: HairColor['hair-grey-1'],
});
const glasses = ref<AdventurerProps['glasses']>({
  variant: 'glasses-4',
  color: EyeGlassesColor['glasses-blue-1'],
});
const earrings = ref<AdventurerProps['earrings']>({
  variant: 'earring-2',
});
const hair = ref<AdventurerProps['hair']>({
  variant: 'hair-37',
  color: HairColor['hair-grey-1'],
});
</script>

<style scoped></style>
