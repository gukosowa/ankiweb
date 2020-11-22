<template>
  <div class="text-black md:p-6 my-6 md:my-0">
    <p class="text-gray-500">
      <span class="text-6xl text-gray-400 float-left pr-3" style="float: left"
        >“</span
      >
      <slot />
    </p>
    <p class="font-bold text-sm text-metal mt-2 text-right">
      ⎯ <slot name="person" />
    </p>
  </div>
</template>
