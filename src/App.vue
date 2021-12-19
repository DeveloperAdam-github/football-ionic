<template>
  <div
    class="h-screen w-screen bg-white dark:bg-primary"
    :class="darkMode ? 'dark' : 'light'"
  >
    <top-bar @darkMode="toggleDarkMode" class="bg-gray-200 dark:bg-primary" />
    <router-view
      @darkMode="toggleDarkMode"
      class="h-82vh bg-gray-200 dark:bg-primary"
    />
    <navbar @darkMode="toggleDarkMode" />
  </div>
</template>

<script>
// import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import TopBar from './components/TopBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    TopBar, // IonApp,
    // IonRouterOutlet,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      console.log('clicked');
      this.darkMode = !this.darkMode;
    },
  },
});
</script>
