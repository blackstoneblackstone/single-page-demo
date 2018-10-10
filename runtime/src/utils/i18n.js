import Vuei18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(Vuei18n)

const messages = {
  "zh-CN": {},
  "zh-TW": {},
  en: {}, //英语
  fr: {}, //法语
  ja: {}, //日语
  de: {}, //德语
  ko: {}, //韩语
  ru: {} //俄语
}

const i18n = new Vuei18n({
  locale: "zh-CN",
  messages
})

export default i18n
