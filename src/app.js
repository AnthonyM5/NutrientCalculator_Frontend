const api = new ApiService('http://localhost:3000/')
const title = document.createElement('div')
const myHeaders = new Headers();
const allRow = document.createElement('div')
allRow.setAttribute("class", "row")
const nutrientV = document.createElement("div")
nutrientV.setAttribute("class", "col-sm")
const nutrientP = document.createElement("div")
nutrientP.setAttribute("class", "col-sm")

myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");


title.setAttribute("class", "text-center")
title.innerText = "Nutrient Calculator"
const state = {
    meal: null,
    food_objs: [],
    nutrient_hashes: {},
    isLoading: true
}

api.mainNav()
api.fetchMeals()

