import apiendpoint from "./wp_api.js"
import { reqajax } from "./req_ajax.js"
import { PostCard } from "../components/PostCard.js"
import { SearchCard } from "../components/SearchCard.js"


export async function InfiScroll() {
    const doc = document,
    win = window

    let query = localStorage.getItem("userSearch"),
    apiURL,
    Component


    win.addEventListener("scroll",  async (e) => {
        let {scrollTop, clientHeight, scrollHeight} = doc.documentElement, {hash} = win.location

        console.log(scrollTop, clientHeight, scrollHeight, hash)

        if (scrollTop + clientHeight >= scrollHeight) {
            apiendpoint.page++;

            if (!hash || hash === "#/") {
                apiURL= `${apiendpoint.POSTS}&page=${apiendpoint.page}`
                Component = PostCard
            }else if (hash.includes("#/search")) {
                apiURL= `${apiendpoint.SEARCH}${query}&page=${apiendpoint.page}`
                Component = SearchCard
            } else {
                return false
            }

            doc.querySelector(".loader").style.display = "block"
            
            
            await reqajax({
                url:apiURL,
                cbSuccess:(posts) => {
                    console.log(posts)

                    let html = ""
                    posts.forEach(post => html += Component(post))

                    doc.getElementById("main").insertAdjacentHTML("beforeend", html)

                    doc.querySelector(".loader").style.display = "none"
                }
            })
        }
    })

}