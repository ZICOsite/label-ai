import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createApp(App).mount('#zico')
