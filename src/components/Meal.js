class Meal {
    constructor(meal){
        this.id = meal.id
        this.user = meal.user_id
        this.ingredients = meal.ingredients
        this.render()
    }

    render(){
        console.log(this)
    }
}