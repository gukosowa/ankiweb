<template>
  <div class="relative grid grid-cols-1">
    <the-header />
    <the-hero />
    <section class="bg-white md:px-16">
      <div class="container my-10 md:my-20 md:my-12">
        <div class="px-1 md:px-0">
          <h2 class="h1 text-3xl">About Anki</h2>
          <p class="hsub mt-3 text-xl">
            Anki is a program which makes remembering things easy. Because it's
            a lot more efficient than traditional study methods, you can either
            greatly decrease your time spent studying, or greatly increase the
            amount you learn. Anyone who needs to remember things in their daily
            life can benefit from Anki. Since it is content-agnostic and
            supports images, audio, videos and scientific markup (via LaTeX),
            the possibilities are endless.
          </p>
        </div>
      </div>
    </section>
    <the-features />
    <the-quotes />
    <the-footer />
  </div>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from '@app/components/TheHeader'
import TheFooter from '@app/components/TheFooter'
import TheHero from '@app/components/sections/TheHero'
import TheFeatures from '@app/components/sections/TheFeatures'
import TheQuotes from '@app/components/sections/TheQuotes'

export default {
  components: {
    TheHero,
    TheHeader,
    TheFooter,
    TheFeatures,
    TheQuotes,
  },

  data() {
    return {
      message: 'Learn Vue',
    }
  },
}
</script>
