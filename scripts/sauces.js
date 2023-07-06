import { getSauces, setSauces } from "./database.js"

const sauces = getSauces()

document.addEventListener("change", (event) => {
    if (event.target.name === "sauce") {
        setSauces(parseInt(event.target.value))
    }
})

export const Sauces = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = sauces.map(sauce => {
        return `<li><input type="radio" name="sauce" value="${sauce.id}" />${sauce.name}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html    
}