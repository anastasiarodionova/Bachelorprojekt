<template>
     <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo"> 
                            <img :src="logo" alt="Logo"> </a> 
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                    
                        <ul class="nav">
                            <li class="scroll-to-section"><router-link to="/">Home</router-link></li>
                            <li class="scroll-to-section"><router-link to="/products">Products</router-link></li>
                            <li class="scroll-to-section"><router-link to="/about">About me</router-link></li>
                            <li class="scroll-to-section"><router-link to="/contact">Contact us</router-link></li> 
                        </ul>
                        <a class='menu-trigger'> 
                            <span>Menu</span> 
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav> <router-view/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default{
  data() {
    return {
    logo: 'frontend/assets/images/logo.png'
}}
}

</script>

<style>

</style>