<template>
     <section class="postsList">
          <div class="postsList__container">
               <div class="postsList__row">
                    <PostCard v-for="item in arr" :key="item" :item="item" />
               </div>
          </div>
     </section>
</template>

<script>
import PostCard from './PostCard';

export default {
     name: 'PostsList',
     components: { PostCard },
     setup() {
          return {
               arr: [1, 2, 3, 4, 5, 6],
          };
     },
};
</script>

<style lang="scss">
.postsList {
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
