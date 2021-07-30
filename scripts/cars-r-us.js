import { addCustomOrder } from "./database.js"
import { interiorsList } from "./interiors.js"
import { Models } from "./models.js"
import { Orders } from "./orders.js"
import { paintColorsList } from "./paintColors.js"
import { technologiesList } from "./technologies.js"
import { wheelsList } from "./wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars 'R Us</h1>
        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${paintColorsList()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorsList()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${technologiesList()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsList()}
            </section>
        </article>
        <article>
            <section class="types">
                <h2>Models</h2>
                ${Models()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}