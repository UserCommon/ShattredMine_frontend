<template>
    <div class="container">
        <div class="success" v-if="token">
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
                        <h4 class="text-left"> Доступ к серверу: {{profile.subscription}}</h4>
                        <h4 class="text-left"> Статус репортёра: {{ profile.is_media }}</h4>
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
export default {
    data(){
        return{
            token: localStorage.getItem('token'),
            id: localStorage.getItem('id'),
            profile: "",
            skin: ""
            

        }
    },
    mounted(){
        this.getUser()
    },
    methods: {
        reloadPage(){
            window.location.reload()
        },
        submitFile(){
            let formData = new FormData();
            formData.append('skin', this.skin);
            this.axios.put('http://127.0.0.1:8000/apiv1/profiles/' + this.id + '/update/',
                formData,
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => (this.profile.skin = response.data))
                .catch(error => console.log(error));
        },
        handleFileUpload(){
            this.skin = this.$refs.file.files[0]; 
        },

        getUser(){
            this.axios
                .get('http://127.0.0.1:8000/apiv1/profiles/' + this.id + '/', {
                    headers: {
                        'Authorization': 'Bearer ' + this.token
                    }
                })
                .then(response => ((this.profile = response.data), console.log(response.data)))
                .catch(error => console.log(error))
        }

    }

}
</script>