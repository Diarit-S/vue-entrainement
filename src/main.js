import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-entrainement.firebaseio.com/';
axios.interceptors.request.use((req)=>{
  console.log({ req });
  return req;
})
axios.interceptors.response.use((res)=>{
  console.log({ res });
  return res;
})

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
