<template>
  <div class="flex flex-wrap -mr-4 md:-mr-6">
    <div
      v-for="item in gradients"
      :key="item.name"
      class="w-full sm:w-1/2 md:w-56 pr-4 md:pr-6 pb-4"
    >
      <!-- Color composition -->
      <p :class="item.gradient /* item.gradient == 'bg-name-gradient' */">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradients: [
        {
          name: 'primary',
          gradient: 'primary-45'
        },
        {
          name: 'complementary',
          gradient: 'complementary-45'
        },
        {
          name: 'mixed',
          gradient: 'mixed-45'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
