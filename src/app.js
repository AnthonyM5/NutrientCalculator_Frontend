const api = new ApiService('http://localhost:3000/')
const title = document.createElement('div')
title.setAttribute("class", "text-center")
title.innerText = "Nutrient Calculator"


// Headers for fetch request 
const myHeaders = new Headers();
const header = document.createElement('div')
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


// Global state variable to store IDs and objects that can be used to pass data between components 
const state = {
    meal: null,
    food_objs: [],
    nutrient_hashes: {},
    isLoading: true
}

api.mainNav()
api.fetchMeals()

