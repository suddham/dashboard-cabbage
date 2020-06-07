<template>
  <div :class="chosenColor">
    <ul class="w-full flex flex-wrap items-center pb-4">
      <li><p class="pr-4 pb-2 text-gray-700">Select Color</p></li>
      <li v-for="color in colors" :key="color.bg" class="pr-2">
        <button
          :class="color.bg"
          class="w-6 h-6 rounded-full focus:outline-none"
          :aria-label="'Choose ' + color.text"
          @click="chosenColor = color.text"
        />
      </li>
    </ul>
    <div class="flex flex-wrap">
      <p class="pb-4 pr-4"><arrow class="icon-style" /></p>
      <p class="pb-4 pr-4"><bone class="icon-style" /></p>
      <p class="pb-4 pr-4"><charts class="icon-style" /></p>
    </div>
  </div>
</template>

<script>
import Arrow from '@/components/icons/Arrow.vue'
import Bone from '@/components/icons/Bone.vue'
import Charts from '@/components/icons/Charts.vue'
export default {
  components: { Arrow, Bone, Charts },
  data() {
    return {
      colors: [
        { text: 'text-primary-500', bg: 'bg-primary-500' },
        { text: 'text-complementary-300', bg: 'bg-complementary-300' },
        { text: 'text-complementary-700', bg: 'bg-complementary-700' },
        { text: 'text-gray-700', bg: 'bg-gray-700' }
      ],
      chosenColor: ''
    }
  }
}
</script>

<style scoped>
.icon-style {
  @apply bg-white rounded-lg shadow-md p-2 w-12 h-12 fill-current;
}
</style>
