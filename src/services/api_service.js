class ApiService {

    
    constructor(root) {
        this.root = root
    }

    fetchFoods = () => 
    fetch(this.root+'/foods')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(this.renderFoods)

    fetchFood = (id) => 
    fetch(this.root+'/foods/'+id)
    .then(res => res.json())

    fetchMeals = () => 
    fetch(this.root+'/meals')
    .then(res => res.json())
    .then(this.renderMeals)
    // .then(data => console.log(data))

    fetchMeal = (id) => 
    fetch(this.root+'/meals/'+id)
    .then(res => res.json())
    .then(this.renderMeal)
 

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
    console.log(this.root)
    // fetch(this.root+"meals/"+meal_id+"/ingredients?meal_id="+meal_id+"&food_id="+food_id,  {
    //     method: 'POST',
    //     redirect: 'follow'
    //   })
    // .then(res => res.json())
    // .then(data => console.log(data))    

    addButtons(){
        const navBar = document.createElement('nav')
        navBar.setAttribute('class', 'container-fluid')
        const searchBar = document.createElement('p')
        searchBar.innerHTML =`<input type="text" placeholder="Search..">`
        navBar.append(searchBar)
        
        const backButton = document.createElement('button')
        const newButton = document.createElement('button')
        newButton.setAttribute('id', 'newButton')
        newButton.innerText = "Create New Meal"
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
        setAttributes(modalTitle, {"id":"innerModal"})
        modalTitle.innerHTML = "Modal Title"
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
        backButton.innerText = 'Back to Meals '
        backButton.addEventListener('click', function(e){
            e.preventDefault()
            document.getElementById("mealCard").innerHTML = ""
            const clearDivs = document.querySelectorAll('div')
            clearDivs.forEach(div => div.remove())
            api.fetchMeals()
        })
        navBar.append(backButton, newButton, newModal)
        console.log(navBar)
        const body = document.body
        body.append(navBar)
    }

    
    


}





function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }