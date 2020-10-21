const api = new ApiService('http://localhost:3000/')
const title = document.createElement('div')
title.setAttribute("class", "text-center")
title.innerText = "Nutrient Calculator"
const state = {
    meal: null
}


api.fetchMeals()

