<template>
    <html lang="en">
    <div id="contact">  </div>
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
    <p> &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
    </p>>
    <!-- ***** Contact Area Starts ***** -->
    <div class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.252028207432!2d13.523389915059619!3d52.456462948689484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a848bc4c146fdd%3A0xcdaef78fbd909c09!2sHochschule%20f%C3%BCr%20Technik%20und%20Wirtschaft%20Berlin%20(HTW%20Berlin)%20-%20Campus%20Wilhelminenhof!5e0!3m2!1sru!2sde!4v1678489534400!5m2!1sru!2sde" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h2>Say Hello. Don't Be Shy!</h2>
                        <span>Details to details is what makes Shop different from the other.</span>
                    </div>
                    <form id="contact" action="" method="post">
                        <div class="row">
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your name" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="Your email" required="">
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                           
                              <button id="form-submit" type="submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
    <!-- ***** Contact Area Ends ***** -->

    <!-- ***** Subscribe Area Starts ***** -->
    <div class="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
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
                              <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>Store Location:<br><span></span></li>
                                <li>Phone:<br><span></span></li>
                                <li>Office Location:<br><span></span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Work Hours:<br><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br><span></span></li>
                                <li>Social Media:<br><span><a href="#">Facebook</a>, <a href="#">Instagram</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </html>
        <!-- ***** Footer Start ***** -->
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="first-item">
                        <div class="logo">
                            <img :src="whiteLogo" alt="">
                        </div>
                    
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>Categories</h4>
                    <ul>
                        <li><router-link to="/">Homepage</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><router-link to="/contact">Contact Us</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Information</h4>
                    <ul>
                        <li><router-link to="/help">Help</router-link></li>
                        <li><router-link to="/faq">FAQ's</router-link></li>
                        <li><router-link to="/shipping">Shipping</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

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