// JavaScript source code
var categoriesButton = document.getElementById('navLinkCategories');
var categoriesSub = document.getElementsByClassName('categoriesListItem');


console.log("js loaded");

categoriesButton.addEventListener('mouseover', function () {
    for (var i = 0; i < categoriesSub.length; i++){
        categoriesSub[i].classList.remove('hidden');
    }
    categoriesButton.classList.add('categoriesListBox');
})

categoriesButton.addEventListener('mouseout', function () {
    for (var i = 0; i < categoriesSub.length; i++) {
        categoriesSub[i].classList.add('hidden');
    }
    categoriesButton.classList.remove('categoriesListBox');
})