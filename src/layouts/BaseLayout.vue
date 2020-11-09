<template>
<div class="content">
    <Navbar @click="isOpen = !isOpen"/>
    <Subbar/>
      <div class="container">
        <router-view/>
      </div>
    <Footer/>
</div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Footer from '@/components/app/Footer'
import Subbar from '@/components/app/Subbar'

    export default {
        name: 'base-layout',
        data: () => ({
            isOpen: false,
        }),
        components:{
            Navbar, Footer, Subbar
        }

    }
</script>