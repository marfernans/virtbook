export function Loader(){
    const d = document,
    $loader = d.createElement("img");
    $loader.src = "./public/loading.svg";
    $loader.alt = "LOADING...";
    $loader.classList.add("loader");
    return $loader;
}