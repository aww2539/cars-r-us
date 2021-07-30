import { getTechnologies, setTechnology,} from "./database.js";


const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const technologiesList = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const technology of technologies) {
        html += `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`
    }

    html += "</ul>"
    return html
}