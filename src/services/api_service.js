class ApiService {


    constructor(root) {
        this.root = root
    }

    fetchFoods = () => 
    fetch(this.root+'/foods')
    .then(res => res.json())
    .then(this.renderFoods)

    renderFoods(foods){
        foods.forEach(food => new Food(food))
    }
    
}



