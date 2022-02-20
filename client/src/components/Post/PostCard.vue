<template>
     <div class="card">
          <div class="card__image-box">
               <img src="../../assets/img/dummy_card_img.jpg" alt="" />
          </div>
          <h3 class="card__title">
               <router-link :to="'/post/' + item" class="card__link">Admin Panel - How To Started the Dashboard Tutorial</router-link>
          </h3>
          <p class="card__description">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, et eum illo iste modi omnis quo rem repellat repellendus
               reprehenderit sed sit soluta totam unde vero voluptas voluptatem. Accusamus, tempore?
          </p>
          <div class="card__info">
               <div class="card__avatar">
                    <img src="../../assets/img/profile_image.jpg" alt="avatar" title="avatar" />
               </div>
               <router-link :to="'/profile/' + item">Milan Milic</router-link>&nbsp;on Maj 2022
          </div>
     </div>
</template>

<script>
export default {
     name: 'Card',
     props: {
          item: {
               type: Object,
               required: true,
          },
     },
};
</script>

<style lang="scss">
.card {
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
     .card {
          &__image-box {
               height: 200px;
          }
     }
}

@include from(600px) {
     .card {
          &__image-box {
               height: 220px;
          }
     }
}

@include from(1000px) {
     .card {
          &__image-box {
               height: 240px;
          }
     }
}
</style>
