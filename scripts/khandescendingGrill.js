import { BowlSizes } from "./bowlSizes.js"
import { Carbs } from "./carbs.js"
import { createOrder } from "./database.js"
import { Orders } from "./orders.js"
import { Proteins } from "./proteins.js"
import { Sauces } from "./sauces.js"
import { Seasonings } from "./seasonings.js"
import { Vegetables } from "./vegetables.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            createOrder()
        }
    }
)
export const KhandescendingGrill = () => {

    return `
        <header class="header">
            <h1 class="title">Khandescending Grill</h1>
        </header>
    
        <article class="choices">

            <section class="choices__proteins options">
                <h2>Proteins</h2>
                ${Proteins()}
            </section>
    
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${Vegetables()}
            </section>
    
            <section class="choices__carbs options">
                <h2>Carbs</h2>
                ${Carbs()}
            </section>
    
            <section class="choices__sauces options">
                <h2>Sauces</h2>
                ${Sauces()}
            </section>

            <section class="choices__seasonings options">
                <h2>Seasonings</h2>
                ${Seasonings()}
            </section>

            <section class="choices__sizes options">
                <h2>Bowl Sizes</h2>
                ${BowlSizes()}
            </section>
            
        </article>
            
        <article>
            <button id="orderButton">Create Order</button>
        </article>
    
        <article class="orders">
            <h2>Orders</h2>
            ${Orders()}
        </article>
    `
}