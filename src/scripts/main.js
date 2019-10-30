console.log("Where you running to?!")

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetSection = document.createElement("section")
planetSection.id = "planets"

document.querySelector("body").appendChild(planetSection)


planets.forEach(planet => {
    const planetListItem = document.createElement("h2")
    planetListItem.innerText = planet
    planetSection.appendChild(planetListItem)
})


const planetEl = document.getElementById("planets")

const planetsCapFirst = planets.map(planet => planet[0].toUpperCase() + planet.slice(1))
console.log(planetsCapFirst)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let planetE = planets.filter(planet => planet.includes("e"))
console.log(planetE)
planetE = planetsCapFirst.map(planet => planet.toLowerCase()).filter(planet => planet.includes("e"))
console.log(planetE)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/