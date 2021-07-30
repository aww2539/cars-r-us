import { getInteriors, getModels, getOrders, getPaintColors, getTechnologies, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const paintColors = getPaintColors()
        const foundPaintColor = paintColors.find(
            (paintColor) => {
                return paintColor.id === order.paintColorId
            }
        )

    const interiors = getInteriors()
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )

    const technologies = getTechnologies()
        const foundTechnology = technologies.find(
            (technology) => {
                return technology.id === order.technologyId
            }
        )

    const wheels = getWheels()
        const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )

    const models = getModels()
        const foundModel = models.find(
            (model) => {
                return model.id === order.modelId
            }
        )

        const subtotalCost = foundPaintColor.price + foundInterior.price + foundTechnology.price + foundWheel.price
        const totalCost = subtotalCost * foundModel.multiplier
        
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}