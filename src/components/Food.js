class Food {
    constructor(food){
        this.name = food.name
        this.nutrient_hash = food.nutrient_hash
        this.id = food.id
        this.card = this.render()
        
    }

    // addEventListeners(){
    //     this.addEventListeners("onclick", () => new FoodPages(this.food.id))
    // }


    render(){
    const ol = document.createElement("ol")
    const li = document.createElement("li")
    const modal = document.getElementById('newModal')
    li.innerText = `${this.name}` 
    li.setAttribute('href', '#')
    li.dataset.id = this.id
    li.addEventListener("click", () => new FoodPages(this.id))
    const body = document.querySelector('body')
    ol.appendChild(li)
    modal.append(li)
    // console.log(this.name)
    }

    renderFoodPage = (food) => {
        new FoodPages(food)
    }
}