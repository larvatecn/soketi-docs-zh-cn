---
layout: page
title: Soketi - Soketi is your simple, fast, and resilient open-source WebSockets server.
---

<script lang="ts" setup>
import {withBase} from 'vitepress'

</script>

<section class="text-center flex flex-col flex-1 px-4 md:px-12">
  <div class="flex-1 flex flex-col items-center justify-center space-y-8">
    <div class="flex justify-center">
      <h1 class="tagline md:py-28 text-center text-3xl md:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400">
        Soketi
      </h1>
    </div>
    <p class="py-4 md:py-6 md:text-2xl dark:text-gray-500">
      Soketi 是您简单、快速且有弹性的开源 WebSockets 服务器。📣
    </p>
    <div
      class="space-y-2 md:space-y-0 xl:flex justify-center"
    >
      <button
        class="hidden xl:block mr-4 items-center space-around text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded lg:text-lg"
        data-clipboard-text="npm install -g @soketi/pws"
        @click="copy" 
        >
        <code class="text-gray-700 bg-transparent flex items-center cursor-pointer">
          $ npm install -g @soketi/pws
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </code>
      </button>
      <a :href="withBase('docs/index')"
        class="inline-flex items-center space-around text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        <span>立即开始</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
  
</section>
