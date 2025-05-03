import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/main.css'
const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
    console.error('Global Vue error:', err)
    // Optional: send to a logging service or show a global alert
    alert(`An unexpected error occurred: ${err.message}`)
  }

app.use(createPinia())
app.use(router)
app.mount('#app')
