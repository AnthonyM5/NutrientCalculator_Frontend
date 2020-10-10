class Food {
    constructor(food){
        this.name = food.name
        this.nutrient_hash = JSON.stringify(food.nutrient_hash)
        this.render()
    }

    render(){
    console.log(`${this.nutrient_hash}`)
    const li = document.createElement("li")
    li.innerText = this.name
    const body = document.querySelector('body')
    body.appendChild(li)
    }
}