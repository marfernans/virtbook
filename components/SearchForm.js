export function SearchForm(){
    const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input")

    $form.classList.add("s-form")
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar aquí..."
    $input.autocomplete = "off"

    $form.appendChild($input)

    if (location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("userSearch")
    }

    d.addEventListener("search", e => {
        if (!e.target.matches("input[type='search']")) return false
        if (!e.target.value)localStorage.removeItem("userSearch")
    });

    d.addEventListener("submit", (e)=>{
        if (!e.target.matches(".s-form"))return false
        e.preventDefault()
        localStorage.setItem("userSearch", e.target.search.value)
        location.hash = `#/search?search=${e.target.search.value}`;
    });

    return $form
}