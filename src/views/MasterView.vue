<template>
  <html lang="en">
    <body>
    
      
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="index.html" class="logo"> </a> 
                            <img :src="logo" width=" " height="" alt=""> 
                            
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                    
                        <ul class="nav">
                            <li class="scroll-to-section"><router-link to="/">Home</router-link></li>
                            <li class="scroll-to-section"><router-link to="/products">Products</router-link></li>
                            <li class="scroll-to-section"><router-link to="/about">About me</router-link></li>
                            <li class="scroll-to-section"><router-link to="/contact">Contact us</router-link></li> 
                        </ul>
                       
                        <!-- ***** Menu End ***** -->
                    </nav> <router-view/>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <!-- ***** Main Banner Area Start ***** -->
    <div class="main-banner" id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <div class="thumb">
                            <div class="inner-content">
                                
                                <span>Vintage jewelry</span>
                                <div class="main-border-button">
                                    <router-link to="/products"><a href="#">Purchase Now!</a></router-link>
                                </div>
                            </div>
                            <img :src="leftB" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <div class="inner">
                                               
                                               
                                                <div class="main-border-button">
                                                    <router-link to="/products"><a href="#">Discover More</a></router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <img :src="rightB" width="" height="" alt="">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                        <div class="hover-content">
                                            <div class="inner">
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <router-link to="/products"><a href="#">Discover More</a></router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <img :src="rightB2" width="" height="" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                       
                                        <div class="hover-content">
                                            <div class="inner">
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <router-link to="/products"><a href="#">Discover More</a></router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <img :src="rightB3" width="" height="" alt="">
                                       
                                    </div>
                                </div>
                            </div>
                                
                            
                            <div class="col-lg-6">
                                <div class="right-first-image">
                                    <div class="thumb">
                                
                                        <div class="hover-content">
                                            <div class="inner">
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div class="main-border-button">
                                                    <router-link to="/products"><a href="#">Discover More</a></router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <img :src="rightB4" width="" height="" alt="">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ***** Main Banner Area End ***** -->

  
    <!-- ***** Women Area Starts ***** -->
    <section class="section" id="women">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h1>Our products</h1>
                        <span>Details to details is what makes our shop different from the other.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="women-item-carousel">
                        <div class="owl-women-item owl-carousel">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <img :src="w1" width="800" height="1000" alt=""> 
                                    </div>
                                   
                                </div>
                                <div class="down-content">
                                    <h2>New Collection</h2>
                                    <span>$75.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            
                                            <li><router-link :to="{ name: 'SingeProduct.vue' }"><i class="fa fa-eye"></i></router-link></li>
                                            <li><router-link :to="{ name: 'SingeProduct.vue' }"><i class="fa fa-star"></i></router-link></li>
                                            <li><router-link :to="{ name: 'SingeProduct.vue' }"><i class="fa fa-shopping-cart"></i></router-link></li>
                                        </ul>
                                    </div>
                                    <img :src="w2" width="" height="" alt="">
                                </div>
                                <div class="down-content">
                                    <h2>Fashion design</h2>
                                    <span>$45.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img :src="w3" width="" height="" alt="">
                                </div>
                                <div class="down-content">
                                    <h2>Spring Collection</h2>
                                    <span>$130.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img :src="w4" width="" height="" alt="">
                                </div>
                                <div class="down-content">
                                    <h2>Classic Spring</h2>
                                    <span>$120.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Women Area Ends ***** -->


    <!-- ***** Explore Area Starts ***** -->
    <section class="section" id="explore">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-content">
                        <h2>Explore Our Products</h2>
                        <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                        <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                        <div class="main-border-button">
                            <router-link to="/products"><a href="#">Discover More</a></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="leather">
                                    <h3>Vintage jewelry</h3>
                                    <span>Latest Collection</span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="first-image">
                                    <img :src="img1" width="" height="" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="second-image">
                                    <img :src="img2" width="" height="" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="types">
                                    <h4>Different Types</h4>
                                    <span>Over 304 Products</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Explore Area Ends ***** -->

    <!-- ***** Social Area Starts ***** -->
    <section class="section" id="social">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <h4>Social Media</h4>
                        <span>Details to details is what makes our Webshop different from the other.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row images">
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>Fashion</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta1" width="" height="" alt="">
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>New</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta2" width="" height="" alt="">
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>Brand</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta3" width="" height="" alt="">
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>Necklace</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta4" width="" height="" alt="">
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>Earrings</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta5" width="" height="" alt="">
                    </div>
                </div>
                <div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h5>Pearl</h5>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img :src="insta6" width="" height="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Social Area Ends ***** -->

    <!-- ***** Subscribe Area Starts ***** -->
    <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h6>By Subscribing To Our Newsletter You Can Get 30% Off</h6>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div class="row">
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-2">
                            <fieldset>
                              <button id="form-submit" type="submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
    </div>
    
    <!-- ***** Footer Start ***** -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            <img :src="whiteLogo" width="" height="" alt="">
                        </div>
                    
                    </div>
                </div>
                <div class="col-lg-3">
                    <h6>Categories</h6>
                    <ul>
                        <li><router-link to="/">Homepage</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><router-link to="/contact">Contact Us</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h6>Information</h6>
                    <ul>
                        <li><router-link to="/help">Help</router-link></li>
                        <li><router-link to="/faq">FAQ's</router-link></li>
                        <li><router-link to="/shipping">Shipping</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </body>
  </html>
</template>

<script>
import Header from './pages/HeaderMain.vue';
import Footer from './pages/FooterMain.vue';
import { RouterLink } from './pages/SingleProduct.vue';
import axios from 'axios';

export default {
  data() {
    return {
      components: {Header, Footer, RouterLink},
      logo: 'frontend/assets/images/logo.png',
      leftB:'frontend/assets/images/left-banner-image.jpg',
      rightB: 'frontend/assets/images/baner-right-image-01.jpg',
      rightB2: 'frontend/assets/images/baner-right-image-02.jpg',
      rightB3:'frontend/assets/images/baner-right-image-03.jpg',
      rightB4:'frontend/assets/images/baner-right-image-04.jpg',
      w1:'frontend/assets/images/women-01.jpg',
      w2:'frontend/assets/images/women-02.jpg',
      w3:'frontend/assets/images/women-03.jpg',
      w4:'frontend/assets/images/women-01.jpg',
      img1:'frontend/assets/images/explore-image-01.jpg',
      img2:'frontend/assets/images/explore-image-02.jpg',
      insta1:'frontend/assets/images/instagram-01.jpg',
      insta2:'frontend/assets/images/instagram-02.jpg',
      insta3:'frontend/assets/images/instagram-03.jpg',
      insta4:'frontend/assets/images/instagram-04.jpg',
      insta5:'frontend/assets/images/instagram-05.jpg',
      insta6:'frontend/assets/images/instagram-06.jpg',
      whiteLogo:'frontend/assets/images/white-logo.png'
    };
  },
  mounted(){
        axios.get('https://dog.ceo/api/breed/appenzeller/images/random').then(response => {
            if(response.data.status){
                this.dogUrl = response.data.message;
                this.loading=false;
            }else{
                console.log("Error getting image")
            }
        })
    },
  methods:{
        post(){
        
        }
    }
};
</script>

<style>

img {
  aspect-ratio: attr(width) / attr(height);
}

.w1 {
  width: 800px;
  height: 1000px;
}

.w2 {
  width: 640px;
  height: 360px;
}

.w3 {
  width: 640px;
  height: 360px;
}

.w4 {
  width: 640px;
  height: 360px;
}

</style>

