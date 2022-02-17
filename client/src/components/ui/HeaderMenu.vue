<template>
     <div class="menu" @click="openMenu">
          <img src="../../assets/img/profile_image.jpg" class="menu__avatar" alt="" />
          <div class="menu__content" :class="showMenu && 'menu__content--active'" ref="target">
               <div class="menu__row">
                    <div class="menu__img-box">
                         <img src="../../assets/img/profile_image.jpg" alt="" />
                    </div>
                    <div class="menu__profile-info">
                         <p>Test Test <span class="menu__profile-role">Dev</span></p>
                         <p class="menu__profile-email">test@test.com</p>
                    </div>
               </div>
               <div class="menu__row">
                    <ul class="menu__list">
                         <li class="menu__item">
                              <a href="" class="menu__link">My profile</a>
                         </li>
                         <li class="menu__item">
                              <a href="" class="menu__link">My Projects 3</a>
                         </li>
                         <hr class="menu__divider" />
                         <li class="menu__item">
                              <a href="" class="menu__link">Sign Out</a>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

export default {
     name: 'HeaderMenu',
     setup() {
          const showMenu = ref(false);
          const target = ref(null);

          onClickOutside(target, () => (showMenu.value = false));

          return {
               target,
               openMenu: () => (showMenu.value = !showMenu.value),
               showMenu,
          };
     },
};
</script>

<style lang="scss">
.menu {
     @include size(40px);
     position: relative;

     &__avatar {
          cursor: pointer;
     }

     &__content {
          box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
          background-color: $color-white;
          position: absolute;
          width: 257px;
          top: calc(100% + 8px);
          right: 0;
          z-index: 1;

          &:not(&--active) {
               display: none;
          }
     }

     &__row {
          display: flex;

          &:first-child {
               padding: 16px;
               border-bottom: 1px solid $color-brand-2;
          }

          &:last-child,
          .menu__profile-info {
               flex-direction: column;
          }
     }

     &__img-box {
          @include size(50px);
          margin-right: 10px;
     }

     &__profile-info {
          display: flex;
          justify-content: space-around;
          flex: 1;

          p {
               display: flex;
               align-items: center;
          }
     }

     &__profile-role {
          padding: 3px 8px;
          border-radius: 10px;
          color: $color-brand-9;
          font-size: 10px;
          font-weight: 600;
          background-color: $color-brand-10;
          margin-left: 10px;
     }

     &__profile-email {
          font-size: 12px;
          font-weight: 500;
          color: $color-brand-4;
     }

     &__list {
          width: 100%;
          list-style: none;
          padding: 0;

          &:last-child {
               padding: 13px;
          }
     }

     &__item {
          padding: 7px 20px;
          transition: all 0.5s;

          &:hover {
               background: $color-brand-7;

               a {
                    color: $color-brand-5;
               }
          }
     }

     &__link {
          font-size: 14px;
          font-weight: 500;
          color: #5d5d5d;
          text-decoration: none;
     }

     &__divider {
          height: 1px;
          border: none;
          background: $color-brand-2;
     }

     img {
          border-radius: 5px;
          width: 100%;
     }
}
</style>
