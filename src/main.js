import { createApp } from 'vue'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfStroke as starHalf } from '@fortawesome/free-regular-svg-icons'

library.add(starSolid, starRegular, starHalf)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
