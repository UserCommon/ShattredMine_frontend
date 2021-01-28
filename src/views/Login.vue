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
        <div class="mt-2"><span>Забыли пароль? <router-link to="recovery">Тогда восстановите его!</router-link></span></div>
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
      //Убрать
      token_access: localStorage.getItem('token_access'),
      token_refresh: localStorage.getItem('token_refresh'),
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
    mounted(){
      this.autoLogout()
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
        .post(`http://localhost:8000/apiv1/token/`, { headers: { 'Content-type': 'application/json'}, 'username': this.username, 'password': this.password })
        .then(response => { this.setLogined(response.data.access, response.data.refresh), console.log(response.data), this.$router.push('/launcher/') })
        .catch(err => { console.error(err) })
    },
    setLogined(token_access, token_refresh) {
      // сохраняем токен
      localStorage.setItem('token_access', token_access);
      localStorage.setItem('token_refresh', token_refresh);
      this.axios
        .get('http://127.0.0.1:8000/apiv1/auth/users/me/',{
            headers: {
              'Authorization': 'Bearer ' + token_access,
              
            }
        })
        .then(response => (this.id = response.data.id, localStorage.setItem('id', this.id), console.log(this.token_access)))
        .catch(error => console.log(error))
    },

        autoLogout(){
            localStorage.removeItem('token_access');
            localStorage.removeItem('token_refresh');
            localStorage.removeItem('id'); //bug
        }

  }
};
</script>