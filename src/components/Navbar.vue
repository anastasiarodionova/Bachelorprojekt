<template>
    <footer app>
      <div class="basic-footer text-center gray-bg pt-30">
        <div class="container">
          <div class="footer-logo mb-30">
            <router-link to="/">
               <h3>Vueshop</h3>
            </router-link>
          </div>
          <div class="social-icon">
            <a href="#">
              <i class="ion-social-facebook"></i>
            </a>
            <a href="#">
              <i class="ion-social-googleplus"></i>
            </a>
            <a href="#">
              <i class="ion-social-instagram"></i>
            </a>
          </div>
          <div class="footer-menu mt-30">
            <nav>
              <ul>
                <li v-for="link in links" v-bind:key="link.name">
                  <router-link :to="link.location">{{link.name}}</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="copyright mt-20">
            <p>Made by Daan Wijns</p>
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