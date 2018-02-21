<template>
  <b-form @submit="sigin">
        <div>
            <div>
                <label :for="`login`"></label>
                <b-form-input id='login' v-model="login" placeholder="Login" type="text" required />

            </div>
        </div>
        <div>
            <div>
                <label :for="`password`"></label>
                    <b-form-input id='password' placeholder="Senha" v-model="password" type="password" required />
            </div>
        </div>
        <div class="mt-2">
            <b-alert :show='error' variant="danger">{{ errorMessage }}</b-alert>
        </div>
        <div class="mt-2">
            <b-button variant="primary" type='submit' >Entrar</b-button>
        </div>

  </b-form>
</template>
<script>
export default {
  data () {
    return {
        login: null,
        password: null,
        error: false,
        errorMessage: 'Login/senha inválidos'
    }
  },
  methods: {
    sigin() {
      if(this.login == 'admin' && this.password == 'admin'){
        sessionStorage.setItem('login_ibuy', 'LOGGED')
        this.$router.push({ name: 'Home' });
      }else {
        this.error = true;
      }
    }
  }
}
</script>

<style>

.centered {

}

</style>
