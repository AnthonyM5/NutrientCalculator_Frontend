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

    fetchPortions = (id) => 
    fetch(this.root+id+'&api_key=vo2af6MVAbCVZa0h4fYKoHdtjeHUxaRFDjEyGyia').then(res => {res.json().then(data => {console.log(data)})})
    
}



