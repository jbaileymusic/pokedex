let pokemonList = [
    { name: 'Charmander', height: 0.6, types: 'fire' },
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
    { name: 'Spearow', height: 0.3, types: ['flying', 'normal'] },
    { name: 'Tropius', height: 2, types: ['grass', 'flying'] }
];
document.write(pokemonList[0].name + ' / ', pokemonList[0].height + ' / ', pokemonList[0].types + '<br>');

document.write(pokemonList[1].name + ' / ', pokemonList[1].height + ' / ', pokemonList[1].types + '<br>');

document.write(pokemonList[2].name + ' / ', pokemonList[2].height + ' / ', pokemonList[2].types + '<br>');

document.write(pokemonList[3].name + ' / ', pokemonList[3].height + ' / ', pokemonList[3].types);

