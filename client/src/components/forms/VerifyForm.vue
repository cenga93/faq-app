<template>
     <form action="" class="form form--login">
          <div class="form__input">
               <input class="form__input-field" maxlength="1" type="text" name="username" />
               <input class="form__input-field" maxlength="1" type="text" name="username" />
               <input class="form__input-field" maxlength="1" type="text" name="username" />
               <input class="form__input-field" maxlength="1" type="text" name="username" />
          </div>

          <div class="form__actions">
               <button class="form__submit">Verify your email</button>
          </div>
     </form>
</template>

<script>
export default {
     name: 'VerifyForm',
};
</script>

<style lang="scss" scoped>
.form {
     &__input {
          justify-content: space-evenly;
     }

     &__input-field {
          max-width: 30px;
          text-align: center;
          font-size: 16px;
     }
}
</style>
