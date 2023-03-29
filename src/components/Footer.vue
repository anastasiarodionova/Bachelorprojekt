<template>
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['links'])
  }
};
</script>

<style scoped>
/* 7. footer */
.footer-logo h3 {
  font-weight: 600;
  margin: 0;
  color: #444;
}

.social-icon a {
  background: #252525 none repeat scroll 0 0;
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  height: 35px;
  line-height: 36px;
  margin: 0 5px;
  text-align: center;
  width: 35px;
}
.social-icon a:hover {
  background: #999;
}
.footer-menu li {
  display: inline-block;
  padding: 0 10px;
  position: relative;
}
.footer-menu a {
  color: #444;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.footer-menu li::before {
  background: #666 none repeat scroll 0 0;
  bottom: 8px;
  content: "";
  height: 4px;
  left: -5px;
  margin-right: 6px;
  position: absolute;
  width: 4px;
}
.footer-menu li:first-child:before {
  display: none;
}
.copyright p {
  margin-bottom: 0;
}
.copyright.mt-20 a {
  color: #000;
}
.bg-soft {
  background: #f9f9f9 none repeat scroll 0 0;
}

.socile-2 a {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border-radius: 50%;
  color: #444;
  display: inline-block;
  font-size: 16px;
  height: inherit;
  line-height: inherit;
  margin: 0 5px;
  text-align: center;
  width: inherit;
}
.socile-2 a:hover {
  color: #999;
}
.post-thumbnail > img {
  width: 100%;
}
</style>
