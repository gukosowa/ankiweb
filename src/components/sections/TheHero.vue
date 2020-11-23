<template>
  <section class="bg-white text-center text-white" @mousemove="getMousePos">
    <div class="gradient relative py-20 md:pt-16 md:pb-48 z-2">
      <canvas
        id="canvas"
        class="pointer-events-none absolute -mt-16 w-full h-full z-0"
      />
      <h1 class="container font-extrabold text-4xl pt-8 md:pt-32">
        {{ quote }}
      </h1>
      <p class="pt-12 text-2xl font-light text-gray-300">
        Powerful, intelligent flash cards.<br />Remembering things just became
        much easier.
      </p>
      <nav class="mt-12 mx-16 md:mx-0 flex flex-col md:flex-row justify-center">
        <a
          href="/"
          class="mx-3 py-2 pl-4 pr-3 font-bold rounded-lg shadow-md text-white bg-blue-600 hover:bg-primary"
        >
          Download now
          <svg
            class="inline animate-bounce w-6 mt-1 pl-1 h-6 text-amber-900"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
        <a href="/" class="mt-4 md:mt-0 mx-3 py-2 px-4"> Documentation </a>
      </nav>
    </div>
    <div class="-mt-10 md:-mt-28 md:-mb-12">
      <img
        id="thehero"
        class="mx-auto will-change"
        style="min-height: 220px"
        alt="product photo"
        src="@app/assets/images/review2.png"
      />
    </div>
  </section>
</template>

<script>
import quotes from './quotes'
import anime from 'animejs/lib/anime.es.js'
import { initAnime } from '@app/plugins/helpers'
import FilledLogo from '@app/assets/images/logofilled.svg'

export default {
  data() {
    return {
      quotes,
      ctx: null,
      stars: [],
      canvasImage: null,
      mouse: { x: 0, y: 0 },
      time: 0,
      outOfScreen: false,
    }
  },

  computed: {
    quote() {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)]
    },
  },

  mounted() {
    this.initAnime()
    this.initCanvas()

    window.addEventListener('scroll', (e) => {
      this.onscroll(e)
    })
  },

  methods: {
    initAnime() {
      const nodes = [...document.querySelectorAll('#thehero')]
      initAnime(nodes, 0.3, (a, tl, el) => {
        a.set(el, {
          translateY: '-10%',
          perspective: '400px',
          scale: 0.9,
          rotateX: '10deg',
        })
        tl.add(
          {
            targets: el,
            translateY: '3%',
            rotateX: '0deg',
            scale: 1,
            duration: 200,
            easing: 'easeInOutCirc',
          },
          0,
        )
      })
    },

    initCanvas() {
      var c = document.getElementById('canvas')
      this.ctx = c.getContext('2d')
      const setCanvasExtents = () => {
        c.width = c.offsetWidth
        c.height = c.offsetHeight
      }
      setCanvasExtents()

      window.onresize = () => {
        setCanvasExtents()
      }

      setInterval(() => {
        if (this.outOfScreen) return
        window.requestAnimationFrame(() => {
          this.time += 0.3
          this.updateCanvas()
        })
      }, 1000 / 60)

      this.canvasLoadImage()
    },

    canvasLoadImage() {
      var starCount = 100
      var img = new Image()
      img.onload = (e) => {
        this.canvasImage = e.path[0]
        this.stars.push([])
        for (var i = 0; i < starCount; i++) {
          this.stars.push({
            x: anime.random(-100, this.ctx.canvas.width + 100),
            y: anime.random(-100, this.ctx.canvas.height + 100),
            v: anime.random(1, 10),
            r: anime.random(0, 359),
          })
        }
      }
      img.src = FilledLogo
    },

    onscroll() {
      var rect = this.ctx.canvas.getBoundingClientRect()
      this.outOfScreen =
        rect.x + rect.width < 0 ||
        rect.y + rect.height < 0 ||
        rect.x > window.innerWidth ||
        rect.y > window.innerHeight
    },

    getMousePos(event) {
      this.mouse.x = event.clientX / 100
      this.mouse.y = event.clientY / 100
    },

    updateCanvas() {
      if (!this.canvasImage) return
      const size = 80

      // noinspection SillyAssignmentJS
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

      this.ctx.globalAlpha = 0.03
      this.ctx.transform = `rotate(${anime.random(0, 360)}deg)`

      for (var i = 0; i < this.stars.length; i++) {
        const star = this.stars[i]
        const x = this.time + star.x + this.mouse.x * star.v
        const y = this.time + star.y + this.mouse.y * star.v
        if (x > this.ctx.canvas.width) {
          star.x = -this.time - 100
        }
        if (y > this.ctx.canvas.height) {
          star.y = -this.time - 100
        }
        this.ctx.drawImage(
          this.canvasImage,
          x,
          y,
          size * (star.v / 10),
          size * (star.v / 10),
        )
      }
    },
  },
}
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(
    to right top,
    #143642,
    #143642,
    #143642,
    #143642,
    #143642,
    #123a4c,
    #143d56,
    #1c3f5f,
    #3b426f,
    #614176,
    #863c71,
    #a53860
  );
}
</style>
