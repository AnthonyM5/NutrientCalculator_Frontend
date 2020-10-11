class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        this.renderFood()
        console.log('Part1')
    }

    renderFood(){
        console.log('Part2')
        const { id, name, nutrient_hash } = this.food
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = this.name
        const nutrientInfo = document.createElement('p')
        nutrientInfo.innerText = JSON.stringify(nutrient_hash)
        body.append(nutrientInfo)
        body.append(header)
    }
}