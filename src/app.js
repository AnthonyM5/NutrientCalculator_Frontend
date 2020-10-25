const api = new ApiService('http://localhost:3000/')
const title = document.createElement('div')
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


title.setAttribute("class", "text-center")
title.innerText = "Nutrient Calculator"
const state = {
    meal: null,
    food_objs: [],
    isLoading: true
}

api.mainNav()
api.fetchMeals()

