<template>
    <div class="container" style="margin-top: 125px; margin-bottom: 125px; color: #2B87D3;">
        <div class="d-flex justify-content-center mt-5">
            <div class="left mr-5 text-center text-wrap wow fadeInLeft" onscroll="scroll()">
                <h1 class="title">Что такое <strong>ShattredMine?</strong></h1>
                <p class="sub-title text-wrap" style="width: 26em;"> ShattredMine - Это комплекс серверов по майнкрафту
                    где вы можете приятно провести время и возможно найти себе новых друзей. </p>
            </div>
            <div class="right ml-5 wow fadeInRight" onscroll="scroll()">
                <img src="{% static 'img/steveblue.png' %}" class="steve" alt="steve" style="">
            </div>
        </div>
        <h1 class="text-center mt-4 wow fadeInDown">Достоинства нашего сервера.</h1>
        <div class="d-flex justify-content-center mt-5">
            <div class="lef wow fadeInLeft" style="width: 20em;">
                <h3 class="text-center">Ламповое коммьюнити.</h3>
                <h5 class="text-center text-wrap">Люди стараються относится ко всем уважительно. Особенно к
                    новичками</h5>
                <p class="text-center"><img src="https://img.icons8.com/ios-filled/50/000000/campfire.png"/></p>
            </div>
            <div class="center ml-3 mr-3 wow fadeIn"
                 style="width: 20em; border-left:2px solid #83BBE9; border-right:2px solid #83BBE9; padding-left: 15px; padding-right: 15px;">
                <h3 class="text-center">Неравнодушная администрация.</h3>
                <h5 class="text-center text-wrap">Мы готовы помочь вам в большинстве случаев.</h5>
                <p class="text-center"><img src="https://img.icons8.com/ios-filled/50/000000/like.png"/></p>
            </div>
            <div class="right wow fadeInRight" style="width: 20em;">
                <h3 class="text-center">Постоянный рост.</h3>
                <h5 class="text-center text-wrap">Мы развиваемся, учимся на своих ошибках и готовы прислушаться к
                    критике.</h5>
                <p class="text-center"><img src="https://img.icons8.com/pastel-glyph/64/000000/bullish.png"/></p>
            </div>
        </div>
        <h1 class="text-center mt-5 wow fadeInUp">Ты уже с нами? </h1>
        <h2 class="text-center wow fadeInUp"><a href="{% url 'accounts_main' %}">Тогда регестрируйся!</a></h2>
    </div>
</template>

