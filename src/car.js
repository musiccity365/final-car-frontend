class Car {

    static all = []; // this variable gives us access to all of our Cars

    // NEW CONTAINER FOR CAR-LIST
    static container = document.getElementById('car-list')

    constructor(id, make, model, year, miles, originID) { //use ES6 - destructuring to take actions out of object and immediately assign them to variables
        this.id = id
        this.make = make
        this.model = model
        this.year = year
        this.miles = miles
        this.originID = originID

        this.element = document.createElement('li')
        this.element.id = `car-${id}`
        this.element.dataset.id = id

        this.element.addEventListener('click', this.handleCarClick)

        Car.all.push(this)
    }

    
}
