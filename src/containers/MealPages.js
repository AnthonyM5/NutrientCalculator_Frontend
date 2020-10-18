class MealPages {
    constructor(id){
        api.fetchFood(id).then(this.buildMealPage.bind(this))
    }

    buildMealPage(meal){
        this.meal = meal
        this.name = meal.name
        this.id = meal.id
        this.renderMeal()
    }

    renderMeal(){
        const { id, name, ingredients, user} = this.meal
        // console.log(this)
        const body = document.body
        const mealInfo = document.createElement('div')
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = name
        body.append(header)
        body.append(mealInfo)   
    }
}