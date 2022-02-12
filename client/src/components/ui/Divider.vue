<template>
     <div class="divider">
          <span></span>
          <span>{{ label }}</span>
          <span></span>
     </div>
</template>

<script>
export default {
     name: 'Divider',
     props: {
          label: {
               type: String,
               require: true,
          },
     },
};
</script>

<style lang="scss" scoped>
@include divider;
</style>
