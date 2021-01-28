<template>
    <div class="container">
        <div class="success" v-if="token_refresh">
            <h1 class='text-center wow fadeIn'>Ваш профиль</h1>
            <div class="d-flex justify-content-start">
                <div class="profile-left mr-5 wow fadeInLeft">
                <h2 class="text-left">{{ profile.username }}</h2>
                <div class="text-center">
                    <img class="" :src=profile.skin_thumb_url alt="Skin_Thumb">
                </div>

                </div>
                <div class="profile-right wow fadeInRight">
                        <h3 class="text-left"> Вы зарегестрировались: {{ profile.date_joined }}</h3>
                        <h4 class="text-left"> Доступ к серверу: <span v-if='profile.subscription'>Есть.</span> <span v-else>Нету.</span></h4>
                        <h4 class="text-left"> Статус репортёра: <span v-if='profile.is_media'>Есть.</span> <span v-else>Нету.</span></h4>
                        <p>
                        <label for="">Скин: 
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
                        </label>
                        </p>
                        
                        <button type="submit" class="btn btn-primary" v-on:click="submitFile()">Сменить скин</button>
                        <p class="mt-5"> <router-link
                                            to="logout/"> Выйти!</router-link></p>
                </div>
            </div>
        </div>
        <div class="fail" v-else>
            <h1 class="text-center">Кажется вы не зашли или не зарегестрировались...</h1>

            <h2 class="text-center"> <router-link
                to="/login">Войдите!</router-link> </h2>
            <h2 class="text-center">Или <router-link
                to="/register">зарегестрируйтесь!</router-link> </h2>

        </div>
    </div>
</template>

<script>
import {userMixin} from '../mixins/userMixin'

export default {
    mixins: [userMixin],

    data(){
        return{
            token_access: localStorage.getItem('token_access'),
            token_refresh: localStorage.getItem('token_refresh'),
            id: localStorage.getItem('id'),
            profile: "",
            skin: ""
            

        }
    },

    methods: {

        handleFileUpload(){
            this.skin = this.$refs.file.files[0]; 
        },

        Logout(){
            localStorage.removeItem('token_access');
            localStorage.removeItem('token_refresh');
            localStorage.removeItem('id'); //bug
        }
    }

}
</script>