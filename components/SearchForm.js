export function SearchForm(){
    const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input")

    $form.classList.add("form-s")
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar aquí..."

    $form.appendChild($input)
    return $form
}