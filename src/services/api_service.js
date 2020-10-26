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

    // renderMeal(id){
    //     new MealPages(id)
    // }

    createMeal = (name) =>
    fetch(this.root+"meals?name="+name, {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    })
    .then(res => res.json())
    .then(data => console.log(data))
  

    renderFoods(foods){
        foods.forEach(food => new Food(food))
    }

    renderMeals(meals){
        meals.forEach(meal => new Meal(meal))
    }

    
    renderNutrients(nutrient_obj){
      // console.log(this)
      const allRow = document.createElement('div')
      allRow.setAttribute("class", "row")
      // const nutrientV = document.createElement("div")
      // nutrientV.setAttribute("class", "col-sm")
      const nutrientP = document.createElement("div")
      nutrientP.setAttribute("class", "col-sm")
     
      // const details = document.createElement('h3')
      // const allValues = []
      for (const name in nutrient_obj) {
          if (document.getElementById(`${name}`) === null) {
            nutrientP.innerText = name + " " + nutrient_obj[`${name}`]
            nutrientP.setAttribute("id", name)
          } 
          
          //  
          
          // this.renderNutrientValues(name)
      }
          // document.body.append(allRow)
      // 
      //
      allRow.append(nutrientP)
      console.log(nutrientP)
      
      document.body.append(allRow)
  }

    
    addToMeal = (meal_id, food_id) => 
    fetch(this.root+"meals/"+meal_id+"/ingredients?meal_id="+meal_id+"&food_id="+food_id,  {
        method: 'POST',
        redirect: 'follow'
      })
    .then(res => res.json())
    .then(sleeper(10000))  
    // .then(data => console.log(data))
       


    deleteFromMeal = (meal_id, ingredient_id) =>
    fetch(this.root+"meals/"+meal_id+"/ingredients/"+ingredient_id,{
        method: 'DELETE',
        redirect: 'follow'
    })
  // .then(res => res.json())
  // .then(data => console.log(data))  

    mainNav(){
      const navBar = document.createElement('nav')
        navBar.setAttribute('class', 'container-fluid')
      const submitButton = document.createElement('button')
        const newMeal = document.createElement('button')
        newMeal.setAttribute('id', 'newButton')
        newMeal.innerText = "Create New Meal"
        setAttributes(newMeal, {"class": "btn btn-primary", "data-toggle":"modal", })
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
        modalHeader.append(submitButton)
        const form = document.createElement('form')
        const input = document.createElement('input')
        setAttributes(input, {"type":"text", "name":"name"})
        setAttributes(form, {"id":"form"})
        form.appendChild(input)
        // modalHeader.append(form)
        setAttributes(modalTitle, {"id":"innerModal", "class":"text-center"})
        modalTitle.append(form)
        modalDialog.append(modalHeader)
        newModal.append(modalDialog)
        newMeal.onclick = function() {
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
        setAttributes(submitButton, {'class':'btn btn-outline-primary',"value":"Submit", "onsubmit":"return false"})
        submitButton.innerText = 'Submit'
 
        submitButton.addEventListener('click', function(e){
            // e.preventDefault()
            // console.log(e)
            const formData = document.querySelector("#form > input[type=text]").value
            api.createMeal(formData)

            document.getElementById("mealCard").innerHTML = ""
            const clearDivs = document.querySelectorAll('div')
            clearDivs.forEach(div => div.remove())
            api.fetchMeals()
        })

       


        navBar.append(newMeal, newModal)
        // console.log(navBar)
        const body = document.body
        body.append(navBar)
    }
    


    
    


}

function formFunction(){
  console.log(document.getElementById("form").submit())
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }


  function sleeper(ms) {
    return function(x) {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }