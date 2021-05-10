const baseURL = 'http://localhost:3000'
    // const carsURL = baseURL + '/cars'

// const list = document.getElementById("car-list")

// const form = document.getElementById("car-form")

// form.addEventListener('submit', handleFormSubmit)
document.addEventListener("DOMContentLoaded", () => {
    fetchCars()
})

function fetchCars() {
    fetch(`${baseURL}/cars`)
        .then(resp => console.log(resp))
        .then(cars => {
            for (const car of cars) {
                console.log("rails obj", car)
                let c = new Car(car.id, car.make, car.model, car.color, car.year)
                console.log("js obj", c)
            }
        })
}
handleFormSubmit(e) {
        e.preventDefault()

        // CarApi.createCar()
        form.reset()
    }
    //callback function for cars list
    // CarApi.getCars()

//callback function for origins list
// OriginApi.getOrigins()