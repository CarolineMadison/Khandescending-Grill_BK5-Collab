import { getBowlSizes, setBowlSizes } from "./database.js"

const sizes = getBowlSizes()

document.addEventListener("change", (event) => {
    if (event.target.name === "size") {
        setBowlSizes(parseInt(event.target.value))
    }
})

export const BowlSizes = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li><input type="radio" name="size" value="${size.id}" />${size.size}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html    
}