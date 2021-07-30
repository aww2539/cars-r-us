// ERD Diagram Link - https://dbdiagram.io/d/6101b3bb2ecb310fc3b441bb

/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    paintColors: [
        { id: 1, style: "Silver", price: 5 },
        { id: 2, style: "Midnight Blue", price: 7 },
        { id: 3, style: "Firebrick Red", price: 9 },
        { id: 4, style: "Spring Green", price: 11 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 4 },
        { id: 2, type: "Charcoal Fabric", price: 7 },
        { id: 3, type: "White Leather", price: 14 },
        { id: 4, type: "Black Leather", price: 19 },
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 1 },
        { id: 2, package: "Navigation Package", price: 7 },
        { id: 3, package: "Visibility Package", price: 12 },
        { id: 4, package: "Ultra Package", price: 79 },
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 1 },
        { id: 2, type: "17-inch Pair Radial Black", price: 7 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 12 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 79 },
    ],
    customOrder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}