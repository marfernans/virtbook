export function SearchForm(){
    const $form = document.createElement("form"),
    $input = document.createElement("input")

    $form.classList.add("s-form")
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar aquí..."

    $form.appendChild($input)
    return $form
}