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

//A loop to display all list items using the "forEach Loop" format.
pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ' / ' + pokemon.height + ' / ' + pokemon.types + '<br><br>');
});


/* THIS IS THE PREVIOUS "FOR LOOP" FORMAT, INCLUDING 'WOW THAT'S BIG'.

for (let i = 0; i < pokemonList.length; i++) 
    if (pokemonList[i].height >= 1.8) {
    document.write(pokemonList[i].name + ' / ', pokemonList[i].height + ' / ', pokemonList[i].types + ' ...Wow, that\'s big!' + '<br><br>'); 
    } 
    else {document.write(pokemonList[i].name + ' / ', pokemonList[i].height + ' / ', pokemonList[i].types + '<br><br>')
}
*/

