import { Header } from "./components/Header.js";
import { Posts } from "./components/posts.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Raurer.js";

export function App() {
    const $root = document.getElementById("root");

    $root.appendChild(Header())  
    $root.appendChild(Posts())  
    $root.appendChild(Loader()) 

    
    Router();
    
}