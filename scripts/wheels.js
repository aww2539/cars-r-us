import { getWheels, setWheel } from "./database.js";


const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const wheelsList = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.type}
        </li>`
    }

    html += "</ul>"
    return html
}