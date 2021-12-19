<template>
  <div class="p-2 flex flex-col">
    <!-- <top-bar /> -->
    <!-- FIRST CAROUSEL -->
    <div class="w-full h-20 carousel flex items-center pl-5 overflow-scroll">
      <div
        class="carousel-item rounded-3xl cursor-pointer h-7 p-2 px-3 bg-pink flex text-sm font-bold items-center mx-3"
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/premier-league-1.svg"
          />Premier League
        </p>
      </div>
      <div
        class="carousel-item rounded-3xl h-7 p-2 px-3 bg-white text-gray-400 dark:bg-fourth dark:text-white text-sm font-bold flex items-center mx-3"
      >
        <p class="flex items-center">
          <img class="h-8 mr-2" src="../assets/images/la-liga-logo.svg" />La
          Liga
        </p>
      </div>
      <div
        class="carousel-item rounded-3xl h-7 p-2 bg-white text-gray-400 dark:bg-fourth dark:text-white text-sm font-bold flex items-center mx-3"
      >
        <p class="flex items-center">French League</p>
      </div>
      <div
        class="carousel-item rounded-3xl h-7 cursor-pointer p-2 bg-white text-gray-400 dark:bg-fourth dark:text-white text-sm font-bold flex items-center mx-3"
      >
        <p class="flex items-center">
          <img
            class="h-8 mr-2"
            src="../assets/images/uefa-champions-league-1.svg"
            alt=""
          />Champions League
        </p>
      </div>
    </div>
    <!-- FIRST CAROUSEL END -->

    <h2
      @click="$emit('darkMode')"
      class="text-black dark:text-white font-headline text-md"
    >
      Live Matches
    </h2>
    <!-- SECOND CAROUSEL -->
    <div class="h-60 p-2 w-full carousel flex items-center overflow-scroll">
      <game-card />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/HomePage-Components/GameCard.vue';
// import TopBar from '../components/TopBar.vue';
export default {
  components: { GameCard },
};
</script>

<style scoped>
/* .game-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.2),
      rgba(1, 1, 1, 0.4)
    ),
    url(https://wallpaperaccess.com/full/1401210.jpg);
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
} */
</style>
