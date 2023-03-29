<template>
  <nav>
    <div class="container"> </div>
  </nav>
  <router-view />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
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
  },
};

/*
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
}) */
</script>
