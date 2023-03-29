<template>
  <div>
    <v-app-bar app flat>
      <v-row no-gutters align="center" justify="space-between">
        <v-col >
          <autocomplete
            :search="search"
            :placeholder="searchActive? 'Search for an item' : ''"
            aria-label="Search for an item"
            :get-result-value="getResultValue"
            @submit="handleSubmit"
            @click="searchActive = !searchActive"
          >
            <template v-slot:result="{ result, props }">
              <li v-bind="props" class="autocomplete-result">
                <div>{{ result.name }}</div>
              </li>
            </template>
          </autocomplete>
        </v-col>

        <v-col lg="6" md="4" sm="9" xl="8" cols="10">
          <v-toolbar-title>
            <router-link to="/">
              <h3 class="text-center">Vueshop</h3>
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-col lg="3" md="4" sm="1" xl="2" cols="1">
          <nav v-if="$vuetify.breakpoint.mdAndUp">
            <ul class="basic-menu">
              <li v-for="link in links" v-bind:key="link.name">
                <router-link :to="link.location">{{link.name}}</router-link>
              </li>
              <li>
                <router-link to="/cart">
                  <v-badge left overlap color="#444">
                    <template v-slot:badge>
                      <span v-if="cart.length > 0">{{ cart.length }}</span>
                    </template>
                    <i style="font-size: 20px;" class="ion-ios-cart icons"></i>
                  </v-badge>
                </router-link>
              </li>
            </ul>
          </nav>
          <nav v-else>
            <div
              class="hamburger hamburger--spin"
              @click="drawer = !drawer"
              :class="drawer ? 'is-active' : ''"
            >
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </nav>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndDown" app v-model="drawer" bottom>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <ul class="basic-menu-mobile clearfix">
            <li v-for="link in links" v-bind:key="link.name">
              <router-link :to="link.location">{{link.name}}</router-link>
            </li>
            <li>
              <router-link to="/cart">
                <i style="font-size: 30px;" class="ion-ios-cart icons"></i>
              </router-link>
            </li>
          </ul>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    group: null,
    hamburger: false,
    searchActive: false
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    ...mapState(['links', 'cart', 'items'])
  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.items.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
    },
    handleSubmit(result) {
      if (result && this.$route.params.productId !== result.id) {
        this.$router.push({
          name: 'productDetail',
          params: { productId: result.id }
        });
        this.searchActive = false;
      }
    },
    getResultValue(result) {
      return ' ';
      // return result.name;
    }
  }
};
</script>

<style lang="scss">
.autocomplete-input {
  background-color: inherit;
  border: none;
}

.v-badge__badge {
  padding: 0px !important;
  border-radius: 11px !important;
  height: 15px !important;
  font-size: 10px !important;
  min-width: 15px !important;
}
.hamburger {
  padding: 0px !important;
}

$hamburger-layer-width: 30px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 6px;
$hamburger-layer-color: #444;
$hamburger-hover-opacity: 0.4;

@import "./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
</style>
