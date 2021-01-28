<template>
  <div class="">
    <b-form @submit="register">
      <div class="form-group required">
        <label class="control-label" for="username">Логин:</label>
        <b-input v-model="username" type="text" id="username" placeholder="Логин..."></b-input>
        <p><small class="text-muted">Минимальная длина логина 5 символов</small></p>
      </div>
      <div class="form-group required">
        <label class="control-label" for="email">Электронная почта:</label>
        <b-input v-model="email" type="text" id="email" placeholder="example@mail.su"></b-input>
        <p><small class="text-muted">Минимальная длинна почты 6 символов</small></p>
      </div>
      <div class="form-group required">
        <label class="control-label" for="password">Пароль:</label>
        <b-input v-model="password" type="password" id="password" placeholder="Пароль..."></b-input>
        <p><small class="text-muted">Минимальная длина пароля 6 символов</small></p>
      </div>
      <div class="form-group required">
        <label class="control-label" for="repeatPassword">Повторите пароль:</label>
        <b-input v-model="repeatPassword" type="password" id="repeatPassword" placeholder="Повторите пароль..."></b-input>
      </div>
      <p class="text-danger" v-if="!$v.password.minLength">Длина пароля меньше 6 символов</p>
      <p class="text-danger" v-if="$v.password.required && $v.repeatPassword.required && !$v.repeatPassword.sameAs">Введённые пароли не совпадают</p>
      <b-button variant="primary" type="submit" :disabled="formValid">Регистрация</b-button>
      <p class="mt-2"><small class="text-muted">Все поля отмеченные <span class="text-danger">*</span> обязательны для заполнения.</small></p>
      <p class="mt-3">Уже есть аккаунт? <router-link to="/login">Вход</router-link>
      </p>
    </b-form>
  </div>
</template>
<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      repeatPassword: "",
      email: "",
      phone: "",
      userPhone: "",
      customerOrExecutor: "",
      customerOrExecutorOptions: [
        { text: 'Выберите...', value: '', disabled: true, selected: true },
        { text: 'Заказчик', value: 'customer' },
        { text: 'Исполнитель', value: 'executor' }
      ],
      phoneNumberMask: {
        mask: '+{7}(000)000-00-00',
        lazy: true
      }
    }
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
    repeatPassword: {
      required,
      sameAs: sameAs('password')
    },
    email: {
      required
    },
  },
  computed: {
    formValid() {
      return this.$v.$invalid
    }
  },
  methods: {
    register(event) {
      event.preventDefault();
      // логика регистрации
      this.axios
        .post(`http://localhost:8000/apiv1/auth/users/`, { headers: {'Content-type': 'application/json'}, 'username': this.username, 'password': this.password, 'email': this.email })
        .then(response => { console.log(response); this.$router.push('/verify') })
        .catch(err => { console.error(err);
          this.err = err })
    },
    onAccept(e) {
      const maskRef = e.detail
      this.phone = maskRef.value
    },
    onComplete(e) {
      const maskRef = e.detail
      this.userPhone = maskRef.unmaskedValue
    },
  }
}
</script>

<style>
.form-group.required .control-label:after {
  content:" *";
  color:red;
}
</style>

