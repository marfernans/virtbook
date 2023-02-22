export function Menu() {
    const d = document,
    $menu = d.createElement("nav")

    $menu.classList.add("menu")
    $menu.innerHTML = `
    
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Búsqueda</a>
    <span>-</span>
    <a href="https://mfernandezserrano.github.io/" target="_blank" rel="noopener">Sobre mí</a>

    `;
    return $menu;
}