import { getSeasonings, setSeasonings } from "./database.js"

const seasonings = getSeasonings()

document.addEventListener("change", (event) => {
    if (event.target.name === "seasoning") {
        setSeasonings(parseInt(event.target.value))
    }
})

export const Seasonings = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = seasonings.map(seasoning => {
        return `<li><input type="radio" name="seasoning" value="${seasoning.id}" />${seasoning.name}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html    
}