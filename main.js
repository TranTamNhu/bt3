// Mảng dữ liệu Pokémon
const pokemonData = [
    {
        id: 1,
        name: "Bulbasaur",
        img: "./Capture.PNG",
        types: ["Grass", "Poison"],
        colors: ["#78cd56", "#a33da2"],
    },
    {
        id: 2,
        name: "Ivysaur",
        img: "./Capture1.PNG",
        types: ["Grass", "Poison"],
        colors: ["#78cd56", "#a33da2"],
    },
    {
        id: 3,
        name: "Venusaur",
        img: "./Capture2.PNG",
        types: ["Grass", "Poison"],
        colors: ["#78cd56", "#a33da2"],
    },
    {
        id: 4,
        name: "Charmander",
        img: "./Capture3.PNG",
        types: ["Fire"],
        colors: ["#ff411c"],
    },
    {
        id: 5,
        name: "Chameleon",
        img: "./Capture4.PNG",
        types: ["Fire"],
        colors: ["#ff411c"],
    },
    {
        id: 6,
        name: "Charizard",
        img: "./Capture5.PNG",
        types: ["Fire", "Flying"],
        colors: ["#ff411c", "#a98ff0"],
    },
];

// Function để render HTML từ mảng Pokémon

function renderPokemon(pokemonArray){
    const container = document.getElementById('pokemon-container')
    container.innerHTML = "";

    for (let pokemon of pokemonArray)
    {
        let pokemonHTML= ` 
        <div class="card">
            <div class="id">${pokemon.id}</div>
            <img class="img"
                src="${pokemon.img}"
                alt="pokemon.name">
            <div class="infor">
                <h3 class="name">${pokemon.name}</h3>
                <div class="infor--attr">`
    
    for ( let j=0; j< pokemon.types.length; j++)
    {
        pokemonHTML+=` <span style="background-color:${pokemon.colors[j]}">${pokemon.types[j]}</span>`;
        


    }
    pokemonHTML+=`</div>
            </div>
        </div>`
        container.innerHTML += pokemonHTML;

}
}
function clickLoadInfor(){
    renderPokemon(pokemonData);
}

document.querySelector('#load-infor').addEventListener("click",clickLoadInfor);

    
    