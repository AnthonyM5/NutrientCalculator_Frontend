class Meal {
    constructor(meal){
        this.id = meal.id
        this.name = meal.name
        this.user = meal.user
        this.ingredients = meal.ingredients
        this.render()
    }

    render(){
        const mealCard = document.createElement('div')
        mealCard.setAttribute('class', 'container')
        const li = document.createElement("li")
        li.innerText = `${this.name}` + " No. of Ingredients: " + `${this.ingredients.length}`
        li.setAttribute('href', '#')
        li.dataset.id = this.id
        li.addEventListener("click", () => new MealPages(this.id))
        mealCard.append(li)
        document.body.append(mealCard)
        // console.log(this)
        }
}