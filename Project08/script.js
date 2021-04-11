const search = document.getElementById('search-field');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const resultHeading = document.getElementById('result-heading');
const mealContainer = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');

// Function to search meal from API and fatch the data
function searchMeal(e) {
    e.preventDefault()



    // Get the search term from input field
    const term = search.value;

    // Check if search term exists.
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search result for '${term}' </h2>`
                if (data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no search result for '${term}'. Please try a different search</p>`
                }

            })


    } else {
        alert('Please Enter a valid search')
    }
}

// Event listners
//1. Submit

submit.addEventListener('submit', searchMeal);