<template>
     <AuthContainer className="login" title="Sign In">
          <template #form-slot>
               <login-form />
          </template>

          <template #options-slot>
               <router-link to="/reset-password" class="login__signup-link">Forgot Password?</router-link>
               <router-link to="/register" class="login__signup-link">Sign Up!</router-link>
          </template>
     </AuthContainer>
</template>

<script>
import { LoginForm, AuthContainer } from '@/components';

export default {
     name: 'Login',
     components: { LoginForm, AuthContainer },
};
</script>

<style lang="scss">
.login {
     @include authContainer;
}
</style>
