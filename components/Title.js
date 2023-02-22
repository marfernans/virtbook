import apiendpoint from "../helpers/wp_api.js";

export function Title() {
    const $h1 = document.createElement("h1");
    $h1.innerHTML = `
    <a href="${apiendpoint.DOMAIN}" target="_blank" rel="noopener">
    ${apiendpoint.NAME.toUpperCase()}
    </a>
    `;

    return $h1
}