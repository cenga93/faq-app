<template>
     <form action="" class="form form--login">
          <div class="form__input">
               <input class="form__input-field" type="text" placeholder="Username" name="username" />
          </div>
          <div class="form__input">
               <input class="form__input-field" type="password" placeholder="Password" name="password" />
          </div>

          <div class="form__actions">
               <button class="form__submit">Sign In</button>
          </div>
     </form>
</template>

<script>
export default {
     name: 'LoginForm',
};
</script>

<style lang="scss">
@include form;
</style>
