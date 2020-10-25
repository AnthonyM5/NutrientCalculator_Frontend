class Ingredient {
    constructor(food){
        this.food_id = food.food_id
        this.name = food.name
        this.science_name = food.science
        this.meal_id = state.meal
        this.addToMeal()
        
    }

    addToMeal(){
        api.addToMeal(this.meal_id, this.food_id)
        .then(sleeper(1000))
        .then(data => console.log(data))
        .then(new MealPages(this.meal_id))
    }



}


  function sleeper(ms) {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
      }
    
