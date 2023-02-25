import { reqajax } from "../helpers/req_ajax.js"
import apiendpoint from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"

export async function Router(){
    const d = document,
    win = window,
    $main = d.getElementById("main")

    let {hash} = location
    console.log(hash)

    $main.innerHTML = null

    if (!hash || hash === "#/") {
        await reqajax({
            url:apiendpoint.POST,
            cbSuccess:(posts) => {
                console.log(posts)
    
                let html = "";
                posts.forEach((post) =>(html += PostCard(post)));
                $main.innerHTML = html
            }
        }) 
    }else if (hash.includes("#/search")) {
        $main.innerHTML = "<h2>The Search</h2>"  

    }else if (hash === "#/contact"){
        $main.innerHTML = "<h2>The Contact</h2>"

    }else{
        $main.innerHTML = "<h2>The previous content of the post<h2>"
    }
    
    d.querySelector(".loader").style.display = "none"
}