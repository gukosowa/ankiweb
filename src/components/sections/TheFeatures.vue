<template>
  <section class="bg-white">
    <div class="container grid md:grid-cols-3 grid-cols-1 gap-4 flex">
      <feature title="Remember Anything">
        <template #image>
          <img
            class="w-20"
            src="@app/assets/images/rememberanything.svg"
            alt="Remember Anything icon"
          />
        </template>
        <template #default>
          From images to scientific markup, Anki has got you covered.
        </template>
      </feature>
      <feature title="Remember Anywhere">
        <template #image>
          <img
            class="w-20"
            src="@app/assets/images/remembereverywhere.svg"
            alt="Remember Anywhere icon"
          />
        </template>
        <template #default>
          Review on Windows, Mac, Linux, iOS, Android, and any device with a web
          browser.
        </template>
      </feature>
      <feature title="Remember Efficiently">
        <template #image>
          <img
            class="w-20"
            src="@app/assets/images/rememberefficiently.svg"
            alt="Remember Efficiently icon"
          />
        </template>
        <template #default>
          Only practice the material that you're about to forget.
        </template>
      </feature>
    </div>
  </section>
</template>

<script>
import Feature from '@app/components/sections/Feature.vue'
export default {
  components: {
    Feature,
  },
}
</script>
