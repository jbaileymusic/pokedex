//Start of IIFE holder
let pokemonRepository = (function() {

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

        return {
            add: add,
            getAll: getAll
        };
    })();

        console.log(pokemonRepository.getAll());
        pokemonRepository.add({ 
            name: 'Ivysaur',
            height: 3,
            types: ['grass', ' poison']
        });

    //A loop to display all list items using the "forEach Loop" format, used prior to containing the above function in an IIFE.
    /*pokemonRepository.forEach(function(pokemon) {
        document.write(pokemon.name + ' / ' + pokemon.height + ' / ' + pokemon.types + '<br><br>');
    });
    */
