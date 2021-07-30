import { getPaintColors, setPaintColor } from "./database.js"


const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const paintColorsList = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const paintColor of paintColors) {
        html += `<li>
            <input type="radio" name="paintColor" value="${paintColor.id}" /> ${paintColor.style}
        </li>`
    }

    html += "</ul>"
    return html
}