import { createRouter, createWebHistory } from "vue-router";
import Home from "../../views/MasterView.vue";
import About from "../../views/AboutView.vue";
import Products from "../../views/ProductsView.vue";
import Contact from "../../views/ContactView.vue";
import Help from "../../views/pages/HelpPage.vue";
import FAQ from "../../views/pages/FAQPage.vue";
import Shipping from "../../views/pages/ShippingPage.vue";
import Header from "../../views/pages/HeaderMain.vue";
import Footer from "../../views/pages/FooterMain.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/products", name: "products", component: Products },
  { path: "/about", name: "about", component: About },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/help", name: "help", component: Help },
  { path: "/faq", name: "faq", component: FAQ },
  { path: "/shipping", name: "shipping", component: Shipping },
  { path: "/header", name: "header", component: Header },
  { path: "/footer", name: "footer", component: Footer }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
