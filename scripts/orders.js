import { getOrders, getBowlSizes, getCarbs, getProteins, getSauces, getSeasonings, getVegetables } from "./database.js"

const buildOrderListItem = (order) => {
    const vegetables = getVegetables()
    const seasonings = getSeasonings()
    const carbs = getCarbs()
    const proteins = getProteins()
    const sizes = getBowlSizes()
    const sauces = getSauces()

    // The function you pass to find() must return true/false
    const foundVegetable = vegetables.find(
        (vegetable) => {
            return vegetable.id === order.vegetableId
        }
    )
    const foundSeasoning = seasonings.find(
        (seasoning) => {
            return seasoning.id === order.seasoningId
        }
    )
    const foundCarb = carbs.find(
        (carb) => {
            return carb.id === order.carbId
        }
    )
    const foundProtein = proteins.find(
        (protein) => {
            return protein.id === order.proteinId
        }
    )
    const foundSauce = sauces.find(
        (sauce) => {
            return sauce.id === order.sauceId
        }
    )

    const foundSize = sizes.find(
        (sauce) => {
            return sauce.id === order.sauceId
        }
    )

    const totalCost = foundVegetable.price + foundSeasoning.price + foundCarb.price + foundProtein.price + foundSauce.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} ${foundSize.size} Bowl = ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
