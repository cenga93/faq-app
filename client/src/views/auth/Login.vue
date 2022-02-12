<template>
     <section class="login">
          <div class="login__form">
               <h3 class="login__title">Sign In</h3>
               <login-form />

               <divider label="or" />

               <div class="login__options">
                    <router-link to="/reset-password" class="login__signup-link">Forgot Password?</router-link>
                    <router-link to="/register" class="login__signup-link">Sign Up!</router-link>
               </div>
          </div>
     </section>
</template>

<script>
import { Divider, LoginForm } from '@/components';

export default {
     name: 'Login',
     components: { Divider, LoginForm },
};
</script>

<style lang="scss" scoped>
.login {
     @include authContainer;
}
</style>
