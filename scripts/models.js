import { getModels, setModel } from "./database.js"

const models = getModels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "model") {
            setModel(parseInt(event.target.value))
        }
    }
)

export const Models = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const model of models) {
        html += `<li>
            <input type="radio" name="model" value="${model.id}" /> ${model.name}
        </li>`
    }

    html += "</ul>"
    return html
}