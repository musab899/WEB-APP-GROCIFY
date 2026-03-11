function showItems(category){

let categories = document.querySelectorAll(".category")

categories.forEach(function(cat){
cat.style.display="none"
})

document.getElementById(category).style.display="flex"

}