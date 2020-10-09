fetchFoods = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=Acerola&dataType=SR Legacy, Foundation&currentPage=1&sortOrder=desc&pageSize=1&api_key=vo2af6MVAbCVZa0h4fYKoHdtjeHUxaRFDjEyGyia", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
}

renderFoods = () => {
    
}