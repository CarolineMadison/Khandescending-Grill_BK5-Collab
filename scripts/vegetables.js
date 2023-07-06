import { getVegetables, setVegetables } from "./database.js"

const vegetables = getVegetables()

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVegetables(parseInt(event.target.value))
    }
})

export const Vegetables = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = vegetables.map(vegetable => {
        return `<li><input type="radio" name="vegetable" value="${vegetable.id}" />${vegetable.name}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html    
}