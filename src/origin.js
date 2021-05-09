class Origin {
    static all = []

    static originContainer = document.getElementById('origin-container')

    constructor(id, name) {
        this.id = id
        this.name = name
        this.active = false

        this.element = document.createElement('button')

        Origin.all.push(this)
    }
}
