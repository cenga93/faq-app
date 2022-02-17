<template>
     <AuthContainer className="reset-password">
          <template #form-slot>
               <reset-password-form />
          </template>

          <template #options-slot>
               <router-link to="/login" class="reset-password__signup-link">Back to login</router-link>
          </template>
     </AuthContainer>
</template>

<script>
import { ResetPasswordForm, AuthContainer } from '@/components';

export default {
     name: 'ResetPassword',
     components: { ResetPasswordForm, AuthContainer },
};
</script>

<style lang="scss">
.reset-password {
     @include authContainer;
}
</style>
