import apiendpoint from "./helpers/wp_api.js";
import { reqajax } from "./helpers/req_ajax.js";

import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";

export function App() {
    const d = document,
    $root = d.getElementById("root");

    $root.appendChild(Title())  
    $root.appendChild(Loader())  


}