import { getProteins, setProteins } from "./database.js"

const proteins = getProteins()

document.addEventListener("change", (event) => {
    if (event.target.name === "protein") {
        setProteins(parseInt(event.target.value))
    }
})

export const Proteins = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = proteins.map(protein => {
        return `<li><input type="radio" name="protein" value="${protein.id}" />${protein.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}