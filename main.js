// render data in UI

function renderPokemon(data) {

  var main = document.getElementsByTagName("main")[0];
  
  var card = document.createElement("div");
  main.appendChild(card);

  var image = document.createElement("img");
  image.src = data.sprites.front_default;
  card.appendChild(image);

  var h3 = document.createElement("h3");
  h3.textContent = data.name;
  card.appendChild(h3);
}

// fetch API

function getPokemon(url) {
  fetch(url)
    .then((response) => response.json()) //Request JSON
    .then((data) => {
      renderPokemon(data); // get data
    //   console.log(data.name)
    })
    .catch((error) => console.log(error));
    return url;
}

window.onload = function() {
  var countPokemons = 20;
  
  for (var i = 1; i <= countPokemons; i++) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
     getPokemon(url);
  }
};
  
