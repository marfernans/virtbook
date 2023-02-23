import apiendpoint from "./helpers/wp_api.js";
import { reqajax } from "./helpers/req_ajax.js";

import { Header } from "./components/Header.js";
import { Posts } from "./components/posts.js";
import { Loader } from "./components/Loader.js";
import { PostCard } from "./components/PostCard.js";

export function App() {
    const d = document,
    $root = d.getElementById("root");

    $root.appendChild(Header())  
    $root.appendChild(Posts())  
    $root.appendChild(Loader()) 
    

    reqajax({
        url:apiendpoint.POST,
        cbSuccess:(posts) => {
            console.log(posts)

            let html = "";
            posts.forEach((post) =>(html += PostCard(post)));
            d.querySelector(".loader").getElementsByClassName.display = "none"
            d.getElementById("posts").innerHTML = html
        }
    })
    
}