
import apiendpoint from "../helpers/wp_api.js"
import { reqajax } from "../helpers/req_ajax.js"
import { PostCard } from "./PostCard.js"
import { Post } from "./Post.js"
import { SearchCard } from "./SearchCard.js"



export async function Router() {
    const d = document,
        $main = d.getElementById("main")

    let { hash } = location
    console.log(hash)

    $main.innerHTML = null

    if (!hash || hash === "#/") {
        await reqajax({
            url: apiendpoint.POSTS,
            cbSuccess: (posts) => {
                console.log(posts)
                let html = ""
                posts.forEach((post) => html += PostCard(post))
                d.querySelector(".loader").style.display = "none"
                $main.innerHTML = html
            }
        })
        console.log(apiendpoint.POST)
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("userSearch")

        if (!query) {
            d.querySelector(".loader").style.display = "none"
            return false;
        }
        await reqajax({
            url: `${apiendpoint.SEARCH}${query}`,
            cbSuccess:(search) => {
                console.log(search)
                let html = ""

                if (search.length === 0){
                    html = `
                    <p class= "error">
                     No existen resultados en tu busqueda para la palabra <mark>${query}</mark>
                    </p>
                     `;
                } else {
                    search.forEach(post => (html += SearchCard(post)))

                }

                $main.innerHTML = html

            }
        })

    } else if (hash === "#/contact") {
        $main.innerHTML = "<h2>The Contact</h2>"

    } else {

        await reqajax({
            url: `${apiendpoint.POST}/${localStorage.getItem("postId")}`,
            cbSuccess: (post) => {
                console.log(post);
                $main.innerHTML = Post(post)
                /*

                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;*/
            }
        })

    }

    d.querySelector(".loader").style.display = "none"
}
