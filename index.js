import  apiendpoint from "./helpers/wp_api.js"
import {App} from "./App.js"

document.addEventListener("DOMContentLoaded",App)
window.addEventListener("hashchange",() => {
    apiendpoint.page = 1
    App()
});