import { createApp } from 'vue'
import { router } from './router'; // 라우터 추가하고 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCopy)
library.add(faEnvelope)
library.add(faCalendar)
library.add(faUserCircle)
library.add(faChevronDown)

import App from './App.vue'

// Create Vue Instance
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // 사용 설정 하기

app.mount('#app');

