<template>
  <div
    class="h-44 mx-4 w-64 rounded-2xl carousel-item p-2 game-card flex flex-col items-center"
  >
    <div class="flex flex-col m-2 align-top items-center">
      <p class="text-sm font-bold">Premier League</p>
      <p class="text-gray-200 text-xs">Week 10</p>
    </div>

    <div class="flex justify-between w-full">
      <!-- first team -->
      <div class="1st-team flex flex-col items-center">
        <img
          class="h-10"
          src="https://w7.pngwing.com/pngs/232/630/png-transparent-anfield-liverpool-f-c-premier-league-fa-cup-liver-bird-premier-league-emblem-label-text.png"
          alt=""
        />
        <p class="text-white font-boldHeadline">Liverpool</p>
        <p class="text-gray-400 font-headline text-sm">Home</p>
      </div>

      <!-- the score/stats -->
      <div class="flex flex-col">
        <div class="flex w-10 justify-between">
          <p class="text-xl font-bold">0</p>
          <p class="text-xl font-bold">:</p>
          <p class="text-xl font-bold">3</p>
        </div>
        <div
          class="time-bg rounded-xl flex justify-center border border-red-400"
        >
          <p class="text-white text-sm">83'</p>
        </div>
      </div>

      <!-- second team -->
      <div class="2nd-team flex flex-col items-center">
        <img
          class="h-10"
          src="https://w7.pngwing.com/pngs/232/630/png-transparent-anfield-liverpool-f-c-premier-league-fa-cup-liver-bird-premier-league-emblem-label-text.png"
          alt=""
        />
        <p>Liverpool</p>
        <p>Home</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.time-bg {
  background-image: linear-gradient(
    to bottom right,
    rgba(1, 1, 1, 0.5),
    rgba(1, 1, 1, 0.8)
  );
}

.game-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.4),
      rgba(1, 1, 1, 0.6)
    ),
    url(https://wallpaperaccess.com/full/1401210.jpg);
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
}
</style>
