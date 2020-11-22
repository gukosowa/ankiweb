import anime from 'animejs/lib/anime.es.js'

export function initAnime(nodes, callback) {
  const els = [...nodes],
    tl = anime.timeline({ autoplay: false })

  els.map((el) => {
    callback(anime, tl, el)
  })

  scrollAnime(tl)
}

export function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight'
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
}

export function scrollAnime(timeline) {
  window.addEventListener('scroll', function () {
    window.requestAnimationFrame(() => {
      timeline.seek(timeline.duration * (getScrollPercent() * 0.01))
    })
  })
}
