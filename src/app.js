const api = new ApiService('http://localhost:3000/')
const state = {
    meal: null
}


api.fetchMeals()

