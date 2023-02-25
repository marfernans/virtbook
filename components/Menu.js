export function Menu() {
    const $menu = document.createElement("nav")

    $menu.classList.add("menu")
    $menu.innerHTML = `    
    <a href="#/">Ínicio</a>
    <span>-</span>
    <a href="#/search">Búsqueda</a>
    <span>-</span>
    <a href="#/contact">Contacto</a>
    <span>-</span>
    <a href="https://mfernandezserrano.github.io/" target="_blank" rel="noopener">Sobre mí</a>
    `;
    return $menu;
}