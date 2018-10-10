import video from '../components/video.vue'
import videoPlugin from "../plugins/video"
export default function (Vue) {
  Vue.component('video', video)
  Vue.use(videoPlugin)
}


