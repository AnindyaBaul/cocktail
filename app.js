var input = document.getElementById("InputBox")
var BlockBox = document.getElementById("BlockBox")
var listIngredient = document.getElementById("ListIngredient")
var ingredientsDetails = document.getElementById("ingredientsDetails")
var ingredientThumb = document.getElementById("ingredientThumb")
var instructions = document.getElementById("instructions")
var recipeDetails = document.getElementById("recipeDetails")
var mother = document.getElementById("mother")
var defaultDrinks = document.getElementById("default-drinks")
var sr = document.getElementById('sr')
function btn() {
    var InputBox = input.value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${InputBox}`)
        .then(res => res.json())
        .then(data => Recipe(data.drinks))

    BlockBox.innerHTML = "";
    mother.innerHTML=""
    sr.style.display = 'block';
    document.getElementById('details').style.display='none';
}

function Recipe(drinks) {

    for (const drink of drinks) {
        const { strDrinkThumb, strDrink,idDrink } = drink
        // console.log(strDrinkThumb,strDrink)
        const NewDiv = document.createElement("div")
        NewDiv.classList = "col"
        NewDiv.innerHTML = `<img onclick="LoadRecipeDetails('${idDrink}')" class="w-100" src="${strDrinkThumb}"> <p class="text-light text-center">${strDrink}</p>`;

        mother.appendChild(NewDiv)
    }
}
function LoadRecipeDetails(idDrink){
    const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showRecipeDetails(data.drinks[0]))
    document.getElementById('details').style.display='block';
    mother.innerHTML='';
    listIngredient.innerHTML='';
    ingredientThumb.innerHTML='';
    instructions.innerHTML='';
}
function showRecipeDetails(drink){
    // console.log(Object.keys(drink),Object.values(drink))
    // Object.keys(drink).find(x => console.log(x.valueOf('strIngredient1')));
    const{strDrink,strDrinkThumb,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15}=drink;
    // console.log(strDrink,strDrinkThumb,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15)

    ingredientThumb.innerHTML=`<figure>
                                    <img class="w-100 h-100" src="${strDrinkThumb}">
                                    <figcaption class="fs-3 text-center">${strDrink}</figcaption>
                                </figure>`;
    if(strIngredient1!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient1;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient2!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient2;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient3!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient3;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient4!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient4;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient5!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient5;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient6!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient6;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient7!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient7;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient8!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient8;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient9!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient9;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient10!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient10;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient11!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient11;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient12!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient12;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient13!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient13;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient14!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient14;
        listIngredient.appendChild(newLi)
    }
    if(strIngredient15!=null){
        const newLi=document.createElement('li');
        newLi.innerText=strIngredient15;
        listIngredient.appendChild(newLi)
    }
    instructions.innerText=strInstructions;
}
function home() {
    window.location.reload();
}


function defaultFx() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(res => res.json())
        .then(data => searchCat(data.drinks))
}
function searchCat(cats) {
    for (const cat of cats) {
        const { strCategory } = cat;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayDrinks(data.drinks[0]))
    }
}
function displayDrinks(drink) {
    // console.log(drink)
    const { strDrink, strDrinkThumb,idDrink } = drink;
    // console.log(strDrink, strDrinkThumb,idDrink);

    const NewDiv = document.createElement("div")
    NewDiv.classList = "col"
    NewDiv.innerHTML = `<img onclick="LoadRecipeDetails('${idDrink}')" class="w-100" src="${strDrinkThumb}"> <p class="text-light text-center">${strDrink}</p>`;

    mother.appendChild(NewDiv)

}
defaultFx()