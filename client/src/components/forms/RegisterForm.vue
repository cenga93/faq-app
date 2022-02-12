<template>
     <form action="" class="form form--register">
          <div class="form__box">
               <div class="form__input">
                    <input class="form__input-field" type="text" placeholder="Firstname" name="firstname" />
               </div>

               <div class="form__input">
                    <input class="form__input-field" type="text" placeholder="Lastname" name="lastname" />
               </div>
          </div>

          <div class="form__input">
               <input class="form__input-field" type="email" placeholder="Email" name="email" />
          </div>

          <div class="form__input">
               <input class="form__input-field" type="password" placeholder="Password" name="password" />
          </div>

          <div class="form__actions">
               <button class="form__submit">Sign up</button>
          </div>
     </form>
</template>

<script>
export default {
     name: 'RegisterForm',
};
</script>

<style lang="scss" scoped>
.form__box {
     @include from(425px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 16px;
     }
}
</style>
