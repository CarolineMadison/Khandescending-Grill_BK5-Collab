import { getCarbs, setCarbs } from "./database.js"

const carbs = getCarbs()

document.addEventListener("change", (event) => {
    if (event.target.name === "carb") {
        setCarbs(parseInt(event.target.value))
    }
})

export const Carbs = () => {
    let html = "<ul>"
    
    // Use .map() for converting objects to <li> elements
    const listItems = carbs.map(carb => {
        return `<li><input type="radio" name="carb" value="${carb.id}" />${carb.name}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html    
}