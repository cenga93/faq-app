<template>
     <section class="content">
          <div class="content__container">
               <div class="content__container-inner">
                    <div class="content__row">
                         <div class="content__card" v-for="broj in 10" :key="broj">
                              <div class="content__card__image-box">
                                   <img src="../../assets/img/dummy_card_img.jpg" alt="" />
                              </div>
                              <h3 class="content__card__title">
                                   <a href="" class="content__card__link">Admin Panel - How To Started the Dashboard Tutorial</a>
                              </h3>
                              <p class="content__card__description">
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, et eum illo iste modi omnis quo rem
                                   repellat repellendus reprehenderit sed sit soluta totam unde vero voluptas voluptatem. Accusamus,
                                   tempore?
                              </p>
                              <div class="content__card__info">
                                   <div class="content__card__avatar">
                                        <img src="../../assets/img/profile_image.jpg" alt="" />
                                   </div>
                                   <router-link to="/">Milan Milic</router-link>&nbsp;on Maj 2022
                              </div>
                         </div>
                    </div>
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

     &__row {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 40px 20px;
     }

     &__card {
          border-bottom: 1px solid $color-brand-2;

          &__link,
          &__description,
          &__info {
               color: $color-brand-3;
               margin-bottom: 10px;
          }

          &__description,
          &__info {
               font-size: 14px;
          }

          &__image-box {
               @include size(100%, 170px);
               margin-bottom: 20px;
               overflow: hidden;
               border-radius: 7px;

               &:hover {
                    img {
                         transform: rotate(1deg) scale(1.1);
                    }
               }

               img {
                    @include size(100%);
                    object-fit: cover;
                    transition: all 0.2s;
               }
          }

          &__link {
               display: block;
               font-weight: 500;
               text-decoration: none;
               font-size: 18px;

               &:hover {
                    color: $color-brand-13;
                    text-decoration: underline;
               }
          }

          &__info {
               display: flex;
               align-items: center;

               a {
                    font-weight: 500;
                    color: $color-brand-3;
                    text-decoration: none;

                    &:hover {
                         color: $color-brand-5;
                    }
               }
          }

          &__avatar {
               @include size(30px);
               margin-right: 10px;

               img {
                    border-radius: 30px;
                    width: 100%;
               }
          }
     }

     @include from(425px) {
          &__card {
               &__image-box {
                    height: 200px;
               }
          }
     }

     @include from(600px) {
          &__row {
               grid-template-columns: repeat(2, 1fr);
          }

          &__card {
               &__image-box {
                    height: 220px;
               }
          }
     }

     @include from(1000px) {
          &__row {
               grid-template-columns: repeat(3, 1fr);
          }

          &__card {
               &__image-box {
                    height: 240px;
               }
          }
     }
}
</style>
