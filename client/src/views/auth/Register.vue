<template>
     <AuthContainer className="register"  title="Sign Up">
          <template #form-slot>
               <register-form />
          </template>

          <template #options-slot>
               <router-link to="/login" class="register__signup-link">Back to login</router-link>
          </template>
     </AuthContainer>
</template>

<script>
import { RegisterForm, AuthContainer } from '@/components';

export default {
     name: 'Register',
     components: { RegisterForm, AuthContainer },
};
</script>

<style lang="scss">
.register {
     @include authContainer;
}
</style>
