import { createApp } from 'vue'
import {
    applyPolyfills,
    defineCustomElements
  } from "@freshworks/crayons/loader";
import App from './App.vue'
applyPolyfills().then(() => defineCustomElements());
const app = createApp(App);

app.config.ignoredElements = [/fw-\w*/];
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('fw-');
app.config.productionTip = false;
app.mount('#app')
