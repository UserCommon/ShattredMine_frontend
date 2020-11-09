<template>
  <div class="">
    <b-form @submit="login">
        <div class="form-group required">
            <label for="Login">Логин</label>
            <b-input v-model="username" type="text" id="username" placeholder="Логин..."></b-input>
        </div>
        <div class="form-group required">
            <label for="exampleInputPassword1">Пароль</label>
            <b-input v-model="password" type="password" id="password" placeholder="Пароль..."></b-input>
        </div>

        <b-button variant="primary" type="submit" :disabled="formValid">Подтвердить</b-button>

        <div class="mt-2"><span>Ещё не зарегистрированны? <router-link to="register">Тогда зарегестрируйтесь!</router-link></span></div>
    </b-form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      token: localStorage.getItem('token'),
      id: localStorage.getItem('id')
    };
  },
  validations: {
      username: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(6)
      },
  },
  computed:{
      formValid() {
        return this.$v.$invalid
      }
  },
  methods: {
    login(event) {
      event.preventDefault();
      // логика авторизации
      this.axios
        .post(`http://localhost:8000/apiv1/token/`, { headers: { 'Content-type': 'application/json' }, 'username': this.username, 'password': this.password })
        .then(response => { this.setLogined(response.data.access), console.log(response.data), this.$router.push('/launcher/') })
        .catch(err => { console.error(err) })
    },
    setLogined(token) {
      // сохраняем токен
      localStorage.setItem('token', token);
      this.axios
        .get('http://127.0.0.1:8000/apiv1/auth/users/me/',{
            headers: {
              'Authorization': 'Bearer ' + token
            }
        })
        .then(response => (this.id = response.data.id, localStorage.setItem('id', this.id), console.log(this.token)))
        .catch(error => console.log(error)),
      
      console.log(token);

    },

  }
};
</script>