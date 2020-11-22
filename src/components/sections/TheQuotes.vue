<template>
  <section class="bg-white">
    <div class="container my-12 grid grid-cols-1 md:grid-cols-2">
      <quote>
        <template #person>
          <a href="http://augmentingcognition.com/ltm.html">
            Michael A. Nielsen, "Augmenting Long-term Memory"
          </a>
        </template>
        <blockquote cite="http://augmentingcognition.com/ltm.html">
          The single biggest change that Anki brings about is that it means
          memory is no longer a haphazard event, to be left to chance. Rather,
          it guarantees I will remember something, with minimal effort. That is,
          Anki makes memory a choice.
        </blockquote>
      </quote>

      <quote>
        <template #person>
          <a href="http://foolsworkshop.com/reviews/index.html%3Fp=124.html">
            K. M. Lawson, "Anki All the Way"
          </a>
        </template>
        <blockquote
          cite="http://foolsworkshop.com/reviews/index.html%3Fp=124.html"
        >
          No other application [...] comes remotely close to Anki in terms of
          the number and power of features, flexibility in study, or
          implementation of spaced repetition.
        </blockquote>
      </quote>

      <quote class="md:col-span-2">
        <template #person> Keldin, via email </template>
        <blockquote>
          I've been using Anki for two years now, and I just wanted to thank you
          personally for contributing to the single most obvious improvement in
          my quality of life. I'm not being hyperbolic: consistent use of Anki
          has opened more doors for me intellectually than I could have imagined
          two years ago. And being a poor student, I'll be forever grateful that
          you've provided this software open-source and free of charge.
        </blockquote>
      </quote>
    </div>
  </section>
</template>

<script>
import Quote from '@app/components/sections/Quote.vue'
export default {
  components: {
    Quote,
  },
}
</script>
