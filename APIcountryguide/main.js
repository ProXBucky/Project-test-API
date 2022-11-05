var searchBtn = document.querySelector('.search-btn')
var input = document.querySelector('.search-input')
var content = document.querySelector('.content')
var flag = document.querySelector('.flag')
var country = document.querySelector('.country')
var capital = document.querySelector('.capital')


async function changeCountry(countryName) {
    let countryAPI = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    let data = await fetch(countryAPI).then(res => res.json())
    //console.log(data.message)
    if (data.message !== 'Not Found') {
        content.innerHTML = `
     <div class="flag">
         <img src="${data[0].flags.png}" alt="">
    </div>
    <div class="infor">
        <span class="country">${data[0].altSpellings[1]}</span>
        <br>
        Capital: <span class="capital">${data[0].capital[0]}</span>
    </div>
    `
    }
    else {
        content.innerHTML = `
        <h2 class="not-found">NOT FOUND</h2>
        `
    }
}




searchBtn.addEventListener('click', function () {
    let countryName = input.value.trim()
    changeCountry(countryName)
})

document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }

}) 
