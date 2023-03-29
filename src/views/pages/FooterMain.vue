<template>
       <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="first-item">
                <div class="logo">
                  <img :src="whiteLogo" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <h4>Categories</h4>
              <ul>
                <li class="scroll-to-section"><router-link to="/">Homepage</router-link></li>
                <li class="scroll-to-section"><router-link to="/about">About Us</router-link></li>
                <li class="scroll-to-section"><router-link to="/contact">Contact Us</router-link></li>
              </ul><router-view/>
            </div>
            <div class="col-lg-3">
              <h4>Information</h4>
              <ul>
                <li class="scroll-to-section"><router-link to="/help">Help</router-link></li>
                <li class="scroll-to-section"><router-link to="/faq">FAQ's</router-link></li>
                <li class="scroll-to-section"><router-link to="/shipping">Shipping</router-link></li>
              </ul> <router-view/>
            </div>
          </div>
        </div>
      </footer>
</template>

<script>
export default {
      name: 'FooterMain',
      whiteLogo: 'frontend/assets/images/white-logo.png'
};
</script>

<style></style>
