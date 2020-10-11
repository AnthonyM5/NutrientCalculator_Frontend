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
     

    renderFoods(foods){
        foods.forEach(food => new Food(food))
    }
    
}



