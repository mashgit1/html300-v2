<template>
  <div class="image-container" @click="toggleBorder" :class="{ 'border-purple': isBorderVisible }">
    <img :src="image.src" :alt="image.alt" :title="image.title" class="img-fluid">
  </div>
</template>

<script>
import { imageBorderMixin } from '@/path/to/imageBorderMixin.js';

export default {
  mixins: [imageBorderMixin],
  props: {
    image: {
      type: Object,
      required: true,
      validator: value => {
        return 'src' in value && 'alt' in value && 'title' in value;
      }
    }
  }
};
</script>

<style>
.border-purple {
  border: 2px solid #9370DB; /* Light purple */
}
</style>