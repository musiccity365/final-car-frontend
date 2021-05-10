class CarApi {
    // all variables and methods defined must be of type static in API level
    static baseURL = 'http://localhost:3000/cars'

    static getCars() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => {
                // debugger
                Car.all.forEach(car => {
                    const c = new Car(car.make, car.model, car.color, car.year)
                    c.attachToDom()
                })
            })
    }

}
