<template>
     <section class="content">
          <div class="content__container">
               <div class="content__container-inner">
                    <h2>content</h2>
               </div>
          </div>
     </section>
</template>

<script>
export default {
     name: 'Content',
};
</script>

<style scoped lang="scss">
.content {
     display: flex;
     justify-content: center;
     margin-top: 50px;

     &__container {
          @include paper($color-white);
          box-shadow: 0 0 50px 0 rgb(82 63 105 / 5%);
     }
}
</style>
