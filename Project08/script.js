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
    console.log(term);
}

// Event listners
//1. Submit

submit.addEventListener('submit', searchMeal);