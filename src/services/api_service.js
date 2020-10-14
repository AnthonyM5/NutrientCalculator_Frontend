class ApiService {

    
    constructor(root) {
        this.root = root
    }

    fetchFoods = () => 
    fetch(this.root+'/foods')
    .then(res => res.json())
    .then(this.renderFoods)

    fetchFood = (id) => 
    fetch(this.root+'/foods/'+id)
    .then(res => res.json())

    fetchMeals = () => 
    fetch(this.root+'/meals')
    .then(res => res.json())
    .then(this.renderMeals)

    fetchPortions = (id) => 
    fetch(this.root+id+'&api_key=vo2af6MVAbCVZa0h4fYKoHdtjeHUxaRFDjEyGyia')
    .then(res => res.json())

     

    renderFoods(foods){
        foods.forEach(food => new Food(food))
    }

    renderMeals(meals){
        meals.forEach(meal => new Meal(meal))
    }


    addToMeal = (meal_id, food_id) => 
    fetch(this.root+"meals/"+meal_id+"/ingredients?meal_id="+meal_id+"&food_id="+food_id,  {
        method: 'POST',
        redirect: 'follow'
      })
    .then(res => res.json())
    .then(data => console.log(data))    
    


}



