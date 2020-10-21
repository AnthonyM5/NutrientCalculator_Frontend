class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        this.name = food.name
        this.id = food.fdcid
        this.food_id = food.id
        this.science = food.science_name
        this.nutrient_hash = food.nutrient_hash
        this.renderFood()
    }

    getPortions(){
        const portions = new ApiService('https://api.nal.usda.gov/fdc/v1/foods?fdcIds=')
        return portions.fetchPortions(this.id)
        .then(data => {return data[0].foodPortions[0].gramWeight})
        .catch((error) => {console.error('Error:', error)})
        
        
    }

    renderFood(){ 
        const { id, name, nutrient_hash } = this.food
        // console.log(this)
        const body = document.body
        const nutrientInfo = document.createElement('div')
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = name
        body.append(header)
        Promise.resolve(this.getPortions()).then(modifier => nutrient_hash.forEach(nutrient => {new NutrientValues(nutrient, modifier)}))  
        body.append(nutrientInfo)   
        this.addButtons()
    }

    // addButtons(){
    //     const printButton = document.createElement('button')
    //     const addToMeal = document.createElement('button')
    //     addToMeal.innerText = "Add To Meal"
    //     addToMeal.addEventListener('click', (e) => new Ingredient(this))
    //     printButton.innerText = "Print This Page"
    //     printButton.setAttribute('onclick', "window.print()")
    //     document.body.append(printButton, addToMeal)
    // }

    addButtons(){
        const navBar = document.createElement('nav')
        navBar.setAttribute('class', 'container-fluid')
        const searchBar = document.createElement('p')
        searchBar.innerHTML =`<input type="text" placeholder="Search..">`
        const printButton = document.createElement('button')
        const addToMeal = document.createElement('button')
        addToMeal.innerText = "Add To Meal"
        addToMeal.addEventListener('click', (e) => new Ingredient(this))
        printButton.innerText = "Print This Page"
        printButton.setAttribute('onclick', "window.print()")
        navBar.append(searchBar)
        const backButton = document.createElement('button')
        const newButton = document.createElement('button')
        newButton.setAttribute('id', 'newButton')
        newButton.innerText = "Add Ingredients"
        setAttributes(newButton, {"class": "btn btn-primary", "data-toggle":"modal", })
        const newModal = document.createElement('div')
        setAttributes(newModal, {"id": "newModal", "class": "modal-fade", "role":"dialog", "aria-hidden":"true", "aria-labelledby":"innerModal"})
        const modalSpan = document.createElement('span')
        modalSpan.setAttribute("class", "close")
        setAttributes(modalSpan, {"aria-hidden":"true"})
        modalSpan.innerText = "Close"
        const closeButton = document.createElement('button')
        setAttributes(closeButton, {"type": "button", "class":"close"})
        closeButton.append(modalSpan)
        const modalDialog = document.createElement('div')
        setAttributes(modalDialog, {"class": "modal-dialog", "role":"document"})
        const modalHeader = document.createElement('div')
        modalHeader.setAttribute("class", "modal-header")
        const modalTitle = document.createElement('h5')
        modalHeader.append(modalTitle)
        modalHeader.append(closeButton)
        setAttributes(modalTitle, {"id":"innerModal", "class":"text-center"})
        modalTitle.innerText = "Search Foods"
        modalDialog.append(modalHeader)
        newModal.append(modalDialog)
        newButton.onclick = function() {
            newModal.style.display = "block";
        }
        modalSpan.onclick = function(){
            newModal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == newModal) {
              newModal.style.display = "none";
            }
          }
        backButton.setAttribute('class', 'btn btn-outline-primary')
        backButton.innerText = `Back to Meal #${state.meal}`
        backButton.addEventListener('click', function(e){
            e.preventDefault()
            // document.getElementById("mealCard").innerHTML = ""
            const clearDivs = document.querySelectorAll('div')
            clearDivs.forEach(div => div.remove())
            new MealPages(state.meal)
            // document.body.append(title)
        })
        navBar.append(backButton, addToMeal, newModal)
        console.log(navBar)
        const body = document.body
        body.append(navBar)
    }

    
}