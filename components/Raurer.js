import { reqajax } from "../helpers/req_ajax.js"
import apiendpoint from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js"

export function Router(){
    const d = document,
    win = window,
    $posts = d.getElementById("posts")

    let {hash} = location
    console.log(hash)

    $posts.innerHTML = null

    if (!hash || hash === "#/") {
        reqajax({
            url:apiendpoint.POST,
            cbSuccess:(posts) => {
                console.log(posts)
    
                let html = "";
                posts.forEach((post) =>(html += PostCard(post)));
                d.querySelector(".loader").style.display = "none"
                $posts.innerHTML = html
            }
        }) 
    }else if (hash.includes("#/search")) {
        $posts.innerHTML = "<h2>The Search</h2>"  
    }else if (hash === "#/contacto"){
        $posts.innerHTML = "<h2>The Contact</h2>"
    }else{
        $posts.innerHTML = "<h2>The previous content of the post</h2>"
    }

}