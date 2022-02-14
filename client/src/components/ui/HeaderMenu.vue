<template>
     <div class="profile_menu">
          <img src="../../assets/img/profile_image.jpg" alt="" />

          <div class="profile_menu__content">
               <div class="row">
                    <div class="row__img-box">
                         <img src="../../assets/img/profile_image.jpg" alt="" />
                    </div>
                    <div class="row__profile-info">
                         <p>Test Test <span class="row__profile-role">Dev</span></p>
                         <p class="row__profile-email">test@test.com</p>
                    </div>
               </div>
               <div class="row">
                    <ul class="row__list">
                         <li class="row__item">
                              <a href="" class="row__link">My profile</a>
                         </li>
                         <li class="row__item">
                              <a href="" class="row__link">My Projects 3</a>
                         </li>
                         <hr class="row__divider" />
                         <li class="row__item">
                              <a href="" class="row__link">Sign Out</a>
                         </li>
                    </ul>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'HeaderMenu',
};
</script>

<style lang="scss">
.profile_menu {
     @include size(40px);
     position: relative;

     &__content {
          box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
          background-color: $color-white;
          position: absolute;
          width: 257px;
          top: calc(100% + 8px);
          right: 0;

          .row {
               display: flex;

               &:first-child {
                    padding: 16px;
                    border-bottom: 1px solid $color-brand-2;
               }

               &:last-child,
               &__profile-info {
                    flex-direction: column;
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
          }

          &:not(&--active) {
               display: none;
          }
     }

     img {
          border-radius: 5px;
          width: 100%;
     }
}
</style>
