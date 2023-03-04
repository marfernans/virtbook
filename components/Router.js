
import apiendpoint from "../helpers/wp_api.js"
import { reqajax } from "../helpers/req_ajax.js"
import { PostCard } from "./PostCard.js"
import { Post } from "./Post.js";



export async function Router() {
    const d = document,
    $main = d.getElementById("main");
    //win = window;

    let { hash } = location;
    console.log(hash);

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
       await reqajax({
            url: apiendpoint.POSTS,
            cbSuccess: (posts) => {
                console.log(posts);
                let html = "";
                posts.forEach((post) => html += PostCard(post));
                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        })
        console.log(apiendpoint.POST)
    } else if (hash.includes("#/search")) {
        $main.innerHTML = "<h2>The Search</h2>"

    } else if (hash === "#/contact") {
        $main.innerHTML = "<h2>The Contact</h2>"

    } else {
      
        await reqajax({
            url: `${apiendpoint.POST}/${localStorage.getItem("postId")}`,
            cbSuccess: (post) => {
                console.log(post);
                $main.innerHTML = Post(post);
                /*

                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;*/
            }
        })
        
    }
    
    
    //console.log(`${apiendpoint.POST} ${localStorage.getItem("postId")}`)


    
    d.querySelector(".loader").style.display = "none"
}
