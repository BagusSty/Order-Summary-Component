<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-sm w-80 sm:w-full bg-white shadow-lg rounded-lg">
      <img
        class="object-cover w-full rounded-t-lg"
        :src="'images/illustration-hero.svg'"
        alt=""
      />
      <h1 class="text-center font-bold text-xl pt-3 text-darkBlue">
        Order Summary
      </h1>
      <p
        class="text-center font-normal sm:py-6 py-4 sm:px-12 px-8 text-desaturatedBlue"
      >
        You can no listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div class="px-4">
        <div class="flex p-2 items-center bg-veryPaleBlue rounded-lg">
          <img class="mr-4" :src="'images/icon-music.svg'" alt="" />
          <div class="flex-1">
            <p class="font-bold text-darkBlue">Annual Plan</p>
            <p class="text-desaturatedBlue">$59.99/year</p>
          </div>
          <a
            class="text-darkBlue hover:text-blue-500 hover:no-underline underline font-bold"
            href="#"
            >Change</a
          >
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button
          class="bg-brightBlue shadow-lg shadow-brightBlue hover:bg-blue-500 text-white font-bold p-3 sm:w-80 w-3/4 rounded-lg content-center"
          type="submit"
        >
          Proceed to Payment
        </button>
      </div>
      <div class="flex justify-center mt-4 mb-8">
        <a class="font-bold text-desaturatedBlue hover:text-darkBlue" href="#"
          >Cancel Order</a
        >
      </div>
    </div>
  </div>
</template>
