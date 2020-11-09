<template>
    <div class="container wow fadeIn">
        <h1 class="text-center">Начни играть!</h1>
        <h2 class="text-center">Но перед этим, прочти правила <router-link
                                                                to="/rules">здесь</router-link> </h2>

        <h1 class="text-center"> <router-link
                                    to="/launcher/download">А тут скачай</router-link> </h1>
        <hr />
        <h1 class="text-center">Серверы:</h1>
        <b-card
            border-variant="primary"
            header="GregTech(p)"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
            class="w-50 mx-auto"
            style=""
        >
            <b-card-text>Сервер с GregTech, Industrial Craft и индустриальными модами.</b-card-text>
        </b-card>

    </div>
</template>

<style scoped>
    a{
        color: #87D1EE !important;

    }
    hr{
        width:100%; height:3px; background: #5ca4c0
    }
</style>