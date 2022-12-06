import React from 'react'

function Footer() {
  return (
    <footer class="border-t border-slate-800 bg-slate-800">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
          
        "
      >
        <div
          class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left pl-5"
        >
          <a
            class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-yellow-400
              md:justify-start
            "
          >
            PaySay
          </a>
          <p class="mt-2 text-sm text-justify text-gray-500">
            Investing app for teenagers
          </p>
          <div class="flex mt-4 rounded-3xl">
            <input
              type="text"
              class="
                h-auto
                p-2
                text-sm
                border border-grey-light
                text-grey-dark
              "
              placeholder="Your email address"
            />
            <button class="h-auto p-3 text-xs text-white bg-yellow-400 rounded-sm">
              Subscribe
            </button>
          </div>
          
        </div>
        <div class="justify-between w-full mt-4 text-center lg:flex">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-2xl text-white">
              Platform
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-slate-100">Home</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">About Us</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Investor Interest</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Careers</a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-2xl text-white">
              Resources
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-slate-100">FAQs</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Blog</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Press</a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-2xl text-white">
              Legal
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-white hover:text-slate-100">Privacy</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Terms and Conditions</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Cookie Preferences</a>
              </li>
              <li>
                <a class="text-white hover:text-slate-100">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="flex justify-between -mt-12 px-5">
        <p class=" text-white  text-xl pb-3">
          Copyright © 2022 PaySay Inc. All rights reserved. | Made With ❤️ In India
        </p>
        <div class="flex justify-center mt-4 lg:mt-2">
            <a>
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3" href = '#' target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
      </div>
      
    </footer>

  )
}

export default Footer