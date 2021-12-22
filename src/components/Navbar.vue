<template>
  <div
    class="bottom-0 h-10vh font-headline w-full flex items-center p-2 bg-white text-gray-400 dark:bg-secondary dark:text-white text-xs justify-around lg:text-base"
  >
    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'HomePage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <ion-icon :icon="home" class="text-2xl"></ion-icon>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'SchedulePage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <ion-icon :icon="calendar" class="text-2xl"></ion-icon>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'StatsPage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <ion-icon :icon="statsChart" class="text-2xl"></ion-icon>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>

    <!-- <ion-icon name="stats-chart-outline"></ion-icon> -->

    <div class="">
      <router-link
        class="flex flex-col items-center w-full m-2 p-1"
        :to="{ name: 'ProfilePage' }"
      >
        <span class="text-gray-400 dark:text-white">
          <ion-icon :icon="home" class="text-2xl"></ion-icon>
        </span>
        <span class="h-6 text-3xl leading-3 opacity-0">&#183;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { calendar, home, statsChart } from 'ionicons/icons';

export default {
  name: 'navbar-component',
  components: {
    IonIcon,
  },
  setup() {
    return {
      calendar,
      home,
      statsChart,
    };
  },
};
</script>

<style scoped>
/* .router-link {
  width: auto;
  padding: 2px;
  margin: 2px;
  display: flex;
  align-items: center;
} */
.router-link-active {
  color: #793ef9;
  font-weight: bold;

  transition: all 0.3s linear;
}

.router-link-active span {
  opacity: 100;
  color: #793ef9;
}
</style>
