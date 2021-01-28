<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light shadow" style="background-color:"
             v-bind:class="{ 'navbarOpen': show }">
            <router-link
                    tag="a"
                    to="/"
                    class="navbar-brand ml-5" href="#">
                <h2 style="color: #101a1d;">ShattredMine</h2>
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    @click.stop="toggleNavbar()">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
                <ul class="navbar-nav ml-auto">
                    <router-link
                            tag='li'
                            active-class="active"
                            to="/"
                            exact
                            class="nav-item active">
                        <a class="nav-link" href="#">Главная <span class="sr-only">(current)</span></a>
                    </router-link>
                    <router-link
                            tag='li'
                            to="/launcher"
                            class="nav-item active">

                        <a class="nav-link" href="#">Лаунчер</a>
                    </router-link>
                    <router-link
                            tag="li"
                            to="/news"
                            class="nav-item active">
                        <a class="nav-link" href="#">Новости</a>
                    </router-link>
                    <router-link
                            tag="li"
                            to="/profile"
                            class="nav-item active">
                        <a class="nav-link" href="#"> Профиль</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

    export default {
        props: {
            msg: String
        },
        data: () => ({

            show: true,

            links: [
                {title: 'Главная', url: '/',},
                {title: 'Сервера', url: '/servers',},
                {title: 'Новости', url: '/news',},
                {title: 'Профиль', url: '/account',},
            ],
        }),
        methods: {
            toggleNavbar() {
                this.show = !this.show;
            }
        },

    }

</script>