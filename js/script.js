//Start of IIFE
let pokemonRepository = (function() {

    //Main list of Pokemon with stats
    let pokemonList = [
        { 
            name: 'Charmander', 
            height: 0.6, 
            types: 'fire' 
        },
        { 
            name: 'Tropius', 
            height: 2, 
            types: ['grass', ' flying'] 
        },
        { 
            name: 'Charizard', 
            height: 1.7, 
            types: ['fire', ' flying'] 
        },
        { 
            name: 'Spearow', 
            height: 0.3, 
            types: ['flying', ' normal'] 
        }
    ];
    
        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
        }

        //Creates the list of Pokemon buttons
        function addListItem(pokemon) {
            let fullList = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.classList.add('button-class');
            button.innerText = pokemon.name;
            listItem.appendChild(button);
            fullList.appendChild(listItem);
            button.addEventListener ('click', function (showDetails) {
                console.log(showDetails);
            }
            )};

        function showDetails (pokemon) {
            console.log(pokemon);
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };
})();


console.log(pokemonRepository.getAll());
pokemonRepository.add({ 
    name: 'Ivysaur',
    height: 3,
    types: ['grass', ' poison']
});

    //A loop to display all list items using the "forEach Loop" format.
pokemonRepository.getAll().forEach(function(pokemon) {
    
    pokemonRepository.addListItem(pokemon);
});
    
