import { getInteriors, setInterior } from "./database.js"


const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interiorsList = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {
        html += `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.type}
        </li>`
    }

    html += "</ul>"
    return html
}