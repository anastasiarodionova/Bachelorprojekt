<template>
  <nav>
    <img alt="logo" src="./assets/logo.png">
    <div class="container">
    <router-link to="/home">Home   </router-link> |
    <router-link to="/products">Products   </router-link>
    <router-link to="/about">About Me      </router-link>
    <router-link to="/contact">Contact us  </router-link></div>
  </nav>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import { computed} from "vue";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "./firebase/firebase.js";

export default {
  name: "App",
  setup() {
    const store = useStore();
    store.dispatch("POPULATE_FROM_CACHE");
    const translations = computed(() => store.getters.translations);
    // this will add a new item to you cache
    // store.commit("addTranslation", {
    //   id: 78965,
    //   name: "another",
    // });
    return { translations };
  }
}

/*
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
}) */



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dcacfc;
}

logo{
  text-align: left;
}

.container {
  text-align: right;
  color: #dcacfc;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #dcacfc;
}
</style>
