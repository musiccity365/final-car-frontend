class Car {

    static all = [] // this variable gives us access to all of our Cars

    // NEW CONTAINER FOR CAR-LIST
    static container = document.getElementById('car-list')

    constructor(id, make, model, color, year, originID) { //use ES6 - destructuring to take actions out of object and immediately assign them to variables
        this.id = id
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.originID = originID

        this.element = document.createElement('li')
        this.element.id = `car-${id}`
        this.element.dataset.id = id

        this.element.addEventListener('click', this.handleCarClick)

        Car.all.push(this)
    }

    renderLi() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
            $<strong class="make">${this.make}</strong>
            <span class="model">${this.model}</span>
            <span class="color">${this.color}</span>
            <span class="year">${this.year}</span>
        </div>
    `
        return this.element
    }

    attachToDom() {
        list.appendChild(this.renderLi())
    }
    static filterByOrigin(filteredOrigin) {

        if (filteredOrigin) {
            for (const car of Car.all) {
                //convert (filteredOrigin.id) data type to match foreign key attribute (car.originID) to in order to prevent errors when comparing the attribute actions. In this case, we use parseInt(filteredOrigin.id) to convert the filteredOrigin.id data type from string to integer
                if (car.originID === parseInt(filteredOrigin.id)) {
                    car.element.style.display = ""
                } else {
                    car.element.style.display = "none"
                }
            }

        } else {
            Car.container.innerHTML = '' //use this to remove all cars from the DOM, to prevent duplicate entries.
            for (const car of Car.all) {
                car.attachToDom()
            }
        }
    }
}