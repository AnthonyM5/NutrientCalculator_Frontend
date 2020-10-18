class Meal {
    constructor(meal){
        this.id = meal.id
        this.name = meal.name
        this.user = meal.user
        this.ingredients = meal.ingredients
        this.render()
    }

    render(){
        const ol = document.createElement("ol")
        const li = document.createElement("li")
        li.innerText = `${this.name}` 
        li.setAttribute('href', '#')
        li.dataset.id = this.id
        li.addEventListener("click", () => new MealPages(this.id))
        const body = document.querySelector('body')
        ol.appendChild(li)
        body.append(li)
        // console.log(this)
        }
}