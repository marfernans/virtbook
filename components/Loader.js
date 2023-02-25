export function Loader(){
    const $loader = document.createElement("img");
    $loader.src = "./public/loading.svg";
    $loader.alt = "LOADING...";
    $loader.classList.add("loader");
    return $loader;
}