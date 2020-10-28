class Meal {
    constructor(meal){
        this.id = meal.id
        this.name = meal.name
        this.user = meal.user
        this.ingredients = meal.ingredients
        this.render()
    }

    hasIngredients(){
        return (this.ingredients ? this.ingredients.length : [] )
    }

    render(){
        const mealCard = document.createElement('div')
        setAttributes(mealCard, {"class":"container", "id":"mealCard"})
        const mealRow = document.createElement("div")
        setAttributes(mealRow, {"class": "row align-items-start"})
        const mealCol = document.createElement('div')
        setAttributes(mealCol, {"class": "col-sm"})
        mealCol.innerText = `${this.name}`
        const foodCol = document.createElement("div")
        setAttributes(foodCol, {"class":"col-sm"})
        foodCol.innerText = "No. of Ingredients:" + " " + `${this.hasIngredients()}`
        // mealCol.setAttribute('href', '#')
        mealCol.dataset.id = this.id
        mealCol.addEventListener("click", () => new MealPages(this.id))
        mealRow.appendChild(mealCol)
        mealCol.after(mealRow.appendChild(foodCol))
        mealCard.append(mealRow)
        document.body.append(mealCard)
        // console.log(this)
        }

        
}



  