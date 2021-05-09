const baseURL = 'http://localhost:3000'
const carsURL = baseURL + '/cars'

const list = document.getElementById("car-list")

const form = document.getElementById("car-form")

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()

    CarApi.createCar()
    form.reset()
}
