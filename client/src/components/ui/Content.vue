<template>
     <section class="content">
          <div class="content__container">
               <div class="content__container-inner">
                    <div class="content__row">
                         <PostCard v-for="item in arr" :key="item" />
                    </div>
               </div>
          </div>
     </section>
</template>

<script>
import PostCard from '../Post/PostCard';

export default {
     name: 'Content',
     components: { PostCard },
     setup() {
          const arr = [1, 2, 3, 4, 5, 6];

          return { arr };
     },
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

     &__row {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 40px 20px;
     }

     @include from(600px) {
          &__row {
               grid-template-columns: repeat(2, 1fr);
          }
     }

     @include from(1000px) {
          &__row {
               grid-template-columns: repeat(3, 1fr);
          }
     }
}
</style>
