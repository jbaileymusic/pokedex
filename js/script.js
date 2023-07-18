//This is the master list array of all Pokemon.
let pokemonList = [
    { 
        name: 'Charmander', 
        height: 0.6, 
        types: 'fire' 
    },
    { 
        name: 'Tropius', 
        height: 2, 
        types: ['grass', 'flying'] 
    },
    { 
        name: 'Charizard', 
        height: 1.7, 
        types: ['fire', 'flying'] 
    },
    { 
        name: 'Spearow', 
        height: 0.3, 
        types: ['flying', 'normal'] 
    }
];

//A loop to display all list items.

for (let i = 0; i < pokemonList.length; i++) 
    if (pokemonList[i].height >= 1.8) {
    document.write(pokemonList[i].name + ' / ', pokemonList[i].height + ' / ', pokemonList[i].types + ' ...Wow, that\'s big!' + '<br>'); 
    } 
    else {document.write(pokemonList[i].name + ' / ', pokemonList[i].height + ' / ', pokemonList[i].types + '<br>')
}
