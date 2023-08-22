const pokedex = [
    {
      "number": "001",
      "name": "Bulbasaur",
      "slug": "bulbasaur",
      "weight": 6.9,
      "height": 0.7,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Bulbasaur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
    },
    {
      "number": "002",
      "name": "Ivysaur",
      "slug": "ivysaur",
      "weight": 13,
      "height": 1,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Ivysaur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
    },
    {
      "number": "003",
      "name": "Venusaur",
      "slug": "venusaur",
      "weight": 100,
      "height": 2,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Venusaur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
    },
    {
      "number": "004",
      "name": "Charmander",
      "slug": "charmander",
      "weight": 8.5,
      "height": 0.6,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Charmander",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
    },
    {
      "number": "005",
      "name": "Charmeleon",
      "slug": "charmeleon",
      "weight": 19,
      "height": 1.1,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Charmeleon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"
    },
    {
      "number": "006",
      "name": "Charizard",
      "slug": "charizard",
      "weight": 90.5,
      "height": 1.7,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Charizard",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
    },
    {
      "number": "007",
      "name": "Squirtle",
      "slug": "squirtle",
      "weight": 9,
      "height": 0.5,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Squirtle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
    },
    {
      "number": "008",
      "name": "Wartortle",
      "slug": "wartortle",
      "weight": 22.5,
      "height": 1,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Wartortle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
    },
    {
      "number": "009",
      "name": "Blastoise",
      "slug": "blastoise",
      "weight": 85.5,
      "height": 1.6,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Blastoise",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
    },
    {
      "number": "010",
      "name": "Caterpie",
      "slug": "caterpie",
      "weight": 2.9,
      "height": 0.3,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Caterpie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png"
    },
    {
      "number": "011",
      "name": "Metapod",
      "slug": "metapod",
      "weight": 9.9,
      "height": 0.7,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Metapod",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"
    },
    {
      "number": "012",
      "name": "Butterfree",
      "slug": "butterfree",
      "weight": 32,
      "height": 1.1,
      "abilities": [
        "Compound Eyes"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Butterfree",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"
    },
    {
      "number": "013",
      "name": "Weedle",
      "slug": "weedle",
      "weight": 3.2,
      "height": 0.3,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Weedle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png"
    },
    {
      "number": "014",
      "name": "Kakuna",
      "slug": "kakuna",
      "weight": 10,
      "height": 0.6,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Kakuna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png"
    },
    {
      "number": "015",
      "name": "Beedrill",
      "slug": "beedrill",
      "weight": 29.5,
      "height": 1,
      "abilities": [
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Beedrill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png"
    },
    {
      "number": "016",
      "name": "Pidgey",
      "slug": "pidgey",
      "weight": 1.8,
      "height": 0.3,
      "abilities": [
        "Keen Eye",
        "Tangled Feet"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Pidgey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png"
    },
    {
      "number": "017",
      "name": "Pidgeotto",
      "slug": "pidgeotto",
      "weight": 30,
      "height": 1.1,
      "abilities": [
        "Keen Eye",
        "Tangled Feet"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Pidgeotto",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png"
    },
    {
      "number": "018",
      "name": "Pidgeot",
      "slug": "pidgeot",
      "weight": 39.5,
      "height": 1.5,
      "abilities": [
        "Keen Eye",
        "Tangled Feet"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Pidgeot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png"
    },
    {
      "number": "019",
      "name": "Rattata",
      "slug": "rattata",
      "weight": 3.5,
      "height": 0.3,
      "abilities": [
        "Guts",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Rattata",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png"
    },
    {
      "number": "020",
      "name": "Raticate",
      "slug": "raticate",
      "weight": 18.5,
      "height": 0.7,
      "abilities": [
        "Guts",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Raticate",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png"
    },
    {
      "number": "021",
      "name": "Spearow",
      "slug": "spearow",
      "weight": 2,
      "height": 0.3,
      "abilities": [
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Spearow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png"
    },
    {
      "number": "022",
      "name": "Fearow",
      "slug": "fearow",
      "weight": 38,
      "height": 1.2,
      "abilities": [
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Fearow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png"
    },
    {
      "number": "023",
      "name": "Ekans",
      "slug": "ekans",
      "weight": 6.9,
      "height": 2,
      "abilities": [
        "Intimidate",
        "Shed Skin"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Ekans",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png"
    },
    {
      "number": "024",
      "name": "Arbok",
      "slug": "arbok",
      "weight": 65,
      "height": 3.5,
      "abilities": [
        "Intimidate",
        "Shed Skin"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Arbok",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png"
    },
    {
      "number": "025",
      "name": "Pikachu",
      "slug": "pikachu",
      "weight": 6,
      "height": 0.4,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Pikachu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
    },
    {
      "number": "026",
      "name": "Raichu",
      "slug": "raichu",
      "weight": 30,
      "height": 0.8,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Raichu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png"
    },
    {
      "number": "027",
      "name": "Sandshrew",
      "slug": "sandshrew",
      "weight": 12,
      "height": 0.6,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Sandshrew",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png"
    },
    {
      "number": "028",
      "name": "Sandslash",
      "slug": "sandslash",
      "weight": 29.5,
      "height": 1,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Sandslash",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png"
    },
    {
      "number": "029",
      "name": "Nidoran♀",
      "slug": "nidoran-female",
      "weight": 7,
      "height": 0.4,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Nidoran♀",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png"
    },
    {
      "number": "030",
      "name": "Nidorina",
      "slug": "nidorina",
      "weight": 20,
      "height": 0.8,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Nidorina",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png"
    },
    {
      "number": "031",
      "name": "Nidoqueen",
      "slug": "nidoqueen",
      "weight": 60,
      "height": 1.3,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Ice",
        "Ground"
      ],
      "type": [
        "poison",
        "ground"
      ],
      "ThumbnailAltText": "Nidoqueen",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png"
    },
    {
      "number": "032",
      "name": "Nidoran♂",
      "slug": "nidoran-male",
      "weight": 9,
      "height": 0.5,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Nidoran♂",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png"
    },
    {
      "number": "033",
      "name": "Nidorino",
      "slug": "nidorino",
      "weight": 19.5,
      "height": 0.9,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Nidorino",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png"
    },
    {
      "number": "034",
      "name": "Nidoking",
      "slug": "nidoking",
      "weight": 62,
      "height": 1.4,
      "abilities": [
        "Poison Point",
        "Rivalry"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Ice",
        "Ground"
      ],
      "type": [
        "poison",
        "ground"
      ],
      "ThumbnailAltText": "Nidoking",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png"
    },
    {
      "number": "035",
      "name": "Clefairy",
      "slug": "clefairy",
      "weight": 7.5,
      "height": 0.6,
      "abilities": [
        "Cute Charm",
        "Magic Guard"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Clefairy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png"
    },
    {
      "number": "036",
      "name": "Clefable",
      "slug": "clefable",
      "weight": 40,
      "height": 1.3,
      "abilities": [
        "Cute Charm",
        "Magic Guard"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Clefable",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png"
    },
    {
      "number": "037",
      "name": "Vulpix",
      "slug": "vulpix",
      "weight": 9.9,
      "height": 0.6,
      "abilities": [
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Vulpix",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png"
    },
    {
      "number": "038",
      "name": "Ninetales",
      "slug": "ninetales",
      "weight": 19.9,
      "height": 1.1,
      "abilities": [
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Ninetales",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png"
    },
    {
      "number": "039",
      "name": "Jigglypuff",
      "slug": "jigglypuff",
      "weight": 5.5,
      "height": 0.5,
      "abilities": [
        "Competitive",
        "Cute Charm"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "normal",
        "fairy"
      ],
      "ThumbnailAltText": "Jigglypuff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png"
    },
    {
      "number": "040",
      "name": "Wigglytuff",
      "slug": "wigglytuff",
      "weight": 12,
      "height": 1,
      "abilities": [
        "Competitive",
        "Cute Charm"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "normal",
        "fairy"
      ],
      "ThumbnailAltText": "Wigglytuff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png"
    },
    {
      "number": "041",
      "name": "Zubat",
      "slug": "zubat",
      "weight": 7.5,
      "height": 0.8,
      "abilities": [
        "Inner Focus"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "poison",
        "flying"
      ],
      "ThumbnailAltText": "Zubat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png"
    },
    {
      "number": "042",
      "name": "Golbat",
      "slug": "golbat",
      "weight": 55,
      "height": 1.6,
      "abilities": [
        "Inner Focus"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "poison",
        "flying"
      ],
      "ThumbnailAltText": "Golbat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png"
    },
    {
      "number": "043",
      "name": "Oddish",
      "slug": "oddish",
      "weight": 5.4,
      "height": 0.5,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Oddish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png"
    },
    {
      "number": "044",
      "name": "Gloom",
      "slug": "gloom",
      "weight": 8.6,
      "height": 0.8,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Gloom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png"
    },
    {
      "number": "045",
      "name": "Vileplume",
      "slug": "vileplume",
      "weight": 18.6,
      "height": 1.2,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Vileplume",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png"
    },
    {
      "number": "046",
      "name": "Paras",
      "slug": "paras",
      "weight": 5.4,
      "height": 0.3,
      "abilities": [
        "Dry Skin",
        "Effect Spore"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Paras",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png"
    },
    {
      "number": "047",
      "name": "Parasect",
      "slug": "parasect",
      "weight": 29.5,
      "height": 1,
      "abilities": [
        "Dry Skin",
        "Effect Spore"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Parasect",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png"
    },
    {
      "number": "048",
      "name": "Venonat",
      "slug": "venonat",
      "weight": 30,
      "height": 1,
      "abilities": [
        "Compound Eyes",
        "Tinted Lens"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Venonat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png"
    },
    {
      "number": "049",
      "name": "Venomoth",
      "slug": "venomoth",
      "weight": 12.5,
      "height": 1.5,
      "abilities": [
        "Shield Dust",
        "Tinted Lens"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Venomoth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png"
    },
    {
      "number": "050",
      "name": "Diglett",
      "slug": "diglett",
      "weight": 0.8,
      "height": 0.2,
      "abilities": [
        "Arena Trap",
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Diglett",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png"
    },
    {
      "number": "051",
      "name": "Dugtrio",
      "slug": "dugtrio",
      "weight": 33.3,
      "height": 0.7,
      "abilities": [
        "Arena Trap",
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Dugtrio",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png"
    },
    {
      "number": "052",
      "name": "Meowth",
      "slug": "meowth",
      "weight": 4.2,
      "height": 0.4,
      "abilities": [
        "Pickup",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Meowth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png"
    },
    {
      "number": "053",
      "name": "Persian",
      "slug": "persian",
      "weight": 32,
      "height": 1,
      "abilities": [
        "Limber",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Persian",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png"
    },
    {
      "number": "054",
      "name": "Psyduck",
      "slug": "psyduck",
      "weight": 19.6,
      "height": 0.8,
      "abilities": [
        "Cloud Nine",
        "Damp"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Psyduck",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png"
    },
    {
      "number": "055",
      "name": "Golduck",
      "slug": "golduck",
      "weight": 76.6,
      "height": 1.7,
      "abilities": [
        "Cloud Nine",
        "Damp"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Golduck",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png"
    },
    {
      "number": "056",
      "name": "Mankey",
      "slug": "mankey",
      "weight": 28,
      "height": 0.5,
      "abilities": [
        "Anger Point",
        "Vital Spirit"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Mankey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png"
    },
    {
      "number": "057",
      "name": "Primeape",
      "slug": "primeape",
      "weight": 32,
      "height": 1,
      "abilities": [
        "Anger Point",
        "Vital Spirit"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Primeape",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png"
    },
    {
      "number": "058",
      "name": "Growlithe",
      "slug": "growlithe",
      "weight": 19,
      "height": 0.7,
      "abilities": [
        "Flash Fire",
        "Intimidate"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Growlithe",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png"
    },
    {
      "number": "059",
      "name": "Arcanine",
      "slug": "arcanine",
      "weight": 155,
      "height": 1.9,
      "abilities": [
        "Flash Fire",
        "Intimidate"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Arcanine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png"
    },
    {
      "number": "060",
      "name": "Poliwag",
      "slug": "poliwag",
      "weight": 12.4,
      "height": 0.6,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Poliwag",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png"
    },
    {
      "number": "061",
      "name": "Poliwhirl",
      "slug": "poliwhirl",
      "weight": 20,
      "height": 1,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Poliwhirl",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png"
    },
    {
      "number": "062",
      "name": "Poliwrath",
      "slug": "poliwrath",
      "weight": 54,
      "height": 1.3,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Flying",
        "Psychic",
        "Electric"
      ],
      "type": [
        "water",
        "fighting"
      ],
      "ThumbnailAltText": "Poliwrath",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png"
    },
    {
      "number": "063",
      "name": "Abra",
      "slug": "abra",
      "weight": 19.5,
      "height": 0.9,
      "abilities": [
        "Inner Focus",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Abra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png"
    },
    {
      "number": "064",
      "name": "Kadabra",
      "slug": "kadabra",
      "weight": 56.5,
      "height": 1.3,
      "abilities": [
        "Inner Focus",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Kadabra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png"
    },
    {
      "number": "065",
      "name": "Alakazam",
      "slug": "alakazam",
      "weight": 48,
      "height": 1.5,
      "abilities": [
        "Inner Focus",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Alakazam",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png"
    },
    {
      "number": "066",
      "name": "Machop",
      "slug": "machop",
      "weight": 19.5,
      "height": 0.8,
      "abilities": [
        "Guts",
        "No Guard"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Machop",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png"
    },
    {
      "number": "067",
      "name": "Machoke",
      "slug": "machoke",
      "weight": 70.5,
      "height": 1.5,
      "abilities": [
        "Guts",
        "No Guard"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Machoke",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png"
    },
    {
      "number": "068",
      "name": "Machamp",
      "slug": "machamp",
      "weight": 130,
      "height": 1.6,
      "abilities": [
        "Guts",
        "No Guard"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Machamp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png"
    },
    {
      "number": "069",
      "name": "Bellsprout",
      "slug": "bellsprout",
      "weight": 4,
      "height": 0.7,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Bellsprout",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png"
    },
    {
      "number": "070",
      "name": "Weepinbell",
      "slug": "weepinbell",
      "weight": 6.4,
      "height": 1,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Weepinbell",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png"
    },
    {
      "number": "071",
      "name": "Victreebel",
      "slug": "victreebel",
      "weight": 15.5,
      "height": 1.7,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Victreebel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png"
    },
    {
      "number": "072",
      "name": "Tentacool",
      "slug": "tentacool",
      "weight": 45.5,
      "height": 0.9,
      "abilities": [
        "Clear Body",
        "Liquid Ooze"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "water",
        "poison"
      ],
      "ThumbnailAltText": "Tentacool",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png"
    },
    {
      "number": "073",
      "name": "Tentacruel",
      "slug": "tentacruel",
      "weight": 55,
      "height": 1.6,
      "abilities": [
        "Clear Body",
        "Liquid Ooze"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "water",
        "poison"
      ],
      "ThumbnailAltText": "Tentacruel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png"
    },
    {
      "number": "074",
      "name": "Geodude",
      "slug": "geodude",
      "weight": 20,
      "height": 0.4,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Geodude",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png"
    },
    {
      "number": "075",
      "name": "Graveler",
      "slug": "graveler",
      "weight": 105,
      "height": 1,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Graveler",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png"
    },
    {
      "number": "076",
      "name": "Golem",
      "slug": "golem",
      "weight": 300,
      "height": 1.4,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Golem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png"
    },
    {
      "number": "077",
      "name": "Ponyta",
      "slug": "ponyta",
      "weight": 30,
      "height": 1,
      "abilities": [
        "Flash Fire",
        "Run Away"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Ponyta",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png"
    },
    {
      "number": "078",
      "name": "Rapidash",
      "slug": "rapidash",
      "weight": 95,
      "height": 1.7,
      "abilities": [
        "Flash Fire",
        "Run Away"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Rapidash",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png"
    },
    {
      "number": "079",
      "name": "Slowpoke",
      "slug": "slowpoke",
      "weight": 36,
      "height": 1.2,
      "abilities": [
        "Oblivious",
        "Own Tempo"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric",
        "Bug"
      ],
      "type": [
        "water",
        "psychic"
      ],
      "ThumbnailAltText": "Slowpoke",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png"
    },
    {
      "number": "080",
      "name": "Slowbro",
      "slug": "slowbro",
      "weight": 78.5,
      "height": 1.6,
      "abilities": [
        "Oblivious",
        "Own Tempo"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric",
        "Bug"
      ],
      "type": [
        "water",
        "psychic"
      ],
      "ThumbnailAltText": "Slowbro",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png"
    },
    {
      "number": "081",
      "name": "Magnemite",
      "slug": "magnemite",
      "weight": 6,
      "height": 0.3,
      "abilities": [
        "Magnet Pull",
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "steel"
      ],
      "ThumbnailAltText": "Magnemite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png"
    },
    {
      "number": "082",
      "name": "Magneton",
      "slug": "magneton",
      "weight": 60,
      "height": 1,
      "abilities": [
        "Magnet Pull",
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "steel"
      ],
      "ThumbnailAltText": "Magneton",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png"
    },
    {
      "number": "083",
      "name": "Farfetch’d",
      "slug": "farfetchd",
      "weight": 15,
      "height": 0.8,
      "abilities": [
        "Inner Focus",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Farfetch’d",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png"
    },
    {
      "number": "084",
      "name": "Doduo",
      "slug": "doduo",
      "weight": 39.2,
      "height": 1.4,
      "abilities": [
        "Early Bird",
        "Run Away"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Doduo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png"
    },
    {
      "number": "085",
      "name": "Dodrio",
      "slug": "dodrio",
      "weight": 85.2,
      "height": 1.8,
      "abilities": [
        "Early Bird",
        "Run Away"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Dodrio",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png"
    },
    {
      "number": "086",
      "name": "Seel",
      "slug": "seel",
      "weight": 90,
      "height": 1.1,
      "abilities": [
        "Hydration",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Seel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png"
    },
    {
      "number": "087",
      "name": "Dewgong",
      "slug": "dewgong",
      "weight": 120,
      "height": 1.7,
      "abilities": [
        "Hydration",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "water",
        "ice"
      ],
      "ThumbnailAltText": "Dewgong",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png"
    },
    {
      "number": "088",
      "name": "Grimer",
      "slug": "grimer",
      "weight": 30,
      "height": 0.9,
      "abilities": [
        "Stench",
        "Sticky Hold"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Grimer",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png"
    },
    {
      "number": "089",
      "name": "Muk",
      "slug": "muk",
      "weight": 30,
      "height": 1.2,
      "abilities": [
        "Stench",
        "Sticky Hold"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Muk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png"
    },
    {
      "number": "090",
      "name": "Shellder",
      "slug": "shellder",
      "weight": 4,
      "height": 0.3,
      "abilities": [
        "Shell Armor",
        "Skill Link"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Shellder",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png"
    },
    {
      "number": "091",
      "name": "Cloyster",
      "slug": "cloyster",
      "weight": 132.5,
      "height": 1.5,
      "abilities": [
        "Shell Armor",
        "Skill Link"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "water",
        "ice"
      ],
      "ThumbnailAltText": "Cloyster",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png"
    },
    {
      "number": "092",
      "name": "Gastly",
      "slug": "gastly",
      "weight": 0.1,
      "height": 1.3,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Psychic",
        "Ground"
      ],
      "type": [
        "ghost",
        "poison"
      ],
      "ThumbnailAltText": "Gastly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png"
    },
    {
      "number": "093",
      "name": "Haunter",
      "slug": "haunter",
      "weight": 0.1,
      "height": 1.6,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Psychic",
        "Ground"
      ],
      "type": [
        "ghost",
        "poison"
      ],
      "ThumbnailAltText": "Haunter",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png"
    },
    {
      "number": "094",
      "name": "Gengar",
      "slug": "gengar",
      "weight": 40.5,
      "height": 1.5,
      "abilities": [
        "Cursed Body"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Psychic",
        "Ground"
      ],
      "type": [
        "ghost",
        "poison"
      ],
      "ThumbnailAltText": "Gengar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png"
    },
    {
      "number": "095",
      "name": "Onix",
      "slug": "onix",
      "weight": 210,
      "height": 8.8,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Onix",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png"
    },
    {
      "number": "096",
      "name": "Drowzee",
      "slug": "drowzee",
      "weight": 32.4,
      "height": 1,
      "abilities": [
        "Forewarn",
        "Insomnia"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Drowzee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png"
    },
    {
      "number": "097",
      "name": "Hypno",
      "slug": "hypno",
      "weight": 75.6,
      "height": 1.6,
      "abilities": [
        "Forewarn",
        "Insomnia"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Hypno",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png"
    },
    {
      "number": "098",
      "name": "Krabby",
      "slug": "krabby",
      "weight": 6.5,
      "height": 0.4,
      "abilities": [
        "Hyper Cutter",
        "Shell Armor"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Krabby",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png"
    },
    {
      "number": "099",
      "name": "Kingler",
      "slug": "kingler",
      "weight": 60,
      "height": 1.3,
      "abilities": [
        "Hyper Cutter",
        "Shell Armor"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Kingler",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png"
    },
    {
      "number": "100",
      "name": "Voltorb",
      "slug": "voltorb",
      "weight": 10.4,
      "height": 0.5,
      "abilities": [
        "Soundproof",
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Voltorb",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png"
    },
    {
      "number": "101",
      "name": "Electrode",
      "slug": "electrode",
      "weight": 66.6,
      "height": 1.2,
      "abilities": [
        "Soundproof",
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Electrode",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png"
    },
    {
      "number": "102",
      "name": "Exeggcute",
      "slug": "exeggcute",
      "weight": 2.5,
      "height": 0.4,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Ice",
        "Dark",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass",
        "psychic"
      ],
      "ThumbnailAltText": "Exeggcute",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/102.png"
    },
    {
      "number": "103",
      "name": "Exeggutor",
      "slug": "exeggutor",
      "weight": 120,
      "height": 2,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Ice",
        "Dark",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass",
        "psychic"
      ],
      "ThumbnailAltText": "Exeggutor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/103.png"
    },
    {
      "number": "104",
      "name": "Cubone",
      "slug": "cubone",
      "weight": 6.5,
      "height": 0.4,
      "abilities": [
        "Lightning Rod",
        "Rock Head"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Cubone",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png"
    },
    {
      "number": "105",
      "name": "Marowak",
      "slug": "marowak",
      "weight": 45,
      "height": 1,
      "abilities": [
        "Lightning Rod",
        "Rock Head"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Marowak",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png"
    },
    {
      "number": "106",
      "name": "Hitmonlee",
      "slug": "hitmonlee",
      "weight": 49.8,
      "height": 1.5,
      "abilities": [
        "Limber",
        "Reckless"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Hitmonlee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/106.png"
    },
    {
      "number": "107",
      "name": "Hitmonchan",
      "slug": "hitmonchan",
      "weight": 50.2,
      "height": 1.4,
      "abilities": [
        "Iron Fist",
        "Keen Eye"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Hitmonchan",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png"
    },
    {
      "number": "108",
      "name": "Lickitung",
      "slug": "lickitung",
      "weight": 65.5,
      "height": 1.2,
      "abilities": [
        "Oblivious",
        "Own Tempo"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Lickitung",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/108.png"
    },
    {
      "number": "109",
      "name": "Koffing",
      "slug": "koffing",
      "weight": 1,
      "height": 0.6,
      "abilities": [
        "Levitate",
        "Neutralizing Gas"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Koffing",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png"
    },
    {
      "number": "110",
      "name": "Weezing",
      "slug": "weezing",
      "weight": 9.5,
      "height": 1.2,
      "abilities": [
        "Levitate",
        "Neutralizing Gas"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Weezing",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/110.png"
    },
    {
      "number": "111",
      "name": "Rhyhorn",
      "slug": "rhyhorn",
      "weight": 115,
      "height": 1,
      "abilities": [
        "Lightning Rod",
        "Rock Head"
      ],
      "weakness": [
        "Steel",
        "Ice",
        "Water",
        "Fighting",
        "Grass",
        "Ground"
      ],
      "type": [
        "ground",
        "rock"
      ],
      "ThumbnailAltText": "Rhyhorn",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/111.png"
    },
    {
      "number": "112",
      "name": "Rhydon",
      "slug": "rhydon",
      "weight": 120,
      "height": 1.9,
      "abilities": [
        "Lightning Rod",
        "Rock Head"
      ],
      "weakness": [
        "Steel",
        "Ice",
        "Water",
        "Fighting",
        "Grass",
        "Ground"
      ],
      "type": [
        "ground",
        "rock"
      ],
      "ThumbnailAltText": "Rhydon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/112.png"
    },
    {
      "number": "113",
      "name": "Chansey",
      "slug": "chansey",
      "weight": 34.6,
      "height": 1.1,
      "abilities": [
        "Natural Cure",
        "Serene Grace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Chansey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/113.png"
    },
    {
      "number": "114",
      "name": "Tangela",
      "slug": "tangela",
      "weight": 35,
      "height": 1,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Tangela",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/114.png"
    },
    {
      "number": "115",
      "name": "Kangaskhan",
      "slug": "kangaskhan",
      "weight": 80,
      "height": 2.2,
      "abilities": [
        "Early Bird",
        "Scrappy"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Kangaskhan",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/115.png"
    },
    {
      "number": "116",
      "name": "Horsea",
      "slug": "horsea",
      "weight": 8,
      "height": 0.4,
      "abilities": [
        "Sniper",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Horsea",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/116.png"
    },
    {
      "number": "117",
      "name": "Seadra",
      "slug": "seadra",
      "weight": 25,
      "height": 1.2,
      "abilities": [
        "Poison Point",
        "Sniper"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Seadra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/117.png"
    },
    {
      "number": "118",
      "name": "Goldeen",
      "slug": "goldeen",
      "weight": 15,
      "height": 0.6,
      "abilities": [
        "Swift Swim",
        "Water Veil"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Goldeen",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/118.png"
    },
    {
      "number": "119",
      "name": "Seaking",
      "slug": "seaking",
      "weight": 39,
      "height": 1.3,
      "abilities": [
        "Swift Swim",
        "Water Veil"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Seaking",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png"
    },
    {
      "number": "120",
      "name": "Staryu",
      "slug": "staryu",
      "weight": 34.5,
      "height": 0.8,
      "abilities": [
        "Illuminate",
        "Natural Cure"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Staryu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/120.png"
    },
    {
      "number": "121",
      "name": "Starmie",
      "slug": "starmie",
      "weight": 80,
      "height": 1.1,
      "abilities": [
        "Illuminate",
        "Natural Cure"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric",
        "Bug"
      ],
      "type": [
        "water",
        "psychic"
      ],
      "ThumbnailAltText": "Starmie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/121.png"
    },
    {
      "number": "122",
      "name": "Mr. Mime",
      "slug": "mr-mime",
      "weight": 54.5,
      "height": 1.3,
      "abilities": [
        "Filter",
        "Soundproof"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Mr. Mime",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png"
    },
    {
      "number": "123",
      "name": "Scyther",
      "slug": "scyther",
      "weight": 56,
      "height": 1.5,
      "abilities": [
        "Swarm",
        "Technician"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Scyther",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/123.png"
    },
    {
      "number": "124",
      "name": "Jynx",
      "slug": "jynx",
      "weight": 40.6,
      "height": 1.4,
      "abilities": [
        "Forewarn",
        "Oblivious"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Fire",
        "Dark",
        "Rock",
        "Bug"
      ],
      "type": [
        "ice",
        "psychic"
      ],
      "ThumbnailAltText": "Jynx",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/124.png"
    },
    {
      "number": "125",
      "name": "Electabuzz",
      "slug": "electabuzz",
      "weight": 30,
      "height": 1.1,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Electabuzz",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png"
    },
    {
      "number": "126",
      "name": "Magmar",
      "slug": "magmar",
      "weight": 44.5,
      "height": 1.3,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Magmar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/126.png"
    },
    {
      "number": "127",
      "name": "Pinsir",
      "slug": "pinsir",
      "weight": 55,
      "height": 1.5,
      "abilities": [
        "Hyper Cutter",
        "Mold Breaker"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Pinsir",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/127.png"
    },
    {
      "number": "128",
      "name": "Tauros",
      "slug": "tauros",
      "weight": 88.4,
      "height": 1.4,
      "abilities": [
        "Anger Point",
        "Intimidate"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Tauros",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/128.png"
    },
    {
      "number": "129",
      "name": "Magikarp",
      "slug": "magikarp",
      "weight": 10,
      "height": 0.9,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Magikarp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png"
    },
    {
      "number": "130",
      "name": "Gyarados",
      "slug": "gyarados",
      "weight": 235,
      "height": 6.5,
      "abilities": [
        "Intimidate"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Gyarados",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png"
    },
    {
      "number": "131",
      "name": "Lapras",
      "slug": "lapras",
      "weight": 220,
      "height": 2.5,
      "abilities": [
        "Shell Armor",
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "water",
        "ice"
      ],
      "ThumbnailAltText": "Lapras",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/131.png"
    },
    {
      "number": "132",
      "name": "Ditto",
      "slug": "ditto",
      "weight": 4,
      "height": 0.3,
      "abilities": [
        "Limber"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Ditto",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/132.png"
    },
    {
      "number": "133",
      "name": "Eevee",
      "slug": "eevee",
      "weight": 6.5,
      "height": 0.3,
      "abilities": [
        "Adaptability",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Eevee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png"
    },
    {
      "number": "134",
      "name": "Vaporeon",
      "slug": "vaporeon",
      "weight": 29,
      "height": 1,
      "abilities": [
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Vaporeon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png"
    },
    {
      "number": "135",
      "name": "Jolteon",
      "slug": "jolteon",
      "weight": 24.5,
      "height": 0.8,
      "abilities": [
        "Volt Absorb"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Jolteon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png"
    },
    {
      "number": "136",
      "name": "Flareon",
      "slug": "flareon",
      "weight": 25,
      "height": 0.9,
      "abilities": [
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Flareon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png"
    },
    {
      "number": "137",
      "name": "Porygon",
      "slug": "porygon",
      "weight": 36.5,
      "height": 0.8,
      "abilities": [
        "Download",
        "Trace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Porygon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/137.png"
    },
    {
      "number": "138",
      "name": "Omanyte",
      "slug": "omanyte",
      "weight": 7.5,
      "height": 0.4,
      "abilities": [
        "Shell Armor",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Omanyte",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/138.png"
    },
    {
      "number": "139",
      "name": "Omastar",
      "slug": "omastar",
      "weight": 35,
      "height": 1,
      "abilities": [
        "Shell Armor",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Omastar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/139.png"
    },
    {
      "number": "140",
      "name": "Kabuto",
      "slug": "kabuto",
      "weight": 11.5,
      "height": 0.5,
      "abilities": [
        "Battle Armor",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Kabuto",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/140.png"
    },
    {
      "number": "141",
      "name": "Kabutops",
      "slug": "kabutops",
      "weight": 40.5,
      "height": 1.3,
      "abilities": [
        "Battle Armor",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Kabutops",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png"
    },
    {
      "number": "142",
      "name": "Aerodactyl",
      "slug": "aerodactyl",
      "weight": 59,
      "height": 1.8,
      "abilities": [
        "Pressure",
        "Rock Head"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "rock",
        "flying"
      ],
      "ThumbnailAltText": "Aerodactyl",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/142.png"
    },
    {
      "number": "143",
      "name": "Snorlax",
      "slug": "snorlax",
      "weight": 460,
      "height": 2.1,
      "abilities": [
        "Immunity",
        "Thick Fat"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Snorlax",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png"
    },
    {
      "number": "144",
      "name": "Articuno",
      "slug": "articuno",
      "weight": 55.4,
      "height": 1.7,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Electric",
        "Rock"
      ],
      "type": [
        "ice",
        "flying"
      ],
      "ThumbnailAltText": "Articuno",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png"
    },
    {
      "number": "145",
      "name": "Zapdos",
      "slug": "zapdos",
      "weight": 52.6,
      "height": 1.6,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ice",
        "Rock"
      ],
      "type": [
        "electric",
        "flying"
      ],
      "ThumbnailAltText": "Zapdos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png"
    },
    {
      "number": "146",
      "name": "Moltres",
      "slug": "moltres",
      "weight": 60,
      "height": 2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Moltres",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png"
    },
    {
      "number": "147",
      "name": "Dratini",
      "slug": "dratini",
      "weight": 3.3,
      "height": 1.8,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Dratini",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png"
    },
    {
      "number": "148",
      "name": "Dragonair",
      "slug": "dragonair",
      "weight": 16.5,
      "height": 4,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Dragonair",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png"
    },
    {
      "number": "149",
      "name": "Dragonite",
      "slug": "dragonite",
      "weight": 210,
      "height": 2.2,
      "abilities": [
        "Inner Focus"
      ],
      "weakness": [
        "Fairy",
        "Dragon",
        "Ice",
        "Rock"
      ],
      "type": [
        "dragon",
        "flying"
      ],
      "ThumbnailAltText": "Dragonite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png"
    },
    {
      "number": "150",
      "name": "Mewtwo",
      "slug": "mewtwo",
      "weight": 122,
      "height": 2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Mewtwo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png"
    },
    {
      "number": "151",
      "name": "Mew",
      "slug": "mew",
      "weight": 4,
      "height": 0.4,
      "abilities": [
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Mew",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png"
    },
    {
      "number": "152",
      "name": "Chikorita",
      "slug": "chikorita",
      "weight": 6.4,
      "height": 0.9,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Chikorita",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png"
    },
    {
      "number": "153",
      "name": "Bayleef",
      "slug": "bayleef",
      "weight": 15.8,
      "height": 1.2,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Bayleef",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png"
    },
    {
      "number": "154",
      "name": "Meganium",
      "slug": "meganium",
      "weight": 100.5,
      "height": 1.8,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Meganium",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png"
    },
    {
      "number": "155",
      "name": "Cyndaquil",
      "slug": "cyndaquil",
      "weight": 7.9,
      "height": 0.5,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Cyndaquil",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png"
    },
    {
      "number": "156",
      "name": "Quilava",
      "slug": "quilava",
      "weight": 19,
      "height": 0.9,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Quilava",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png"
    },
    {
      "number": "157",
      "name": "Typhlosion",
      "slug": "typhlosion",
      "weight": 79.5,
      "height": 1.7,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Typhlosion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png"
    },
    {
      "number": "158",
      "name": "Totodile",
      "slug": "totodile",
      "weight": 9.5,
      "height": 0.6,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Totodile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png"
    },
    {
      "number": "159",
      "name": "Croconaw",
      "slug": "croconaw",
      "weight": 25,
      "height": 1.1,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Croconaw",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png"
    },
    {
      "number": "160",
      "name": "Feraligatr",
      "slug": "feraligatr",
      "weight": 88.8,
      "height": 2.3,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Feraligatr",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png"
    },
    {
      "number": "161",
      "name": "Sentret",
      "slug": "sentret",
      "weight": 6,
      "height": 0.8,
      "abilities": [
        "Keen Eye",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Sentret",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/161.png"
    },
    {
      "number": "162",
      "name": "Furret",
      "slug": "furret",
      "weight": 32.5,
      "height": 1.8,
      "abilities": [
        "Keen Eye",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Furret",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/162.png"
    },
    {
      "number": "163",
      "name": "Hoothoot",
      "slug": "hoothoot",
      "weight": 21.2,
      "height": 0.7,
      "abilities": [
        "Insomnia",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Hoothoot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/163.png"
    },
    {
      "number": "164",
      "name": "Noctowl",
      "slug": "noctowl",
      "weight": 40.8,
      "height": 1.6,
      "abilities": [
        "Insomnia",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Noctowl",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/164.png"
    },
    {
      "number": "165",
      "name": "Ledyba",
      "slug": "ledyba",
      "weight": 10.8,
      "height": 1,
      "abilities": [
        "Early Bird",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Ledyba",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/165.png"
    },
    {
      "number": "166",
      "name": "Ledian",
      "slug": "ledian",
      "weight": 35.6,
      "height": 1.4,
      "abilities": [
        "Early Bird",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Ledian",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/166.png"
    },
    {
      "number": "167",
      "name": "Spinarak",
      "slug": "spinarak",
      "weight": 8.5,
      "height": 0.5,
      "abilities": [
        "Insomnia",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Spinarak",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/167.png"
    },
    {
      "number": "168",
      "name": "Ariados",
      "slug": "ariados",
      "weight": 33.5,
      "height": 1.1,
      "abilities": [
        "Insomnia",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Ariados",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/168.png"
    },
    {
      "number": "169",
      "name": "Crobat",
      "slug": "crobat",
      "weight": 75,
      "height": 1.8,
      "abilities": [
        "Inner Focus"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "poison",
        "flying"
      ],
      "ThumbnailAltText": "Crobat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/169.png"
    },
    {
      "number": "170",
      "name": "Chinchou",
      "slug": "chinchou",
      "weight": 12,
      "height": 0.5,
      "abilities": [
        "Illuminate",
        "Volt Absorb"
      ],
      "weakness": [
        "Grass",
        "Ground"
      ],
      "type": [
        "water",
        "electric"
      ],
      "ThumbnailAltText": "Chinchou",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/170.png"
    },
    {
      "number": "171",
      "name": "Lanturn",
      "slug": "lanturn",
      "weight": 22.5,
      "height": 1.2,
      "abilities": [
        "Illuminate",
        "Volt Absorb"
      ],
      "weakness": [
        "Grass",
        "Ground"
      ],
      "type": [
        "water",
        "electric"
      ],
      "ThumbnailAltText": "Lanturn",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/171.png"
    },
    {
      "number": "172",
      "name": "Pichu",
      "slug": "pichu",
      "weight": 2,
      "height": 0.3,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Pichu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png"
    },
    {
      "number": "173",
      "name": "Cleffa",
      "slug": "cleffa",
      "weight": 3,
      "height": 0.3,
      "abilities": [
        "Cute Charm",
        "Magic Guard"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Cleffa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/173.png"
    },
    {
      "number": "174",
      "name": "Igglybuff",
      "slug": "igglybuff",
      "weight": 1,
      "height": 0.3,
      "abilities": [
        "Competitive",
        "Cute Charm"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "normal",
        "fairy"
      ],
      "ThumbnailAltText": "Igglybuff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png"
    },
    {
      "number": "175",
      "name": "Togepi",
      "slug": "togepi",
      "weight": 1.5,
      "height": 0.3,
      "abilities": [
        "Hustle",
        "Serene Grace"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Togepi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png"
    },
    {
      "number": "176",
      "name": "Togetic",
      "slug": "togetic",
      "weight": 3.2,
      "height": 0.6,
      "abilities": [
        "Hustle",
        "Serene Grace"
      ],
      "weakness": [
        "Steel",
        "Poison",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "fairy",
        "flying"
      ],
      "ThumbnailAltText": "Togetic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/176.png"
    },
    {
      "number": "177",
      "name": "Natu",
      "slug": "natu",
      "weight": 2,
      "height": 0.2,
      "abilities": [
        "Early Bird",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Natu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/177.png"
    },
    {
      "number": "178",
      "name": "Xatu",
      "slug": "xatu",
      "weight": 15,
      "height": 1.5,
      "abilities": [
        "Early Bird",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Xatu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/178.png"
    },
    {
      "number": "179",
      "name": "Mareep",
      "slug": "mareep",
      "weight": 7.8,
      "height": 0.6,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Mareep",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png"
    },
    {
      "number": "180",
      "name": "Flaaffy",
      "slug": "flaaffy",
      "weight": 13.3,
      "height": 0.8,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Flaaffy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/180.png"
    },
    {
      "number": "181",
      "name": "Ampharos",
      "slug": "ampharos",
      "weight": 61.5,
      "height": 1.4,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Ampharos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/181.png"
    },
    {
      "number": "182",
      "name": "Bellossom",
      "slug": "bellossom",
      "weight": 5.8,
      "height": 0.4,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Bellossom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/182.png"
    },
    {
      "number": "183",
      "name": "Marill",
      "slug": "marill",
      "weight": 8.5,
      "height": 0.4,
      "abilities": [
        "Huge Power",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Poison"
      ],
      "type": [
        "water",
        "fairy"
      ],
      "ThumbnailAltText": "Marill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/183.png"
    },
    {
      "number": "184",
      "name": "Azumarill",
      "slug": "azumarill",
      "weight": 28.5,
      "height": 0.8,
      "abilities": [
        "Huge Power",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Poison"
      ],
      "type": [
        "water",
        "fairy"
      ],
      "ThumbnailAltText": "Azumarill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/184.png"
    },
    {
      "number": "185",
      "name": "Sudowoodo",
      "slug": "sudowoodo",
      "weight": 38,
      "height": 1.2,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Sudowoodo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/185.png"
    },
    {
      "number": "186",
      "name": "Politoed",
      "slug": "politoed",
      "weight": 33.9,
      "height": 1.1,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Politoed",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/186.png"
    },
    {
      "number": "187",
      "name": "Hoppip",
      "slug": "hoppip",
      "weight": 0.5,
      "height": 0.4,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Hoppip",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/187.png"
    },
    {
      "number": "188",
      "name": "Skiploom",
      "slug": "skiploom",
      "weight": 1,
      "height": 0.6,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Skiploom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/188.png"
    },
    {
      "number": "189",
      "name": "Jumpluff",
      "slug": "jumpluff",
      "weight": 3,
      "height": 0.8,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Jumpluff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png"
    },
    {
      "number": "190",
      "name": "Aipom",
      "slug": "aipom",
      "weight": 11.5,
      "height": 0.8,
      "abilities": [
        "Pickup",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Aipom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/190.png"
    },
    {
      "number": "191",
      "name": "Sunkern",
      "slug": "sunkern",
      "weight": 1.8,
      "height": 0.3,
      "abilities": [
        "Chlorophyll",
        "Solar Power"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Sunkern",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/191.png"
    },
    {
      "number": "192",
      "name": "Sunflora",
      "slug": "sunflora",
      "weight": 8.5,
      "height": 0.8,
      "abilities": [
        "Chlorophyll",
        "Solar Power"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Sunflora",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/192.png"
    },
    {
      "number": "193",
      "name": "Yanma",
      "slug": "yanma",
      "weight": 38,
      "height": 1.2,
      "abilities": [
        "Compound Eyes",
        "Speed Boost"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Yanma",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/193.png"
    },
    {
      "number": "194",
      "name": "Wooper",
      "slug": "wooper",
      "weight": 8.5,
      "height": 0.4,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Wooper",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/194.png"
    },
    {
      "number": "195",
      "name": "Quagsire",
      "slug": "quagsire",
      "weight": 75,
      "height": 1.4,
      "abilities": [
        "Damp",
        "Water Absorb"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Quagsire",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/195.png"
    },
    {
      "number": "196",
      "name": "Espeon",
      "slug": "espeon",
      "weight": 26.5,
      "height": 0.9,
      "abilities": [
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Espeon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png"
    },
    {
      "number": "197",
      "name": "Umbreon",
      "slug": "umbreon",
      "weight": 27,
      "height": 1,
      "abilities": [
        "Synchronize"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Umbreon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/197.png"
    },
    {
      "number": "198",
      "name": "Murkrow",
      "slug": "murkrow",
      "weight": 2.1,
      "height": 0.5,
      "abilities": [
        "Insomnia",
        "Super Luck"
      ],
      "weakness": [
        "Fairy",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "dark",
        "flying"
      ],
      "ThumbnailAltText": "Murkrow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/198.png"
    },
    {
      "number": "199",
      "name": "Slowking",
      "slug": "slowking",
      "weight": 79.5,
      "height": 2,
      "abilities": [
        "Oblivious",
        "Own Tempo"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric",
        "Bug"
      ],
      "type": [
        "water",
        "psychic"
      ],
      "ThumbnailAltText": "Slowking",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png"
    },
    {
      "number": "200",
      "name": "Misdreavus",
      "slug": "misdreavus",
      "weight": 1,
      "height": 0.7,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Misdreavus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/200.png"
    },
    {
      "number": "201",
      "name": "Unown",
      "slug": "unown",
      "weight": 5,
      "height": 0.5,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Unown",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/201.png"
    },
    {
      "number": "202",
      "name": "Wobbuffet",
      "slug": "wobbuffet",
      "weight": 28.5,
      "height": 1.3,
      "abilities": [
        "Shadow Tag"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Wobbuffet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/202.png"
    },
    {
      "number": "203",
      "name": "Girafarig",
      "slug": "girafarig",
      "weight": 41.5,
      "height": 1.5,
      "abilities": [
        "Early Bird",
        "Inner Focus"
      ],
      "weakness": [
        "Dark",
        "Bug"
      ],
      "type": [
        "normal",
        "psychic"
      ],
      "ThumbnailAltText": "Girafarig",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/203.png"
    },
    {
      "number": "204",
      "name": "Pineco",
      "slug": "pineco",
      "weight": 7.2,
      "height": 0.6,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Pineco",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/204.png"
    },
    {
      "number": "205",
      "name": "Forretress",
      "slug": "forretress",
      "weight": 125.8,
      "height": 1.2,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Fire"
      ],
      "type": [
        "bug",
        "steel"
      ],
      "ThumbnailAltText": "Forretress",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png"
    },
    {
      "number": "206",
      "name": "Dunsparce",
      "slug": "dunsparce",
      "weight": 14,
      "height": 1.5,
      "abilities": [
        "Run Away",
        "Serene Grace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Dunsparce",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/206.png"
    },
    {
      "number": "207",
      "name": "Gligar",
      "slug": "gligar",
      "weight": 64.8,
      "height": 1.1,
      "abilities": [
        "Hyper Cutter",
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Ice"
      ],
      "type": [
        "ground",
        "flying"
      ],
      "ThumbnailAltText": "Gligar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/207.png"
    },
    {
      "number": "208",
      "name": "Steelix",
      "slug": "steelix",
      "weight": 400,
      "height": 9.2,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "ground"
      ],
      "ThumbnailAltText": "Steelix",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/208.png"
    },
    {
      "number": "209",
      "name": "Snubbull",
      "slug": "snubbull",
      "weight": 7.8,
      "height": 0.6,
      "abilities": [
        "Intimidate",
        "Run Away"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Snubbull",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/209.png"
    },
    {
      "number": "210",
      "name": "Granbull",
      "slug": "granbull",
      "weight": 48.7,
      "height": 1.4,
      "abilities": [
        "Intimidate",
        "Quick Feet"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Granbull",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/210.png"
    },
    {
      "number": "211",
      "name": "Qwilfish",
      "slug": "qwilfish",
      "weight": 3.9,
      "height": 0.5,
      "abilities": [
        "Poison Point",
        "Swift Swim"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "water",
        "poison"
      ],
      "ThumbnailAltText": "Qwilfish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/211.png"
    },
    {
      "number": "212",
      "name": "Scizor",
      "slug": "scizor",
      "weight": 118,
      "height": 1.8,
      "abilities": [
        "Swarm",
        "Technician"
      ],
      "weakness": [
        "Fire"
      ],
      "type": [
        "bug",
        "steel"
      ],
      "ThumbnailAltText": "Scizor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png"
    },
    {
      "number": "213",
      "name": "Shuckle",
      "slug": "shuckle",
      "weight": 20.5,
      "height": 0.6,
      "abilities": [
        "Gluttony",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Rock"
      ],
      "type": [
        "bug",
        "rock"
      ],
      "ThumbnailAltText": "Shuckle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/213.png"
    },
    {
      "number": "214",
      "name": "Heracross",
      "slug": "heracross",
      "weight": 54,
      "height": 1.5,
      "abilities": [
        "Guts",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "bug",
        "fighting"
      ],
      "ThumbnailAltText": "Heracross",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/214.png"
    },
    {
      "number": "215",
      "name": "Sneasel",
      "slug": "sneasel",
      "weight": 28,
      "height": 0.9,
      "abilities": [
        "Inner Focus",
        "Keen Eye"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Fighting",
        "Rock",
        "Fairy",
        "Bug"
      ],
      "type": [
        "dark",
        "ice"
      ],
      "ThumbnailAltText": "Sneasel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/215.png"
    },
    {
      "number": "216",
      "name": "Teddiursa",
      "slug": "teddiursa",
      "weight": 8.8,
      "height": 0.6,
      "abilities": [
        "Pickup",
        "Quick Feet"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Teddiursa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/216.png"
    },
    {
      "number": "217",
      "name": "Ursaring",
      "slug": "ursaring",
      "weight": 125.8,
      "height": 1.8,
      "abilities": [
        "Guts",
        "Quick Feet"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Ursaring",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/217.png"
    },
    {
      "number": "218",
      "name": "Slugma",
      "slug": "slugma",
      "weight": 35,
      "height": 0.7,
      "abilities": [
        "Flame Body",
        "Magma Armor"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Slugma",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/218.png"
    },
    {
      "number": "219",
      "name": "Magcargo",
      "slug": "magcargo",
      "weight": 55,
      "height": 0.8,
      "abilities": [
        "Flame Body",
        "Magma Armor"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "fire",
        "rock"
      ],
      "ThumbnailAltText": "Magcargo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/219.png"
    },
    {
      "number": "220",
      "name": "Swinub",
      "slug": "swinub",
      "weight": 6.5,
      "height": 0.4,
      "abilities": [
        "Oblivious",
        "Snow Cloak"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Grass",
        "Water",
        "Fighting"
      ],
      "type": [
        "ice",
        "ground"
      ],
      "ThumbnailAltText": "Swinub",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/220.png"
    },
    {
      "number": "221",
      "name": "Piloswine",
      "slug": "piloswine",
      "weight": 55.8,
      "height": 1.1,
      "abilities": [
        "Oblivious",
        "Snow Cloak"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Grass",
        "Water",
        "Fighting"
      ],
      "type": [
        "ice",
        "ground"
      ],
      "ThumbnailAltText": "Piloswine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/221.png"
    },
    {
      "number": "222",
      "name": "Corsola",
      "slug": "corsola",
      "weight": 5,
      "height": 0.6,
      "abilities": [
        "Hustle",
        "Natural Cure"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "rock"
      ],
      "ThumbnailAltText": "Corsola",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/222.png"
    },
    {
      "number": "223",
      "name": "Remoraid",
      "slug": "remoraid",
      "weight": 12,
      "height": 0.6,
      "abilities": [
        "Hustle",
        "Sniper"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Remoraid",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/223.png"
    },
    {
      "number": "224",
      "name": "Octillery",
      "slug": "octillery",
      "weight": 28.5,
      "height": 0.9,
      "abilities": [
        "Sniper",
        "Suction Cups"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Octillery",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/224.png"
    },
    {
      "number": "225",
      "name": "Delibird",
      "slug": "delibird",
      "weight": 16,
      "height": 0.9,
      "abilities": [
        "Hustle",
        "Vital Spirit"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Electric",
        "Rock"
      ],
      "type": [
        "ice",
        "flying"
      ],
      "ThumbnailAltText": "Delibird",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/225.png"
    },
    {
      "number": "226",
      "name": "Mantine",
      "slug": "mantine",
      "weight": 220,
      "height": 2.1,
      "abilities": [
        "Swift Swim",
        "Water Absorb"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Mantine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/226.png"
    },
    {
      "number": "227",
      "name": "Skarmory",
      "slug": "skarmory",
      "weight": 50.5,
      "height": 1.7,
      "abilities": [
        "Keen Eye",
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Electric"
      ],
      "type": [
        "steel",
        "flying"
      ],
      "ThumbnailAltText": "Skarmory",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/227.png"
    },
    {
      "number": "228",
      "name": "Houndour",
      "slug": "houndour",
      "weight": 10.8,
      "height": 0.6,
      "abilities": [
        "Early Bird",
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "dark",
        "fire"
      ],
      "ThumbnailAltText": "Houndour",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/228.png"
    },
    {
      "number": "229",
      "name": "Houndoom",
      "slug": "houndoom",
      "weight": 35,
      "height": 1.4,
      "abilities": [
        "Early Bird",
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "dark",
        "fire"
      ],
      "ThumbnailAltText": "Houndoom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/229.png"
    },
    {
      "number": "230",
      "name": "Kingdra",
      "slug": "kingdra",
      "weight": 152,
      "height": 1.8,
      "abilities": [
        "Sniper",
        "Swift Swim"
      ],
      "weakness": [
        "Fairy",
        "Dragon"
      ],
      "type": [
        "water",
        "dragon"
      ],
      "ThumbnailAltText": "Kingdra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/230.png"
    },
    {
      "number": "231",
      "name": "Phanpy",
      "slug": "phanpy",
      "weight": 33.5,
      "height": 0.5,
      "abilities": [
        "Pickup"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Phanpy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png"
    },
    {
      "number": "232",
      "name": "Donphan",
      "slug": "donphan",
      "weight": 120,
      "height": 1.1,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Donphan",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/232.png"
    },
    {
      "number": "233",
      "name": "Porygon2",
      "slug": "porygon2",
      "weight": 32.5,
      "height": 0.6,
      "abilities": [
        "Download",
        "Trace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Porygon2",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/233.png"
    },
    {
      "number": "234",
      "name": "Stantler",
      "slug": "stantler",
      "weight": 71.2,
      "height": 1.4,
      "abilities": [
        "Frisk",
        "Intimidate"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Stantler",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/234.png"
    },
    {
      "number": "235",
      "name": "Smeargle",
      "slug": "smeargle",
      "weight": 58,
      "height": 1.2,
      "abilities": [
        "Own Tempo",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Smeargle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/235.png"
    },
    {
      "number": "236",
      "name": "Tyrogue",
      "slug": "tyrogue",
      "weight": 21,
      "height": 0.7,
      "abilities": [
        "Guts",
        "Steadfast"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Tyrogue",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/236.png"
    },
    {
      "number": "237",
      "name": "Hitmontop",
      "slug": "hitmontop",
      "weight": 48,
      "height": 1.4,
      "abilities": [
        "Intimidate",
        "Technician"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Hitmontop",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/237.png"
    },
    {
      "number": "238",
      "name": "Smoochum",
      "slug": "smoochum",
      "weight": 6,
      "height": 0.4,
      "abilities": [
        "Forewarn",
        "Oblivious"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Fire",
        "Dark",
        "Rock",
        "Bug"
      ],
      "type": [
        "ice",
        "psychic"
      ],
      "ThumbnailAltText": "Smoochum",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/238.png"
    },
    {
      "number": "239",
      "name": "Elekid",
      "slug": "elekid",
      "weight": 23.5,
      "height": 0.6,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Elekid",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/239.png"
    },
    {
      "number": "240",
      "name": "Magby",
      "slug": "magby",
      "weight": 21.4,
      "height": 0.7,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Magby",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/240.png"
    },
    {
      "number": "241",
      "name": "Miltank",
      "slug": "miltank",
      "weight": 75.5,
      "height": 1.2,
      "abilities": [
        "Scrappy",
        "Thick Fat"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Miltank",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/241.png"
    },
    {
      "number": "242",
      "name": "Blissey",
      "slug": "blissey",
      "weight": 46.8,
      "height": 1.5,
      "abilities": [
        "Natural Cure",
        "Serene Grace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Blissey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/242.png"
    },
    {
      "number": "243",
      "name": "Raikou",
      "slug": "raikou",
      "weight": 178,
      "height": 1.9,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Raikou",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/243.png"
    },
    {
      "number": "244",
      "name": "Entei",
      "slug": "entei",
      "weight": 198,
      "height": 2.1,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Entei",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/244.png"
    },
    {
      "number": "245",
      "name": "Suicune",
      "slug": "suicune",
      "weight": 187,
      "height": 2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Suicune",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/245.png"
    },
    {
      "number": "246",
      "name": "Larvitar",
      "slug": "larvitar",
      "weight": 72,
      "height": 0.6,
      "abilities": [
        "Guts"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Larvitar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/246.png"
    },
    {
      "number": "247",
      "name": "Pupitar",
      "slug": "pupitar",
      "weight": 152,
      "height": 1.2,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Ice",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ground"
      ],
      "ThumbnailAltText": "Pupitar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/247.png"
    },
    {
      "number": "248",
      "name": "Tyranitar",
      "slug": "tyranitar",
      "weight": 202,
      "height": 2,
      "abilities": [
        "Sand Stream"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Fairy",
        "Grass",
        "Bug",
        "Ground"
      ],
      "type": [
        "rock",
        "dark"
      ],
      "ThumbnailAltText": "Tyranitar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png"
    },
    {
      "number": "249",
      "name": "Lugia",
      "slug": "lugia",
      "weight": 216,
      "height": 5.2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Lugia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/249.png"
    },
    {
      "number": "250",
      "name": "Ho-Oh",
      "slug": "ho-oh",
      "weight": 199,
      "height": 3.8,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Ho-Oh",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/250.png"
    },
    {
      "number": "251",
      "name": "Celebi",
      "slug": "celebi",
      "weight": 5,
      "height": 0.6,
      "abilities": [
        "Natural Cure"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Ice",
        "Dark",
        "Poison",
        "Bug"
      ],
      "type": [
        "psychic",
        "grass"
      ],
      "ThumbnailAltText": "Celebi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/251.png"
    },
    {
      "number": "252",
      "name": "Treecko",
      "slug": "treecko",
      "weight": 5,
      "height": 0.5,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Treecko",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png"
    },
    {
      "number": "253",
      "name": "Grovyle",
      "slug": "grovyle",
      "weight": 21.6,
      "height": 0.9,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Grovyle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/253.png"
    },
    {
      "number": "254",
      "name": "Sceptile",
      "slug": "sceptile",
      "weight": 52.2,
      "height": 1.7,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Sceptile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/254.png"
    },
    {
      "number": "255",
      "name": "Torchic",
      "slug": "torchic",
      "weight": 2.5,
      "height": 0.4,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Torchic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/255.png"
    },
    {
      "number": "256",
      "name": "Combusken",
      "slug": "combusken",
      "weight": 19.5,
      "height": 0.9,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Combusken",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/256.png"
    },
    {
      "number": "257",
      "name": "Blaziken",
      "slug": "blaziken",
      "weight": 52,
      "height": 1.9,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Blaziken",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/257.png"
    },
    {
      "number": "258",
      "name": "Mudkip",
      "slug": "mudkip",
      "weight": 7.6,
      "height": 0.4,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Mudkip",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png"
    },
    {
      "number": "259",
      "name": "Marshtomp",
      "slug": "marshtomp",
      "weight": 28,
      "height": 0.7,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Marshtomp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/259.png"
    },
    {
      "number": "260",
      "name": "Swampert",
      "slug": "swampert",
      "weight": 81.9,
      "height": 1.5,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Swampert",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/260.png"
    },
    {
      "number": "261",
      "name": "Poochyena",
      "slug": "poochyena",
      "weight": 13.6,
      "height": 0.5,
      "abilities": [
        "Quick Feet",
        "Run Away"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Poochyena",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/261.png"
    },
    {
      "number": "262",
      "name": "Mightyena",
      "slug": "mightyena",
      "weight": 37,
      "height": 1,
      "abilities": [
        "Intimidate",
        "Quick Feet"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Mightyena",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/262.png"
    },
    {
      "number": "263",
      "name": "Zigzagoon",
      "slug": "zigzagoon",
      "weight": 17.5,
      "height": 0.4,
      "abilities": [
        "Gluttony",
        "Pickup"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Zigzagoon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/263.png"
    },
    {
      "number": "264",
      "name": "Linoone",
      "slug": "linoone",
      "weight": 32.5,
      "height": 0.5,
      "abilities": [
        "Gluttony",
        "Pickup"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Linoone",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/264.png"
    },
    {
      "number": "265",
      "name": "Wurmple",
      "slug": "wurmple",
      "weight": 3.6,
      "height": 0.3,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Wurmple",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/265.png"
    },
    {
      "number": "266",
      "name": "Silcoon",
      "slug": "silcoon",
      "weight": 10,
      "height": 0.6,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Silcoon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/266.png"
    },
    {
      "number": "267",
      "name": "Beautifly",
      "slug": "beautifly",
      "weight": 28.4,
      "height": 1,
      "abilities": [
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Beautifly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/267.png"
    },
    {
      "number": "268",
      "name": "Cascoon",
      "slug": "cascoon",
      "weight": 11.5,
      "height": 0.7,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Cascoon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/268.png"
    },
    {
      "number": "269",
      "name": "Dustox",
      "slug": "dustox",
      "weight": 31.6,
      "height": 1.2,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Dustox",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/269.png"
    },
    {
      "number": "270",
      "name": "Lotad",
      "slug": "lotad",
      "weight": 2.6,
      "height": 0.5,
      "abilities": [
        "Rain Dish",
        "Swift Swim"
      ],
      "weakness": [
        "Flying",
        "Bug",
        "Poison"
      ],
      "type": [
        "water",
        "grass"
      ],
      "ThumbnailAltText": "Lotad",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/270.png"
    },
    {
      "number": "271",
      "name": "Lombre",
      "slug": "lombre",
      "weight": 32.5,
      "height": 1.2,
      "abilities": [
        "Rain Dish",
        "Swift Swim"
      ],
      "weakness": [
        "Flying",
        "Bug",
        "Poison"
      ],
      "type": [
        "water",
        "grass"
      ],
      "ThumbnailAltText": "Lombre",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/271.png"
    },
    {
      "number": "272",
      "name": "Ludicolo",
      "slug": "ludicolo",
      "weight": 55,
      "height": 1.5,
      "abilities": [
        "Rain Dish",
        "Swift Swim"
      ],
      "weakness": [
        "Flying",
        "Bug",
        "Poison"
      ],
      "type": [
        "water",
        "grass"
      ],
      "ThumbnailAltText": "Ludicolo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/272.png"
    },
    {
      "number": "273",
      "name": "Seedot",
      "slug": "seedot",
      "weight": 4,
      "height": 0.5,
      "abilities": [
        "Chlorophyll",
        "Early Bird"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Seedot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/273.png"
    },
    {
      "number": "274",
      "name": "Nuzleaf",
      "slug": "nuzleaf",
      "weight": 28,
      "height": 1,
      "abilities": [
        "Chlorophyll",
        "Early Bird"
      ],
      "weakness": [
        "Ice",
        "Fire",
        "Flying",
        "Poison",
        "Fighting",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dark"
      ],
      "ThumbnailAltText": "Nuzleaf",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/274.png"
    },
    {
      "number": "275",
      "name": "Shiftry",
      "slug": "shiftry",
      "weight": 59.6,
      "height": 1.3,
      "abilities": [
        "Chlorophyll",
        "Early Bird"
      ],
      "weakness": [
        "Ice",
        "Fire",
        "Flying",
        "Poison",
        "Fighting",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dark"
      ],
      "ThumbnailAltText": "Shiftry",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/275.png"
    },
    {
      "number": "276",
      "name": "Taillow",
      "slug": "taillow",
      "weight": 2.3,
      "height": 0.3,
      "abilities": [
        "Guts"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Taillow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/276.png"
    },
    {
      "number": "277",
      "name": "Swellow",
      "slug": "swellow",
      "weight": 19.8,
      "height": 0.7,
      "abilities": [
        "Guts"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Swellow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/277.png"
    },
    {
      "number": "278",
      "name": "Wingull",
      "slug": "wingull",
      "weight": 9.5,
      "height": 0.6,
      "abilities": [
        "Hydration",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Wingull",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/278.png"
    },
    {
      "number": "279",
      "name": "Pelipper",
      "slug": "pelipper",
      "weight": 28,
      "height": 1.2,
      "abilities": [
        "Drizzle",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Pelipper",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/279.png"
    },
    {
      "number": "280",
      "name": "Ralts",
      "slug": "ralts",
      "weight": 6.6,
      "height": 0.4,
      "abilities": [
        "Synchronize",
        "Trace"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Ralts",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/280.png"
    },
    {
      "number": "281",
      "name": "Kirlia",
      "slug": "kirlia",
      "weight": 20.2,
      "height": 0.8,
      "abilities": [
        "Synchronize",
        "Trace"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Kirlia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/281.png"
    },
    {
      "number": "282",
      "name": "Gardevoir",
      "slug": "gardevoir",
      "weight": 48.4,
      "height": 1.6,
      "abilities": [
        "Synchronize",
        "Trace"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Gardevoir",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/282.png"
    },
    {
      "number": "283",
      "name": "Surskit",
      "slug": "surskit",
      "weight": 1.7,
      "height": 0.5,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Flying",
        "Electric",
        "Rock"
      ],
      "type": [
        "bug",
        "water"
      ],
      "ThumbnailAltText": "Surskit",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/283.png"
    },
    {
      "number": "284",
      "name": "Masquerain",
      "slug": "masquerain",
      "weight": 3.6,
      "height": 0.8,
      "abilities": [
        "Intimidate"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Masquerain",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/284.png"
    },
    {
      "number": "285",
      "name": "Shroomish",
      "slug": "shroomish",
      "weight": 4.5,
      "height": 0.4,
      "abilities": [
        "Effect Spore",
        "Poison Heal"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Shroomish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/285.png"
    },
    {
      "number": "286",
      "name": "Breloom",
      "slug": "breloom",
      "weight": 39.2,
      "height": 1.2,
      "abilities": [
        "Effect Spore",
        "Poison Heal"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice",
        "Poison",
        "Fairy"
      ],
      "type": [
        "grass",
        "fighting"
      ],
      "ThumbnailAltText": "Breloom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/286.png"
    },
    {
      "number": "287",
      "name": "Slakoth",
      "slug": "slakoth",
      "weight": 24,
      "height": 0.8,
      "abilities": [
        "Truant"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Slakoth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/287.png"
    },
    {
      "number": "288",
      "name": "Vigoroth",
      "slug": "vigoroth",
      "weight": 46.5,
      "height": 1.4,
      "abilities": [
        "Vital Spirit"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Vigoroth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/288.png"
    },
    {
      "number": "289",
      "name": "Slaking",
      "slug": "slaking",
      "weight": 130.5,
      "height": 2,
      "abilities": [
        "Truant"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Slaking",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/289.png"
    },
    {
      "number": "290",
      "name": "Nincada",
      "slug": "nincada",
      "weight": 5.5,
      "height": 0.5,
      "abilities": [
        "Compound Eyes"
      ],
      "weakness": [
        "Fire",
        "Water",
        "Flying",
        "Ice"
      ],
      "type": [
        "bug",
        "ground"
      ],
      "ThumbnailAltText": "Nincada",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/290.png"
    },
    {
      "number": "291",
      "name": "Ninjask",
      "slug": "ninjask",
      "weight": 12,
      "height": 0.8,
      "abilities": [
        "Speed Boost"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Ninjask",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/291.png"
    },
    {
      "number": "292",
      "name": "Shedinja",
      "slug": "shedinja",
      "weight": 1.2,
      "height": 0.8,
      "abilities": [
        "Wonder Guard"
      ],
      "weakness": [
        "Fire",
        "Ghost",
        "Flying",
        "Dark",
        "Rock"
      ],
      "type": [
        "bug",
        "ghost"
      ],
      "ThumbnailAltText": "Shedinja",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/292.png"
    },
    {
      "number": "293",
      "name": "Whismur",
      "slug": "whismur",
      "weight": 16.3,
      "height": 0.6,
      "abilities": [
        "Soundproof"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Whismur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/293.png"
    },
    {
      "number": "294",
      "name": "Loudred",
      "slug": "loudred",
      "weight": 40.5,
      "height": 1,
      "abilities": [
        "Soundproof"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Loudred",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/294.png"
    },
    {
      "number": "295",
      "name": "Exploud",
      "slug": "exploud",
      "weight": 84,
      "height": 1.5,
      "abilities": [
        "Soundproof"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Exploud",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/295.png"
    },
    {
      "number": "296",
      "name": "Makuhita",
      "slug": "makuhita",
      "weight": 86.4,
      "height": 1,
      "abilities": [
        "Guts",
        "Thick Fat"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Makuhita",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/296.png"
    },
    {
      "number": "297",
      "name": "Hariyama",
      "slug": "hariyama",
      "weight": 253.8,
      "height": 2.3,
      "abilities": [
        "Guts",
        "Thick Fat"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Hariyama",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/297.png"
    },
    {
      "number": "298",
      "name": "Azurill",
      "slug": "azurill",
      "weight": 2,
      "height": 0.2,
      "abilities": [
        "Huge Power",
        "Thick Fat"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "normal",
        "fairy"
      ],
      "ThumbnailAltText": "Azurill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/298.png"
    },
    {
      "number": "299",
      "name": "Nosepass",
      "slug": "nosepass",
      "weight": 97,
      "height": 1,
      "abilities": [
        "Magnet Pull",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Nosepass",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/299.png"
    },
    {
      "number": "300",
      "name": "Skitty",
      "slug": "skitty",
      "weight": 11,
      "height": 0.6,
      "abilities": [
        "Cute Charm",
        "Normalize"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Skitty",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/300.png"
    },
    {
      "number": "301",
      "name": "Delcatty",
      "slug": "delcatty",
      "weight": 32.6,
      "height": 1.1,
      "abilities": [
        "Cute Charm",
        "Normalize"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Delcatty",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/301.png"
    },
    {
      "number": "302",
      "name": "Sableye",
      "slug": "sableye",
      "weight": 11,
      "height": 0.5,
      "abilities": [
        "Keen Eye",
        "Stall"
      ],
      "weakness": [
        "Fairy"
      ],
      "type": [
        "dark",
        "ghost"
      ],
      "ThumbnailAltText": "Sableye",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/302.png"
    },
    {
      "number": "303",
      "name": "Mawile",
      "slug": "mawile",
      "weight": 11.5,
      "height": 0.6,
      "abilities": [
        "Hyper Cutter",
        "Intimidate"
      ],
      "weakness": [
        "Fire",
        "Ground"
      ],
      "type": [
        "steel",
        "fairy"
      ],
      "ThumbnailAltText": "Mawile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/303.png"
    },
    {
      "number": "304",
      "name": "Aron",
      "slug": "aron",
      "weight": 60,
      "height": 0.4,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "rock"
      ],
      "ThumbnailAltText": "Aron",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/304.png"
    },
    {
      "number": "305",
      "name": "Lairon",
      "slug": "lairon",
      "weight": 120,
      "height": 0.9,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "rock"
      ],
      "ThumbnailAltText": "Lairon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/305.png"
    },
    {
      "number": "306",
      "name": "Aggron",
      "slug": "aggron",
      "weight": 360,
      "height": 2.1,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "rock"
      ],
      "ThumbnailAltText": "Aggron",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/306.png"
    },
    {
      "number": "307",
      "name": "Meditite",
      "slug": "meditite",
      "weight": 11.2,
      "height": 0.6,
      "abilities": [
        "Pure Power"
      ],
      "weakness": [
        "Ghost",
        "Fairy",
        "Flying"
      ],
      "type": [
        "fighting",
        "psychic"
      ],
      "ThumbnailAltText": "Meditite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/307.png"
    },
    {
      "number": "308",
      "name": "Medicham",
      "slug": "medicham",
      "weight": 31.5,
      "height": 1.3,
      "abilities": [
        "Pure Power"
      ],
      "weakness": [
        "Ghost",
        "Fairy",
        "Flying"
      ],
      "type": [
        "fighting",
        "psychic"
      ],
      "ThumbnailAltText": "Medicham",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/308.png"
    },
    {
      "number": "309",
      "name": "Electrike",
      "slug": "electrike",
      "weight": 15.2,
      "height": 0.6,
      "abilities": [
        "Lightning Rod",
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Electrike",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/309.png"
    },
    {
      "number": "310",
      "name": "Manectric",
      "slug": "manectric",
      "weight": 40.2,
      "height": 1.5,
      "abilities": [
        "Lightning Rod",
        "Static"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Manectric",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/310.png"
    },
    {
      "number": "311",
      "name": "Plusle",
      "slug": "plusle",
      "weight": 4.2,
      "height": 0.4,
      "abilities": [
        "Plus"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Plusle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/311.png"
    },
    {
      "number": "312",
      "name": "Minun",
      "slug": "minun",
      "weight": 4.2,
      "height": 0.4,
      "abilities": [
        "Minus"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Minun",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/312.png"
    },
    {
      "number": "313",
      "name": "Volbeat",
      "slug": "volbeat",
      "weight": 17.7,
      "height": 0.7,
      "abilities": [
        "Illuminate",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Volbeat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/313.png"
    },
    {
      "number": "314",
      "name": "Illumise",
      "slug": "illumise",
      "weight": 17.7,
      "height": 0.6,
      "abilities": [
        "Oblivious",
        "Tinted Lens"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Illumise",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/314.png"
    },
    {
      "number": "315",
      "name": "Roselia",
      "slug": "roselia",
      "weight": 2,
      "height": 0.3,
      "abilities": [
        "Natural Cure",
        "Poison Point"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Roselia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/315.png"
    },
    {
      "number": "316",
      "name": "Gulpin",
      "slug": "gulpin",
      "weight": 10.3,
      "height": 0.4,
      "abilities": [
        "Liquid Ooze",
        "Sticky Hold"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Gulpin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/316.png"
    },
    {
      "number": "317",
      "name": "Swalot",
      "slug": "swalot",
      "weight": 80,
      "height": 1.7,
      "abilities": [
        "Liquid Ooze",
        "Sticky Hold"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Swalot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/317.png"
    },
    {
      "number": "318",
      "name": "Carvanha",
      "slug": "carvanha",
      "weight": 20.8,
      "height": 0.8,
      "abilities": [
        "Rough Skin"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Electric",
        "Fighting",
        "Bug"
      ],
      "type": [
        "water",
        "dark"
      ],
      "ThumbnailAltText": "Carvanha",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/318.png"
    },
    {
      "number": "319",
      "name": "Sharpedo",
      "slug": "sharpedo",
      "weight": 88.8,
      "height": 1.8,
      "abilities": [
        "Rough Skin"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Electric",
        "Fighting",
        "Bug"
      ],
      "type": [
        "water",
        "dark"
      ],
      "ThumbnailAltText": "Sharpedo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/319.png"
    },
    {
      "number": "320",
      "name": "Wailmer",
      "slug": "wailmer",
      "weight": 130,
      "height": 2,
      "abilities": [
        "Oblivious",
        "Water Veil"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Wailmer",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/320.png"
    },
    {
      "number": "321",
      "name": "Wailord",
      "slug": "wailord",
      "weight": 398,
      "height": 14.5,
      "abilities": [
        "Oblivious",
        "Water Veil"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Wailord",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/321.png"
    },
    {
      "number": "322",
      "name": "Numel",
      "slug": "numel",
      "weight": 24,
      "height": 0.7,
      "abilities": [
        "Oblivious",
        "Simple"
      ],
      "weakness": [
        "Water",
        "Ground"
      ],
      "type": [
        "fire",
        "ground"
      ],
      "ThumbnailAltText": "Numel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/322.png"
    },
    {
      "number": "323",
      "name": "Camerupt",
      "slug": "camerupt",
      "weight": 220,
      "height": 1.9,
      "abilities": [
        "Magma Armor",
        "Solid Rock"
      ],
      "weakness": [
        "Water",
        "Ground"
      ],
      "type": [
        "fire",
        "ground"
      ],
      "ThumbnailAltText": "Camerupt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/323.png"
    },
    {
      "number": "324",
      "name": "Torkoal",
      "slug": "torkoal",
      "weight": 80.4,
      "height": 0.5,
      "abilities": [
        "Drought",
        "White Smoke"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Torkoal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/324.png"
    },
    {
      "number": "325",
      "name": "Spoink",
      "slug": "spoink",
      "weight": 30.6,
      "height": 0.7,
      "abilities": [
        "Own Tempo",
        "Thick Fat"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Spoink",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/325.png"
    },
    {
      "number": "326",
      "name": "Grumpig",
      "slug": "grumpig",
      "weight": 71.5,
      "height": 0.9,
      "abilities": [
        "Own Tempo",
        "Thick Fat"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Grumpig",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/326.png"
    },
    {
      "number": "327",
      "name": "Spinda",
      "slug": "spinda",
      "weight": 5,
      "height": 1.1,
      "abilities": [
        "Own Tempo",
        "Tangled Feet"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Spinda",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/327.png"
    },
    {
      "number": "328",
      "name": "Trapinch",
      "slug": "trapinch",
      "weight": 15,
      "height": 0.7,
      "abilities": [
        "Arena Trap",
        "Hyper Cutter"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Trapinch",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/328.png"
    },
    {
      "number": "329",
      "name": "Vibrava",
      "slug": "vibrava",
      "weight": 15.3,
      "height": 1.1,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "ground",
        "dragon"
      ],
      "ThumbnailAltText": "Vibrava",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/329.png"
    },
    {
      "number": "330",
      "name": "Flygon",
      "slug": "flygon",
      "weight": 82,
      "height": 2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "ground",
        "dragon"
      ],
      "ThumbnailAltText": "Flygon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/330.png"
    },
    {
      "number": "331",
      "name": "Cacnea",
      "slug": "cacnea",
      "weight": 51.3,
      "height": 0.4,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Cacnea",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/331.png"
    },
    {
      "number": "332",
      "name": "Cacturne",
      "slug": "cacturne",
      "weight": 77.4,
      "height": 1.3,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Ice",
        "Fire",
        "Flying",
        "Poison",
        "Fighting",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dark"
      ],
      "ThumbnailAltText": "Cacturne",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/332.png"
    },
    {
      "number": "333",
      "name": "Swablu",
      "slug": "swablu",
      "weight": 1.2,
      "height": 0.4,
      "abilities": [
        "Natural Cure"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Swablu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/333.png"
    },
    {
      "number": "334",
      "name": "Altaria",
      "slug": "altaria",
      "weight": 20.6,
      "height": 1.1,
      "abilities": [
        "Natural Cure"
      ],
      "weakness": [
        "Fairy",
        "Dragon",
        "Ice",
        "Rock"
      ],
      "type": [
        "dragon",
        "flying"
      ],
      "ThumbnailAltText": "Altaria",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/334.png"
    },
    {
      "number": "335",
      "name": "Zangoose",
      "slug": "zangoose",
      "weight": 40.3,
      "height": 1.3,
      "abilities": [
        "Immunity"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Zangoose",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/335.png"
    },
    {
      "number": "336",
      "name": "Seviper",
      "slug": "seviper",
      "weight": 52.5,
      "height": 2.7,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Seviper",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/336.png"
    },
    {
      "number": "337",
      "name": "Lunatone",
      "slug": "lunatone",
      "weight": 168,
      "height": 1,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Water",
        "Dark",
        "Grass",
        "Bug",
        "Ground"
      ],
      "type": [
        "rock",
        "psychic"
      ],
      "ThumbnailAltText": "Lunatone",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/337.png"
    },
    {
      "number": "338",
      "name": "Solrock",
      "slug": "solrock",
      "weight": 154,
      "height": 1.2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Water",
        "Dark",
        "Grass",
        "Bug",
        "Ground"
      ],
      "type": [
        "rock",
        "psychic"
      ],
      "ThumbnailAltText": "Solrock",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/338.png"
    },
    {
      "number": "339",
      "name": "Barboach",
      "slug": "barboach",
      "weight": 1.9,
      "height": 0.4,
      "abilities": [
        "Anticipation",
        "Oblivious"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Barboach",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/339.png"
    },
    {
      "number": "340",
      "name": "Whiscash",
      "slug": "whiscash",
      "weight": 23.6,
      "height": 0.9,
      "abilities": [
        "Anticipation",
        "Oblivious"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Whiscash",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/340.png"
    },
    {
      "number": "341",
      "name": "Corphish",
      "slug": "corphish",
      "weight": 11.5,
      "height": 0.6,
      "abilities": [
        "Hyper Cutter",
        "Shell Armor"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Corphish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/341.png"
    },
    {
      "number": "342",
      "name": "Crawdaunt",
      "slug": "crawdaunt",
      "weight": 32.8,
      "height": 1.1,
      "abilities": [
        "Hyper Cutter",
        "Shell Armor"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Electric",
        "Fighting",
        "Bug"
      ],
      "type": [
        "water",
        "dark"
      ],
      "ThumbnailAltText": "Crawdaunt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/342.png"
    },
    {
      "number": "343",
      "name": "Baltoy",
      "slug": "baltoy",
      "weight": 21.5,
      "height": 0.5,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Water",
        "Ice",
        "Dark",
        "Grass",
        "Bug"
      ],
      "type": [
        "ground",
        "psychic"
      ],
      "ThumbnailAltText": "Baltoy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/343.png"
    },
    {
      "number": "344",
      "name": "Claydol",
      "slug": "claydol",
      "weight": 108,
      "height": 1.5,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Water",
        "Ice",
        "Dark",
        "Grass",
        "Bug"
      ],
      "type": [
        "ground",
        "psychic"
      ],
      "ThumbnailAltText": "Claydol",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/344.png"
    },
    {
      "number": "345",
      "name": "Lileep",
      "slug": "lileep",
      "weight": 23.8,
      "height": 1,
      "abilities": [
        "Suction Cups"
      ],
      "weakness": [
        "Steel",
        "Ice",
        "Fighting",
        "Bug"
      ],
      "type": [
        "rock",
        "grass"
      ],
      "ThumbnailAltText": "Lileep",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/345.png"
    },
    {
      "number": "346",
      "name": "Cradily",
      "slug": "cradily",
      "weight": 60.4,
      "height": 1.5,
      "abilities": [
        "Suction Cups"
      ],
      "weakness": [
        "Steel",
        "Ice",
        "Fighting",
        "Bug"
      ],
      "type": [
        "rock",
        "grass"
      ],
      "ThumbnailAltText": "Cradily",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/346.png"
    },
    {
      "number": "347",
      "name": "Anorith",
      "slug": "anorith",
      "weight": 12.5,
      "height": 0.7,
      "abilities": [
        "Battle Armor"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Rock"
      ],
      "type": [
        "rock",
        "bug"
      ],
      "ThumbnailAltText": "Anorith",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/347.png"
    },
    {
      "number": "348",
      "name": "Armaldo",
      "slug": "armaldo",
      "weight": 68.2,
      "height": 1.5,
      "abilities": [
        "Battle Armor"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Rock"
      ],
      "type": [
        "rock",
        "bug"
      ],
      "ThumbnailAltText": "Armaldo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/348.png"
    },
    {
      "number": "349",
      "name": "Feebas",
      "slug": "feebas",
      "weight": 7.4,
      "height": 0.6,
      "abilities": [
        "Oblivious",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Feebas",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/349.png"
    },
    {
      "number": "350",
      "name": "Milotic",
      "slug": "milotic",
      "weight": 162,
      "height": 6.2,
      "abilities": [
        "Competitive",
        "Marvel Scale"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Milotic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/350.png"
    },
    {
      "number": "351",
      "name": "Castform",
      "slug": "castform",
      "weight": 0.8,
      "height": 0.3,
      "abilities": [
        "Forecast"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Castform",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/351.png"
    },
    {
      "number": "352",
      "name": "Kecleon",
      "slug": "kecleon",
      "weight": 22,
      "height": 1,
      "abilities": [
        "Color Change"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Kecleon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/352.png"
    },
    {
      "number": "353",
      "name": "Shuppet",
      "slug": "shuppet",
      "weight": 2.3,
      "height": 0.6,
      "abilities": [
        "Frisk",
        "Insomnia"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Shuppet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/353.png"
    },
    {
      "number": "354",
      "name": "Banette",
      "slug": "banette",
      "weight": 12.5,
      "height": 1.1,
      "abilities": [
        "Frisk",
        "Insomnia"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Banette",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/354.png"
    },
    {
      "number": "355",
      "name": "Duskull",
      "slug": "duskull",
      "weight": 15,
      "height": 0.8,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Duskull",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/355.png"
    },
    {
      "number": "356",
      "name": "Dusclops",
      "slug": "dusclops",
      "weight": 30.6,
      "height": 1.6,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Dusclops",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/356.png"
    },
    {
      "number": "357",
      "name": "Tropius",
      "slug": "tropius",
      "weight": 100,
      "height": 2,
      "abilities": [
        "Chlorophyll",
        "Solar Power"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Tropius",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/357.png"
    },
    {
      "number": "358",
      "name": "Chimecho",
      "slug": "chimecho",
      "weight": 1,
      "height": 0.6,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Chimecho",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/358.png"
    },
    {
      "number": "359",
      "name": "Absol",
      "slug": "absol",
      "weight": 47,
      "height": 1.2,
      "abilities": [
        "Pressure",
        "Super Luck"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Absol",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/359.png"
    },
    {
      "number": "360",
      "name": "Wynaut",
      "slug": "wynaut",
      "weight": 14,
      "height": 0.6,
      "abilities": [
        "Shadow Tag"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Wynaut",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/360.png"
    },
    {
      "number": "361",
      "name": "Snorunt",
      "slug": "snorunt",
      "weight": 16.8,
      "height": 0.7,
      "abilities": [
        "Ice Body",
        "Inner Focus"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Snorunt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/361.png"
    },
    {
      "number": "362",
      "name": "Glalie",
      "slug": "glalie",
      "weight": 256.5,
      "height": 1.5,
      "abilities": [
        "Ice Body",
        "Inner Focus"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Glalie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/362.png"
    },
    {
      "number": "363",
      "name": "Spheal",
      "slug": "spheal",
      "weight": 39.5,
      "height": 0.8,
      "abilities": [
        "Ice Body",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice",
        "water"
      ],
      "ThumbnailAltText": "Spheal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/363.png"
    },
    {
      "number": "364",
      "name": "Sealeo",
      "slug": "sealeo",
      "weight": 87.6,
      "height": 1.1,
      "abilities": [
        "Ice Body",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice",
        "water"
      ],
      "ThumbnailAltText": "Sealeo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/364.png"
    },
    {
      "number": "365",
      "name": "Walrein",
      "slug": "walrein",
      "weight": 150.6,
      "height": 1.4,
      "abilities": [
        "Ice Body",
        "Thick Fat"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice",
        "water"
      ],
      "ThumbnailAltText": "Walrein",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/365.png"
    },
    {
      "number": "366",
      "name": "Clamperl",
      "slug": "clamperl",
      "weight": 52.5,
      "height": 0.4,
      "abilities": [
        "Shell Armor"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Clamperl",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/366.png"
    },
    {
      "number": "367",
      "name": "Huntail",
      "slug": "huntail",
      "weight": 27,
      "height": 1.7,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Huntail",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/367.png"
    },
    {
      "number": "368",
      "name": "Gorebyss",
      "slug": "gorebyss",
      "weight": 22.6,
      "height": 1.8,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Gorebyss",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/368.png"
    },
    {
      "number": "369",
      "name": "Relicanth",
      "slug": "relicanth",
      "weight": 23.4,
      "height": 1,
      "abilities": [
        "Rock Head",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "rock"
      ],
      "ThumbnailAltText": "Relicanth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/369.png"
    },
    {
      "number": "370",
      "name": "Luvdisc",
      "slug": "luvdisc",
      "weight": 8.7,
      "height": 0.6,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Luvdisc",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/370.png"
    },
    {
      "number": "371",
      "name": "Bagon",
      "slug": "bagon",
      "weight": 42.1,
      "height": 0.6,
      "abilities": [
        "Rock Head"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Bagon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/371.png"
    },
    {
      "number": "372",
      "name": "Shelgon",
      "slug": "shelgon",
      "weight": 110.5,
      "height": 1.1,
      "abilities": [
        "Rock Head"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Shelgon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/372.png"
    },
    {
      "number": "373",
      "name": "Salamence",
      "slug": "salamence",
      "weight": 102.6,
      "height": 1.5,
      "abilities": [
        "Intimidate"
      ],
      "weakness": [
        "Fairy",
        "Dragon",
        "Ice",
        "Rock"
      ],
      "type": [
        "dragon",
        "flying"
      ],
      "ThumbnailAltText": "Salamence",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/373.png"
    },
    {
      "number": "374",
      "name": "Beldum",
      "slug": "beldum",
      "weight": 95.2,
      "height": 0.6,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Beldum",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/374.png"
    },
    {
      "number": "375",
      "name": "Metang",
      "slug": "metang",
      "weight": 202.5,
      "height": 1.2,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Metang",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/375.png"
    },
    {
      "number": "376",
      "name": "Metagross",
      "slug": "metagross",
      "weight": 550,
      "height": 1.6,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Metagross",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/376.png"
    },
    {
      "number": "377",
      "name": "Regirock",
      "slug": "regirock",
      "weight": 230,
      "height": 1.7,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Regirock",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/377.png"
    },
    {
      "number": "378",
      "name": "Regice",
      "slug": "regice",
      "weight": 175,
      "height": 1.8,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Regice",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/378.png"
    },
    {
      "number": "379",
      "name": "Registeel",
      "slug": "registeel",
      "weight": 205,
      "height": 1.9,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Registeel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/379.png"
    },
    {
      "number": "380",
      "name": "Latias",
      "slug": "latias",
      "weight": 40,
      "height": 1.4,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Ice",
        "Dragon",
        "Dark",
        "Fairy",
        "Bug"
      ],
      "type": [
        "dragon",
        "psychic"
      ],
      "ThumbnailAltText": "Latias",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/380.png"
    },
    {
      "number": "381",
      "name": "Latios",
      "slug": "latios",
      "weight": 60,
      "height": 2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Ice",
        "Dragon",
        "Dark",
        "Fairy",
        "Bug"
      ],
      "type": [
        "dragon",
        "psychic"
      ],
      "ThumbnailAltText": "Latios",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/381.png"
    },
    {
      "number": "382",
      "name": "Kyogre",
      "slug": "kyogre",
      "weight": 352,
      "height": 4.5,
      "abilities": [
        "Drizzle"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Kyogre",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/382.png"
    },
    {
      "number": "383",
      "name": "Groudon",
      "slug": "groudon",
      "weight": 950,
      "height": 3.5,
      "abilities": [
        "Drought"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Groudon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/383.png"
    },
    {
      "number": "384",
      "name": "Rayquaza",
      "slug": "rayquaza",
      "weight": 206.5,
      "height": 7,
      "abilities": [
        "Air Lock"
      ],
      "weakness": [
        "Fairy",
        "Dragon",
        "Ice",
        "Rock"
      ],
      "type": [
        "dragon",
        "flying"
      ],
      "ThumbnailAltText": "Rayquaza",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/384.png"
    },
    {
      "number": "385",
      "name": "Jirachi",
      "slug": "jirachi",
      "weight": 1.1,
      "height": 0.3,
      "abilities": [
        "Serene Grace"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Jirachi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/385.png"
    },
    {
      "number": "386",
      "name": "Deoxys",
      "slug": "deoxys",
      "weight": 60.8,
      "height": 1.7,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Deoxys",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386.png"
    },
    {
      "number": "387",
      "name": "Turtwig",
      "slug": "turtwig",
      "weight": 10.2,
      "height": 0.4,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Turtwig",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/387.png"
    },
    {
      "number": "388",
      "name": "Grotle",
      "slug": "grotle",
      "weight": 97,
      "height": 1.1,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Grotle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/388.png"
    },
    {
      "number": "389",
      "name": "Torterra",
      "slug": "torterra",
      "weight": 310,
      "height": 2.2,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Bug",
        "Ice"
      ],
      "type": [
        "grass",
        "ground"
      ],
      "ThumbnailAltText": "Torterra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/389.png"
    },
    {
      "number": "390",
      "name": "Chimchar",
      "slug": "chimchar",
      "weight": 6.2,
      "height": 0.5,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Chimchar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/390.png"
    },
    {
      "number": "391",
      "name": "Monferno",
      "slug": "monferno",
      "weight": 22,
      "height": 0.9,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Monferno",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/391.png"
    },
    {
      "number": "392",
      "name": "Infernape",
      "slug": "infernape",
      "weight": 55,
      "height": 1.2,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Infernape",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/392.png"
    },
    {
      "number": "393",
      "name": "Piplup",
      "slug": "piplup",
      "weight": 5.2,
      "height": 0.4,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Piplup",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/393.png"
    },
    {
      "number": "394",
      "name": "Prinplup",
      "slug": "prinplup",
      "weight": 23,
      "height": 0.8,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Prinplup",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/394.png"
    },
    {
      "number": "395",
      "name": "Empoleon",
      "slug": "empoleon",
      "weight": 84.5,
      "height": 1.7,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "steel"
      ],
      "ThumbnailAltText": "Empoleon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/395.png"
    },
    {
      "number": "396",
      "name": "Starly",
      "slug": "starly",
      "weight": 2,
      "height": 0.3,
      "abilities": [
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Starly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/396.png"
    },
    {
      "number": "397",
      "name": "Staravia",
      "slug": "staravia",
      "weight": 15.5,
      "height": 0.6,
      "abilities": [
        "Intimidate"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Staravia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/397.png"
    },
    {
      "number": "398",
      "name": "Staraptor",
      "slug": "staraptor",
      "weight": 24.9,
      "height": 1.2,
      "abilities": [
        "Intimidate"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Staraptor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/398.png"
    },
    {
      "number": "399",
      "name": "Bidoof",
      "slug": "bidoof",
      "weight": 20,
      "height": 0.5,
      "abilities": [
        "Simple",
        "Unaware"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Bidoof",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/399.png"
    },
    {
      "number": "400",
      "name": "Bibarel",
      "slug": "bibarel",
      "weight": 31.5,
      "height": 1,
      "abilities": [
        "Simple",
        "Unaware"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting"
      ],
      "type": [
        "normal",
        "water"
      ],
      "ThumbnailAltText": "Bibarel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/400.png"
    },
    {
      "number": "401",
      "name": "Kricketot",
      "slug": "kricketot",
      "weight": 2.2,
      "height": 0.3,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Kricketot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/401.png"
    },
    {
      "number": "402",
      "name": "Kricketune",
      "slug": "kricketune",
      "weight": 25.5,
      "height": 1,
      "abilities": [
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Kricketune",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/402.png"
    },
    {
      "number": "403",
      "name": "Shinx",
      "slug": "shinx",
      "weight": 9.5,
      "height": 0.5,
      "abilities": [
        "Intimidate",
        "Rivalry"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Shinx",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/403.png"
    },
    {
      "number": "404",
      "name": "Luxio",
      "slug": "luxio",
      "weight": 30.5,
      "height": 0.9,
      "abilities": [
        "Intimidate",
        "Rivalry"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Luxio",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/404.png"
    },
    {
      "number": "405",
      "name": "Luxray",
      "slug": "luxray",
      "weight": 42,
      "height": 1.4,
      "abilities": [
        "Intimidate",
        "Rivalry"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Luxray",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/405.png"
    },
    {
      "number": "406",
      "name": "Budew",
      "slug": "budew",
      "weight": 1.2,
      "height": 0.2,
      "abilities": [
        "Natural Cure",
        "Poison Point"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Budew",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/406.png"
    },
    {
      "number": "407",
      "name": "Roserade",
      "slug": "roserade",
      "weight": 14.5,
      "height": 0.9,
      "abilities": [
        "Natural Cure",
        "Poison Point"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Roserade",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/407.png"
    },
    {
      "number": "408",
      "name": "Cranidos",
      "slug": "cranidos",
      "weight": 31.5,
      "height": 0.9,
      "abilities": [
        "Mold Breaker"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Cranidos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/408.png"
    },
    {
      "number": "409",
      "name": "Rampardos",
      "slug": "rampardos",
      "weight": 102.5,
      "height": 1.6,
      "abilities": [
        "Mold Breaker"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Rampardos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/409.png"
    },
    {
      "number": "410",
      "name": "Shieldon",
      "slug": "shieldon",
      "weight": 57,
      "height": 0.5,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "steel"
      ],
      "ThumbnailAltText": "Shieldon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/410.png"
    },
    {
      "number": "411",
      "name": "Bastiodon",
      "slug": "bastiodon",
      "weight": 149.5,
      "height": 1.3,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "steel"
      ],
      "ThumbnailAltText": "Bastiodon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/411.png"
    },
    {
      "number": "412",
      "name": "Burmy",
      "slug": "burmy",
      "weight": 3.4,
      "height": 0.2,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Burmy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/412.png"
    },
    {
      "number": "413",
      "name": "Wormadam",
      "slug": "wormadam",
      "weight": 6.5,
      "height": 0.5,
      "abilities": [
        "Anticipation"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Wormadam",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/413.png"
    },
    {
      "number": "414",
      "name": "Mothim",
      "slug": "mothim",
      "weight": 23.3,
      "height": 0.9,
      "abilities": [
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Mothim",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/414.png"
    },
    {
      "number": "415",
      "name": "Combee",
      "slug": "combee",
      "weight": 5.5,
      "height": 0.3,
      "abilities": [
        "Honey Gather"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Combee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/415.png"
    },
    {
      "number": "416",
      "name": "Vespiquen",
      "slug": "vespiquen",
      "weight": 38.5,
      "height": 1.2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Vespiquen",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/416.png"
    },
    {
      "number": "417",
      "name": "Pachirisu",
      "slug": "pachirisu",
      "weight": 3.9,
      "height": 0.4,
      "abilities": [
        "Pickup",
        "Run Away"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Pachirisu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/417.png"
    },
    {
      "number": "418",
      "name": "Buizel",
      "slug": "buizel",
      "weight": 29.5,
      "height": 0.7,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Buizel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/418.png"
    },
    {
      "number": "419",
      "name": "Floatzel",
      "slug": "floatzel",
      "weight": 33.5,
      "height": 1.1,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Floatzel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/419.png"
    },
    {
      "number": "420",
      "name": "Cherubi",
      "slug": "cherubi",
      "weight": 3.3,
      "height": 0.4,
      "abilities": [
        "Chlorophyll"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Cherubi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/420.png"
    },
    {
      "number": "421",
      "name": "Cherrim",
      "slug": "cherrim",
      "weight": 9.3,
      "height": 0.5,
      "abilities": [
        "Flower Gift"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Cherrim",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/421.png"
    },
    {
      "number": "422",
      "name": "Shellos",
      "slug": "shellos",
      "weight": 6.3,
      "height": 0.3,
      "abilities": [
        "Sticky Hold",
        "Storm Drain"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Shellos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/422.png"
    },
    {
      "number": "423",
      "name": "Gastrodon",
      "slug": "gastrodon",
      "weight": 29.9,
      "height": 0.9,
      "abilities": [
        "Sticky Hold",
        "Storm Drain"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Gastrodon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/423.png"
    },
    {
      "number": "424",
      "name": "Ambipom",
      "slug": "ambipom",
      "weight": 20.3,
      "height": 1.2,
      "abilities": [
        "Pickup",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Ambipom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/424.png"
    },
    {
      "number": "425",
      "name": "Drifloon",
      "slug": "drifloon",
      "weight": 1.2,
      "height": 0.4,
      "abilities": [
        "Aftermath",
        "Unburden"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "ghost",
        "flying"
      ],
      "ThumbnailAltText": "Drifloon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/425.png"
    },
    {
      "number": "426",
      "name": "Drifblim",
      "slug": "drifblim",
      "weight": 15,
      "height": 1.2,
      "abilities": [
        "Aftermath",
        "Unburden"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "ghost",
        "flying"
      ],
      "ThumbnailAltText": "Drifblim",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/426.png"
    },
    {
      "number": "427",
      "name": "Buneary",
      "slug": "buneary",
      "weight": 5.5,
      "height": 0.4,
      "abilities": [
        "Klutz",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Buneary",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/427.png"
    },
    {
      "number": "428",
      "name": "Lopunny",
      "slug": "lopunny",
      "weight": 33.3,
      "height": 1.2,
      "abilities": [
        "Cute Charm",
        "Klutz"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Lopunny",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/428.png"
    },
    {
      "number": "429",
      "name": "Mismagius",
      "slug": "mismagius",
      "weight": 4.4,
      "height": 0.9,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Mismagius",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png"
    },
    {
      "number": "430",
      "name": "Honchkrow",
      "slug": "honchkrow",
      "weight": 27.3,
      "height": 0.9,
      "abilities": [
        "Insomnia",
        "Super Luck"
      ],
      "weakness": [
        "Fairy",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "dark",
        "flying"
      ],
      "ThumbnailAltText": "Honchkrow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/430.png"
    },
    {
      "number": "431",
      "name": "Glameow",
      "slug": "glameow",
      "weight": 3.9,
      "height": 0.5,
      "abilities": [
        "Limber",
        "Own Tempo"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Glameow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/431.png"
    },
    {
      "number": "432",
      "name": "Purugly",
      "slug": "purugly",
      "weight": 43.8,
      "height": 1,
      "abilities": [
        "Own Tempo",
        "Thick Fat"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Purugly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/432.png"
    },
    {
      "number": "433",
      "name": "Chingling",
      "slug": "chingling",
      "weight": 0.6,
      "height": 0.2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Chingling",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/433.png"
    },
    {
      "number": "434",
      "name": "Stunky",
      "slug": "stunky",
      "weight": 19.2,
      "height": 0.4,
      "abilities": [
        "Aftermath",
        "Stench"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "poison",
        "dark"
      ],
      "ThumbnailAltText": "Stunky",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/434.png"
    },
    {
      "number": "435",
      "name": "Skuntank",
      "slug": "skuntank",
      "weight": 38,
      "height": 1,
      "abilities": [
        "Aftermath",
        "Stench"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "poison",
        "dark"
      ],
      "ThumbnailAltText": "Skuntank",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/435.png"
    },
    {
      "number": "436",
      "name": "Bronzor",
      "slug": "bronzor",
      "weight": 60.5,
      "height": 0.5,
      "abilities": [
        "Heatproof",
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Bronzor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/436.png"
    },
    {
      "number": "437",
      "name": "Bronzong",
      "slug": "bronzong",
      "weight": 187,
      "height": 1.3,
      "abilities": [
        "Heatproof",
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "psychic"
      ],
      "ThumbnailAltText": "Bronzong",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/437.png"
    },
    {
      "number": "438",
      "name": "Bonsly",
      "slug": "bonsly",
      "weight": 15,
      "height": 0.5,
      "abilities": [
        "Rock Head",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Bonsly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/438.png"
    },
    {
      "number": "439",
      "name": "Mime Jr.",
      "slug": "mime-jr",
      "weight": 13,
      "height": 0.6,
      "abilities": [
        "Filter",
        "Soundproof"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Mime Jr.",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/439.png"
    },
    {
      "number": "440",
      "name": "Happiny",
      "slug": "happiny",
      "weight": 24.4,
      "height": 0.6,
      "abilities": [
        "Natural Cure",
        "Serene Grace"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Happiny",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/440.png"
    },
    {
      "number": "441",
      "name": "Chatot",
      "slug": "chatot",
      "weight": 1.9,
      "height": 0.5,
      "abilities": [
        "Keen Eye",
        "Tangled Feet"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Chatot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/441.png"
    },
    {
      "number": "442",
      "name": "Spiritomb",
      "slug": "spiritomb",
      "weight": 108,
      "height": 1,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Fairy"
      ],
      "type": [
        "ghost",
        "dark"
      ],
      "ThumbnailAltText": "Spiritomb",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/442.png"
    },
    {
      "number": "443",
      "name": "Gible",
      "slug": "gible",
      "weight": 20.5,
      "height": 0.7,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ground"
      ],
      "ThumbnailAltText": "Gible",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/443.png"
    },
    {
      "number": "444",
      "name": "Gabite",
      "slug": "gabite",
      "weight": 56,
      "height": 1.4,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ground"
      ],
      "ThumbnailAltText": "Gabite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/444.png"
    },
    {
      "number": "445",
      "name": "Garchomp",
      "slug": "garchomp",
      "weight": 95,
      "height": 1.9,
      "abilities": [
        "Sand Veil"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ground"
      ],
      "ThumbnailAltText": "Garchomp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/445.png"
    },
    {
      "number": "446",
      "name": "Munchlax",
      "slug": "munchlax",
      "weight": 105,
      "height": 0.6,
      "abilities": [
        "Pickup",
        "Thick Fat"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Munchlax",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/446.png"
    },
    {
      "number": "447",
      "name": "Riolu",
      "slug": "riolu",
      "weight": 20.2,
      "height": 0.7,
      "abilities": [
        "Inner Focus",
        "Steadfast"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Riolu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/447.png"
    },
    {
      "number": "448",
      "name": "Lucario",
      "slug": "lucario",
      "weight": 54,
      "height": 1.2,
      "abilities": [
        "Inner Focus",
        "Steadfast"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "fighting",
        "steel"
      ],
      "ThumbnailAltText": "Lucario",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/448.png"
    },
    {
      "number": "449",
      "name": "Hippopotas",
      "slug": "hippopotas",
      "weight": 49.5,
      "height": 0.8,
      "abilities": [
        "Sand Stream"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Hippopotas",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/449.png"
    },
    {
      "number": "450",
      "name": "Hippowdon",
      "slug": "hippowdon",
      "weight": 300,
      "height": 2,
      "abilities": [
        "Sand Stream"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Hippowdon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/450.png"
    },
    {
      "number": "451",
      "name": "Skorupi",
      "slug": "skorupi",
      "weight": 12,
      "height": 0.8,
      "abilities": [
        "Battle Armor",
        "Sniper"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "poison",
        "bug"
      ],
      "ThumbnailAltText": "Skorupi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/451.png"
    },
    {
      "number": "452",
      "name": "Drapion",
      "slug": "drapion",
      "weight": 61.5,
      "height": 1.3,
      "abilities": [
        "Battle Armor",
        "Sniper"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "poison",
        "dark"
      ],
      "ThumbnailAltText": "Drapion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/452.png"
    },
    {
      "number": "453",
      "name": "Croagunk",
      "slug": "croagunk",
      "weight": 23,
      "height": 0.7,
      "abilities": [
        "Anticipation",
        "Dry Skin"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "poison",
        "fighting"
      ],
      "ThumbnailAltText": "Croagunk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/453.png"
    },
    {
      "number": "454",
      "name": "Toxicroak",
      "slug": "toxicroak",
      "weight": 44.4,
      "height": 1.3,
      "abilities": [
        "Anticipation",
        "Dry Skin"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "poison",
        "fighting"
      ],
      "ThumbnailAltText": "Toxicroak",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/454.png"
    },
    {
      "number": "455",
      "name": "Carnivine",
      "slug": "carnivine",
      "weight": 27,
      "height": 1.4,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Carnivine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/455.png"
    },
    {
      "number": "456",
      "name": "Finneon",
      "slug": "finneon",
      "weight": 7,
      "height": 0.4,
      "abilities": [
        "Storm Drain",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Finneon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/456.png"
    },
    {
      "number": "457",
      "name": "Lumineon",
      "slug": "lumineon",
      "weight": 24,
      "height": 1.2,
      "abilities": [
        "Storm Drain",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Lumineon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/457.png"
    },
    {
      "number": "458",
      "name": "Mantyke",
      "slug": "mantyke",
      "weight": 65,
      "height": 1,
      "abilities": [
        "Swift Swim",
        "Water Absorb"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Mantyke",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/458.png"
    },
    {
      "number": "459",
      "name": "Snover",
      "slug": "snover",
      "weight": 50.5,
      "height": 1,
      "abilities": [
        "Snow Warning"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Poison",
        "Fighting",
        "Rock",
        "Bug"
      ],
      "type": [
        "grass",
        "ice"
      ],
      "ThumbnailAltText": "Snover",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/459.png"
    },
    {
      "number": "460",
      "name": "Abomasnow",
      "slug": "abomasnow",
      "weight": 135.5,
      "height": 2.2,
      "abilities": [
        "Snow Warning"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Poison",
        "Fighting",
        "Rock",
        "Bug"
      ],
      "type": [
        "grass",
        "ice"
      ],
      "ThumbnailAltText": "Abomasnow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/460.png"
    },
    {
      "number": "461",
      "name": "Weavile",
      "slug": "weavile",
      "weight": 34,
      "height": 1.1,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Fighting",
        "Rock",
        "Fairy",
        "Bug"
      ],
      "type": [
        "dark",
        "ice"
      ],
      "ThumbnailAltText": "Weavile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/461.png"
    },
    {
      "number": "462",
      "name": "Magnezone",
      "slug": "magnezone",
      "weight": 180,
      "height": 1.2,
      "abilities": [
        "Magnet Pull",
        "Sturdy"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "steel"
      ],
      "ThumbnailAltText": "Magnezone",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/462.png"
    },
    {
      "number": "463",
      "name": "Lickilicky",
      "slug": "lickilicky",
      "weight": 140,
      "height": 1.7,
      "abilities": [
        "Oblivious",
        "Own Tempo"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Lickilicky",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/463.png"
    },
    {
      "number": "464",
      "name": "Rhyperior",
      "slug": "rhyperior",
      "weight": 282.8,
      "height": 2.4,
      "abilities": [
        "Lightning Rod",
        "Solid Rock"
      ],
      "weakness": [
        "Steel",
        "Ice",
        "Water",
        "Fighting",
        "Grass",
        "Ground"
      ],
      "type": [
        "ground",
        "rock"
      ],
      "ThumbnailAltText": "Rhyperior",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/464.png"
    },
    {
      "number": "465",
      "name": "Tangrowth",
      "slug": "tangrowth",
      "weight": 128.6,
      "height": 2,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Tangrowth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/465.png"
    },
    {
      "number": "466",
      "name": "Electivire",
      "slug": "electivire",
      "weight": 138.6,
      "height": 1.8,
      "abilities": [
        "Motor Drive"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Electivire",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/466.png"
    },
    {
      "number": "467",
      "name": "Magmortar",
      "slug": "magmortar",
      "weight": 68,
      "height": 1.6,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Magmortar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/467.png"
    },
    {
      "number": "468",
      "name": "Togekiss",
      "slug": "togekiss",
      "weight": 38,
      "height": 1.5,
      "abilities": [
        "Hustle",
        "Serene Grace"
      ],
      "weakness": [
        "Steel",
        "Poison",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "fairy",
        "flying"
      ],
      "ThumbnailAltText": "Togekiss",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/468.png"
    },
    {
      "number": "469",
      "name": "Yanmega",
      "slug": "yanmega",
      "weight": 51.5,
      "height": 1.9,
      "abilities": [
        "Speed Boost",
        "Tinted Lens"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Yanmega",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/469.png"
    },
    {
      "number": "470",
      "name": "Leafeon",
      "slug": "leafeon",
      "weight": 25.5,
      "height": 1,
      "abilities": [
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Leafeon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png"
    },
    {
      "number": "471",
      "name": "Glaceon",
      "slug": "glaceon",
      "weight": 25.9,
      "height": 0.8,
      "abilities": [
        "Snow Cloak"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Glaceon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/471.png"
    },
    {
      "number": "472",
      "name": "Gliscor",
      "slug": "gliscor",
      "weight": 42.5,
      "height": 2,
      "abilities": [
        "Hyper Cutter",
        "Sand Veil"
      ],
      "weakness": [
        "Water",
        "Ice"
      ],
      "type": [
        "ground",
        "flying"
      ],
      "ThumbnailAltText": "Gliscor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/472.png"
    },
    {
      "number": "473",
      "name": "Mamoswine",
      "slug": "mamoswine",
      "weight": 291,
      "height": 2.5,
      "abilities": [
        "Oblivious",
        "Snow Cloak"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Grass",
        "Water",
        "Fighting"
      ],
      "type": [
        "ice",
        "ground"
      ],
      "ThumbnailAltText": "Mamoswine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/473.png"
    },
    {
      "number": "474",
      "name": "Porygon-Z",
      "slug": "porygon-z",
      "weight": 34,
      "height": 0.9,
      "abilities": [
        "Adaptability",
        "Download"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Porygon-Z",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/474.png"
    },
    {
      "number": "475",
      "name": "Gallade",
      "slug": "gallade",
      "weight": 52,
      "height": 1.6,
      "abilities": [
        "Steadfast"
      ],
      "weakness": [
        "Ghost",
        "Fairy",
        "Flying"
      ],
      "type": [
        "psychic",
        "fighting"
      ],
      "ThumbnailAltText": "Gallade",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/475.png"
    },
    {
      "number": "476",
      "name": "Probopass",
      "slug": "probopass",
      "weight": 340,
      "height": 1.4,
      "abilities": [
        "Magnet Pull",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "steel"
      ],
      "ThumbnailAltText": "Probopass",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/476.png"
    },
    {
      "number": "477",
      "name": "Dusknoir",
      "slug": "dusknoir",
      "weight": 106.6,
      "height": 2.2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Dusknoir",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/477.png"
    },
    {
      "number": "478",
      "name": "Froslass",
      "slug": "froslass",
      "weight": 26.6,
      "height": 1.3,
      "abilities": [
        "Snow Cloak"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Fire",
        "Dark",
        "Rock"
      ],
      "type": [
        "ice",
        "ghost"
      ],
      "ThumbnailAltText": "Froslass",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/478.png"
    },
    {
      "number": "479",
      "name": "Rotom",
      "slug": "rotom",
      "weight": 0.3,
      "height": 0.3,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Ground"
      ],
      "type": [
        "electric",
        "ghost"
      ],
      "ThumbnailAltText": "Rotom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/479.png"
    },
    {
      "number": "480",
      "name": "Uxie",
      "slug": "uxie",
      "weight": 0.3,
      "height": 0.3,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Uxie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/480.png"
    },
    {
      "number": "481",
      "name": "Mesprit",
      "slug": "mesprit",
      "weight": 0.3,
      "height": 0.3,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Mesprit",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/481.png"
    },
    {
      "number": "482",
      "name": "Azelf",
      "slug": "azelf",
      "weight": 0.3,
      "height": 0.3,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Azelf",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/482.png"
    },
    {
      "number": "483",
      "name": "Dialga",
      "slug": "dialga",
      "weight": 683,
      "height": 5.4,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "dragon"
      ],
      "ThumbnailAltText": "Dialga",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/483.png"
    },
    {
      "number": "484",
      "name": "Palkia",
      "slug": "palkia",
      "weight": 336,
      "height": 4.2,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Fairy",
        "Dragon"
      ],
      "type": [
        "water",
        "dragon"
      ],
      "ThumbnailAltText": "Palkia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/484.png"
    },
    {
      "number": "485",
      "name": "Heatran",
      "slug": "heatran",
      "weight": 430,
      "height": 1.7,
      "abilities": [
        "Flash Fire"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "fire",
        "steel"
      ],
      "ThumbnailAltText": "Heatran",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/485.png"
    },
    {
      "number": "486",
      "name": "Regigigas",
      "slug": "regigigas",
      "weight": 420,
      "height": 3.7,
      "abilities": [
        "Slow Start"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Regigigas",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/486.png"
    },
    {
      "number": "487",
      "name": "Giratina",
      "slug": "giratina",
      "weight": 750,
      "height": 4.5,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "ghost",
        "dragon"
      ],
      "ThumbnailAltText": "Giratina",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/487.png"
    },
    {
      "number": "488",
      "name": "Cresselia",
      "slug": "cresselia",
      "weight": 85.6,
      "height": 1.5,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Cresselia",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/488.png"
    },
    {
      "number": "489",
      "name": "Phione",
      "slug": "phione",
      "weight": 3.1,
      "height": 0.4,
      "abilities": [
        "Hydration"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Phione",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/489.png"
    },
    {
      "number": "490",
      "name": "Manaphy",
      "slug": "manaphy",
      "weight": 1.4,
      "height": 0.3,
      "abilities": [
        "Hydration"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Manaphy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/490.png"
    },
    {
      "number": "491",
      "name": "Darkrai",
      "slug": "darkrai",
      "weight": 50.5,
      "height": 1.5,
      "abilities": [
        "Bad Dreams"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Darkrai",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/491.png"
    },
    {
      "number": "492",
      "name": "Shaymin",
      "slug": "shaymin",
      "weight": 2.1,
      "height": 0.2,
      "abilities": [
        "Natural Cure"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Shaymin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/492.png"
    },
    {
      "number": "493",
      "name": "Arceus",
      "slug": "arceus",
      "weight": 320,
      "height": 3.2,
      "abilities": [
        "Multitype"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Arceus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/493.png"
    },
    {
      "number": "494",
      "name": "Victini",
      "slug": "victini",
      "weight": 4,
      "height": 0.4,
      "abilities": [
        "Victory Star"
      ],
      "weakness": [
        "Ghost",
        "Water",
        "Ground",
        "Dark",
        "Rock"
      ],
      "type": [
        "psychic",
        "fire"
      ],
      "ThumbnailAltText": "Victini",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/494.png"
    },
    {
      "number": "495",
      "name": "Snivy",
      "slug": "snivy",
      "weight": 8.1,
      "height": 0.6,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Snivy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/495.png"
    },
    {
      "number": "496",
      "name": "Servine",
      "slug": "servine",
      "weight": 16,
      "height": 0.8,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Servine",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/496.png"
    },
    {
      "number": "497",
      "name": "Serperior",
      "slug": "serperior",
      "weight": 63,
      "height": 3.3,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Serperior",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/497.png"
    },
    {
      "number": "498",
      "name": "Tepig",
      "slug": "tepig",
      "weight": 9.9,
      "height": 0.5,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Tepig",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/498.png"
    },
    {
      "number": "499",
      "name": "Pignite",
      "slug": "pignite",
      "weight": 55.5,
      "height": 1,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Pignite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/499.png"
    },
    {
      "number": "500",
      "name": "Emboar",
      "slug": "emboar",
      "weight": 150,
      "height": 1.6,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Flying",
        "Ground"
      ],
      "type": [
        "fire",
        "fighting"
      ],
      "ThumbnailAltText": "Emboar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/500.png"
    },
    {
      "number": "501",
      "name": "Oshawott",
      "slug": "oshawott",
      "weight": 5.9,
      "height": 0.5,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Oshawott",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/501.png"
    },
    {
      "number": "502",
      "name": "Dewott",
      "slug": "dewott",
      "weight": 24.5,
      "height": 0.8,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Dewott",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/502.png"
    },
    {
      "number": "503",
      "name": "Samurott",
      "slug": "samurott",
      "weight": 94.6,
      "height": 1.5,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Samurott",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/503.png"
    },
    {
      "number": "504",
      "name": "Patrat",
      "slug": "patrat",
      "weight": 11.6,
      "height": 0.5,
      "abilities": [
        "Keen Eye",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Patrat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/504.png"
    },
    {
      "number": "505",
      "name": "Watchog",
      "slug": "watchog",
      "weight": 27,
      "height": 1.1,
      "abilities": [
        "Illuminate",
        "Keen Eye"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Watchog",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/505.png"
    },
    {
      "number": "506",
      "name": "Lillipup",
      "slug": "lillipup",
      "weight": 4.1,
      "height": 0.4,
      "abilities": [
        "Pickup",
        "Vital Spirit"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Lillipup",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/506.png"
    },
    {
      "number": "507",
      "name": "Herdier",
      "slug": "herdier",
      "weight": 14.7,
      "height": 0.9,
      "abilities": [
        "Intimidate",
        "Sand Rush"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Herdier",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/507.png"
    },
    {
      "number": "508",
      "name": "Stoutland",
      "slug": "stoutland",
      "weight": 61,
      "height": 1.2,
      "abilities": [
        "Intimidate",
        "Sand Rush"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Stoutland",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/508.png"
    },
    {
      "number": "509",
      "name": "Purrloin",
      "slug": "purrloin",
      "weight": 10.1,
      "height": 0.4,
      "abilities": [
        "Limber",
        "Unburden"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Purrloin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/509.png"
    },
    {
      "number": "510",
      "name": "Liepard",
      "slug": "liepard",
      "weight": 37.5,
      "height": 1.1,
      "abilities": [
        "Limber",
        "Unburden"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Liepard",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/510.png"
    },
    {
      "number": "511",
      "name": "Pansage",
      "slug": "pansage",
      "weight": 10.5,
      "height": 0.6,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Pansage",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/511.png"
    },
    {
      "number": "512",
      "name": "Simisage",
      "slug": "simisage",
      "weight": 30.5,
      "height": 1.1,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Simisage",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/512.png"
    },
    {
      "number": "513",
      "name": "Pansear",
      "slug": "pansear",
      "weight": 11,
      "height": 0.6,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Pansear",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/513.png"
    },
    {
      "number": "514",
      "name": "Simisear",
      "slug": "simisear",
      "weight": 28,
      "height": 1,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Simisear",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/514.png"
    },
    {
      "number": "515",
      "name": "Panpour",
      "slug": "panpour",
      "weight": 13.5,
      "height": 0.6,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Panpour",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/515.png"
    },
    {
      "number": "516",
      "name": "Simipour",
      "slug": "simipour",
      "weight": 29,
      "height": 1,
      "abilities": [
        "Gluttony"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Simipour",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/516.png"
    },
    {
      "number": "517",
      "name": "Munna",
      "slug": "munna",
      "weight": 23.3,
      "height": 0.6,
      "abilities": [
        "Forewarn",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Munna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/517.png"
    },
    {
      "number": "518",
      "name": "Musharna",
      "slug": "musharna",
      "weight": 60.5,
      "height": 1.1,
      "abilities": [
        "Forewarn",
        "Synchronize"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Musharna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/518.png"
    },
    {
      "number": "519",
      "name": "Pidove",
      "slug": "pidove",
      "weight": 2.1,
      "height": 0.3,
      "abilities": [
        "Big Pecks",
        "Super Luck"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Pidove",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/519.png"
    },
    {
      "number": "520",
      "name": "Tranquill",
      "slug": "tranquill",
      "weight": 15,
      "height": 0.6,
      "abilities": [
        "Big Pecks",
        "Super Luck"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Tranquill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/520.png"
    },
    {
      "number": "521",
      "name": "Unfezant",
      "slug": "unfezant",
      "weight": 29,
      "height": 1.2,
      "abilities": [
        "Big Pecks",
        "Super Luck"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Unfezant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/521.png"
    },
    {
      "number": "522",
      "name": "Blitzle",
      "slug": "blitzle",
      "weight": 29.8,
      "height": 0.8,
      "abilities": [
        "Lightning Rod",
        "Motor Drive"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Blitzle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/522.png"
    },
    {
      "number": "523",
      "name": "Zebstrika",
      "slug": "zebstrika",
      "weight": 79.5,
      "height": 1.6,
      "abilities": [
        "Lightning Rod",
        "Motor Drive"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Zebstrika",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/523.png"
    },
    {
      "number": "524",
      "name": "Roggenrola",
      "slug": "roggenrola",
      "weight": 18,
      "height": 0.4,
      "abilities": [
        "Sturdy",
        "Weak Armor"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Roggenrola",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/524.png"
    },
    {
      "number": "525",
      "name": "Boldore",
      "slug": "boldore",
      "weight": 102,
      "height": 0.9,
      "abilities": [
        "Sturdy",
        "Weak Armor"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Boldore",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/525.png"
    },
    {
      "number": "526",
      "name": "Gigalith",
      "slug": "gigalith",
      "weight": 260,
      "height": 1.7,
      "abilities": [
        "Sand Stream",
        "Sturdy"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Gigalith",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/526.png"
    },
    {
      "number": "527",
      "name": "Woobat",
      "slug": "woobat",
      "weight": 2.1,
      "height": 0.4,
      "abilities": [
        "Klutz",
        "Unaware"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Woobat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/527.png"
    },
    {
      "number": "528",
      "name": "Swoobat",
      "slug": "swoobat",
      "weight": 10.5,
      "height": 0.9,
      "abilities": [
        "Klutz",
        "Unaware"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Swoobat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/528.png"
    },
    {
      "number": "529",
      "name": "Drilbur",
      "slug": "drilbur",
      "weight": 8.5,
      "height": 0.3,
      "abilities": [
        "Sand Force",
        "Sand Rush"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Drilbur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/529.png"
    },
    {
      "number": "530",
      "name": "Excadrill",
      "slug": "excadrill",
      "weight": 40.4,
      "height": 0.7,
      "abilities": [
        "Sand Force",
        "Sand Rush"
      ],
      "weakness": [
        "Fire",
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "ground",
        "steel"
      ],
      "ThumbnailAltText": "Excadrill",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/530.png"
    },
    {
      "number": "531",
      "name": "Audino",
      "slug": "audino",
      "weight": 31,
      "height": 1.1,
      "abilities": [
        "Healer",
        "Regenerator"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Audino",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/531.png"
    },
    {
      "number": "532",
      "name": "Timburr",
      "slug": "timburr",
      "weight": 12.5,
      "height": 0.6,
      "abilities": [
        "Guts",
        "Sheer Force"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Timburr",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/532.png"
    },
    {
      "number": "533",
      "name": "Gurdurr",
      "slug": "gurdurr",
      "weight": 40,
      "height": 1.2,
      "abilities": [
        "Guts",
        "Sheer Force"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Gurdurr",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/533.png"
    },
    {
      "number": "534",
      "name": "Conkeldurr",
      "slug": "conkeldurr",
      "weight": 87,
      "height": 1.4,
      "abilities": [
        "Guts",
        "Sheer Force"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Conkeldurr",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/534.png"
    },
    {
      "number": "535",
      "name": "Tympole",
      "slug": "tympole",
      "weight": 4.5,
      "height": 0.5,
      "abilities": [
        "Hydration",
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Tympole",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/535.png"
    },
    {
      "number": "536",
      "name": "Palpitoad",
      "slug": "palpitoad",
      "weight": 17,
      "height": 0.8,
      "abilities": [
        "Hydration",
        "Swift Swim"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Palpitoad",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/536.png"
    },
    {
      "number": "537",
      "name": "Seismitoad",
      "slug": "seismitoad",
      "weight": 62,
      "height": 1.5,
      "abilities": [
        "Poison Touch",
        "Swift Swim"
      ],
      "weakness": [
        "Grass"
      ],
      "type": [
        "water",
        "ground"
      ],
      "ThumbnailAltText": "Seismitoad",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/537.png"
    },
    {
      "number": "538",
      "name": "Throh",
      "slug": "throh",
      "weight": 55.5,
      "height": 1.3,
      "abilities": [
        "Guts",
        "Inner Focus"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Throh",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/538.png"
    },
    {
      "number": "539",
      "name": "Sawk",
      "slug": "sawk",
      "weight": 51,
      "height": 1.4,
      "abilities": [
        "Inner Focus",
        "Sturdy"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Sawk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/539.png"
    },
    {
      "number": "540",
      "name": "Sewaddle",
      "slug": "sewaddle",
      "weight": 2.5,
      "height": 0.3,
      "abilities": [
        "Chlorophyll",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Sewaddle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/540.png"
    },
    {
      "number": "541",
      "name": "Swadloon",
      "slug": "swadloon",
      "weight": 7.3,
      "height": 0.5,
      "abilities": [
        "Chlorophyll",
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Swadloon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/541.png"
    },
    {
      "number": "542",
      "name": "Leavanny",
      "slug": "leavanny",
      "weight": 20.5,
      "height": 1.2,
      "abilities": [
        "Chlorophyll",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "grass"
      ],
      "ThumbnailAltText": "Leavanny",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/542.png"
    },
    {
      "number": "543",
      "name": "Venipede",
      "slug": "venipede",
      "weight": 5.3,
      "height": 0.4,
      "abilities": [
        "Poison Point",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Venipede",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/543.png"
    },
    {
      "number": "544",
      "name": "Whirlipede",
      "slug": "whirlipede",
      "weight": 58.5,
      "height": 1.2,
      "abilities": [
        "Poison Point",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Whirlipede",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/544.png"
    },
    {
      "number": "545",
      "name": "Scolipede",
      "slug": "scolipede",
      "weight": 200.5,
      "height": 2.5,
      "abilities": [
        "Poison Point",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "poison"
      ],
      "ThumbnailAltText": "Scolipede",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/545.png"
    },
    {
      "number": "546",
      "name": "Cottonee",
      "slug": "cottonee",
      "weight": 0.6,
      "height": 0.3,
      "abilities": [
        "Infiltrator",
        "Prankster"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Ice",
        "Poison"
      ],
      "type": [
        "grass",
        "fairy"
      ],
      "ThumbnailAltText": "Cottonee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/546.png"
    },
    {
      "number": "547",
      "name": "Whimsicott",
      "slug": "whimsicott",
      "weight": 6.6,
      "height": 0.7,
      "abilities": [
        "Infiltrator",
        "Prankster"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Ice",
        "Poison"
      ],
      "type": [
        "grass",
        "fairy"
      ],
      "ThumbnailAltText": "Whimsicott",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/547.png"
    },
    {
      "number": "548",
      "name": "Petilil",
      "slug": "petilil",
      "weight": 6.6,
      "height": 0.5,
      "abilities": [
        "Chlorophyll",
        "Own Tempo"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Petilil",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/548.png"
    },
    {
      "number": "549",
      "name": "Lilligant",
      "slug": "lilligant",
      "weight": 16.3,
      "height": 1.1,
      "abilities": [
        "Chlorophyll",
        "Own Tempo"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Lilligant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/549.png"
    },
    {
      "number": "550",
      "name": "Basculin",
      "slug": "basculin",
      "weight": 18,
      "height": 1,
      "abilities": [
        "Adaptability",
        "Reckless"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Basculin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/550.png"
    },
    {
      "number": "551",
      "name": "Sandile",
      "slug": "sandile",
      "weight": 15.2,
      "height": 0.7,
      "abilities": [
        "Intimidate",
        "Moxie"
      ],
      "weakness": [
        "Ice",
        "Water",
        "Fighting",
        "Fairy",
        "Grass",
        "Bug"
      ],
      "type": [
        "ground",
        "dark"
      ],
      "ThumbnailAltText": "Sandile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/551.png"
    },
    {
      "number": "552",
      "name": "Krokorok",
      "slug": "krokorok",
      "weight": 33.4,
      "height": 1,
      "abilities": [
        "Intimidate",
        "Moxie"
      ],
      "weakness": [
        "Ice",
        "Water",
        "Fighting",
        "Fairy",
        "Grass",
        "Bug"
      ],
      "type": [
        "ground",
        "dark"
      ],
      "ThumbnailAltText": "Krokorok",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/552.png"
    },
    {
      "number": "553",
      "name": "Krookodile",
      "slug": "krookodile",
      "weight": 96.3,
      "height": 1.5,
      "abilities": [
        "Intimidate",
        "Moxie"
      ],
      "weakness": [
        "Ice",
        "Water",
        "Fighting",
        "Fairy",
        "Grass",
        "Bug"
      ],
      "type": [
        "ground",
        "dark"
      ],
      "ThumbnailAltText": "Krookodile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/553.png"
    },
    {
      "number": "554",
      "name": "Darumaka",
      "slug": "darumaka",
      "weight": 37.5,
      "height": 0.6,
      "abilities": [
        "Hustle"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Darumaka",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/554.png"
    },
    {
      "number": "555",
      "name": "Darmanitan",
      "slug": "darmanitan",
      "weight": 92.9,
      "height": 1.3,
      "abilities": [
        "Sheer Force"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Darmanitan",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/555.png"
    },
    {
      "number": "556",
      "name": "Maractus",
      "slug": "maractus",
      "weight": 28,
      "height": 1,
      "abilities": [
        "Chlorophyll",
        "Water Absorb"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Maractus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/556.png"
    },
    {
      "number": "557",
      "name": "Dwebble",
      "slug": "dwebble",
      "weight": 14.5,
      "height": 0.3,
      "abilities": [
        "Shell Armor",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Rock"
      ],
      "type": [
        "bug",
        "rock"
      ],
      "ThumbnailAltText": "Dwebble",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/557.png"
    },
    {
      "number": "558",
      "name": "Crustle",
      "slug": "crustle",
      "weight": 200,
      "height": 1.4,
      "abilities": [
        "Shell Armor",
        "Sturdy"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Rock"
      ],
      "type": [
        "bug",
        "rock"
      ],
      "ThumbnailAltText": "Crustle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/558.png"
    },
    {
      "number": "559",
      "name": "Scraggy",
      "slug": "scraggy",
      "weight": 11.8,
      "height": 0.6,
      "abilities": [
        "Moxie",
        "Shed Skin"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Fighting"
      ],
      "type": [
        "dark",
        "fighting"
      ],
      "ThumbnailAltText": "Scraggy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/559.png"
    },
    {
      "number": "560",
      "name": "Scrafty",
      "slug": "scrafty",
      "weight": 30,
      "height": 1.1,
      "abilities": [
        "Moxie",
        "Shed Skin"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Fighting"
      ],
      "type": [
        "dark",
        "fighting"
      ],
      "ThumbnailAltText": "Scrafty",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/560.png"
    },
    {
      "number": "561",
      "name": "Sigilyph",
      "slug": "sigilyph",
      "weight": 14,
      "height": 1.4,
      "abilities": [
        "Magic Guard",
        "Wonder Skin"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "psychic",
        "flying"
      ],
      "ThumbnailAltText": "Sigilyph",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/561.png"
    },
    {
      "number": "562",
      "name": "Yamask",
      "slug": "yamask",
      "weight": 1.5,
      "height": 0.5,
      "abilities": [
        "Mummy"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Yamask",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/562.png"
    },
    {
      "number": "563",
      "name": "Cofagrigus",
      "slug": "cofagrigus",
      "weight": 76.5,
      "height": 1.7,
      "abilities": [
        "Mummy"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Cofagrigus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/563.png"
    },
    {
      "number": "564",
      "name": "Tirtouga",
      "slug": "tirtouga",
      "weight": 16.5,
      "height": 0.7,
      "abilities": [
        "Solid Rock",
        "Sturdy"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "rock"
      ],
      "ThumbnailAltText": "Tirtouga",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/564.png"
    },
    {
      "number": "565",
      "name": "Carracosta",
      "slug": "carracosta",
      "weight": 81,
      "height": 1.2,
      "abilities": [
        "Solid Rock",
        "Sturdy"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "rock"
      ],
      "ThumbnailAltText": "Carracosta",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/565.png"
    },
    {
      "number": "566",
      "name": "Archen",
      "slug": "archen",
      "weight": 9.5,
      "height": 0.5,
      "abilities": [
        "Defeatist"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "rock",
        "flying"
      ],
      "ThumbnailAltText": "Archen",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/566.png"
    },
    {
      "number": "567",
      "name": "Archeops",
      "slug": "archeops",
      "weight": 32,
      "height": 1.4,
      "abilities": [
        "Defeatist"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "rock",
        "flying"
      ],
      "ThumbnailAltText": "Archeops",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/567.png"
    },
    {
      "number": "568",
      "name": "Trubbish",
      "slug": "trubbish",
      "weight": 31,
      "height": 0.6,
      "abilities": [
        "Stench",
        "Sticky Hold"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Trubbish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/568.png"
    },
    {
      "number": "569",
      "name": "Garbodor",
      "slug": "garbodor",
      "weight": 107.3,
      "height": 1.9,
      "abilities": [
        "Stench",
        "Weak Armor"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Garbodor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/569.png"
    },
    {
      "number": "570",
      "name": "Zorua",
      "slug": "zorua",
      "weight": 12.5,
      "height": 0.7,
      "abilities": [
        "Illusion"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Zorua",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/570.png"
    },
    {
      "number": "571",
      "name": "Zoroark",
      "slug": "zoroark",
      "weight": 81.1,
      "height": 1.6,
      "abilities": [
        "Illusion"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Zoroark",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/571.png"
    },
    {
      "number": "572",
      "name": "Minccino",
      "slug": "minccino",
      "weight": 5.8,
      "height": 0.4,
      "abilities": [
        "Cute Charm",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Minccino",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/572.png"
    },
    {
      "number": "573",
      "name": "Cinccino",
      "slug": "cinccino",
      "weight": 7.5,
      "height": 0.5,
      "abilities": [
        "Cute Charm",
        "Technician"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Cinccino",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/573.png"
    },
    {
      "number": "574",
      "name": "Gothita",
      "slug": "gothita",
      "weight": 5.8,
      "height": 0.4,
      "abilities": [
        "Competitive",
        "Frisk"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Gothita",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/574.png"
    },
    {
      "number": "575",
      "name": "Gothorita",
      "slug": "gothorita",
      "weight": 18,
      "height": 0.7,
      "abilities": [
        "Competitive",
        "Frisk"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Gothorita",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/575.png"
    },
    {
      "number": "576",
      "name": "Gothitelle",
      "slug": "gothitelle",
      "weight": 44,
      "height": 1.5,
      "abilities": [
        "Competitive",
        "Frisk"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Gothitelle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/576.png"
    },
    {
      "number": "577",
      "name": "Solosis",
      "slug": "solosis",
      "weight": 1,
      "height": 0.3,
      "abilities": [
        "Magic Guard",
        "Overcoat"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Solosis",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/577.png"
    },
    {
      "number": "578",
      "name": "Duosion",
      "slug": "duosion",
      "weight": 8,
      "height": 0.6,
      "abilities": [
        "Magic Guard",
        "Overcoat"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Duosion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/578.png"
    },
    {
      "number": "579",
      "name": "Reuniclus",
      "slug": "reuniclus",
      "weight": 20.1,
      "height": 1,
      "abilities": [
        "Magic Guard",
        "Overcoat"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Reuniclus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/579.png"
    },
    {
      "number": "580",
      "name": "Ducklett",
      "slug": "ducklett",
      "weight": 5.5,
      "height": 0.5,
      "abilities": [
        "Big Pecks",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Ducklett",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/580.png"
    },
    {
      "number": "581",
      "name": "Swanna",
      "slug": "swanna",
      "weight": 24.2,
      "height": 1.3,
      "abilities": [
        "Big Pecks",
        "Keen Eye"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "flying"
      ],
      "ThumbnailAltText": "Swanna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/581.png"
    },
    {
      "number": "582",
      "name": "Vanillite",
      "slug": "vanillite",
      "weight": 5.7,
      "height": 0.4,
      "abilities": [
        "Ice Body",
        "Snow Cloak"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Vanillite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/582.png"
    },
    {
      "number": "583",
      "name": "Vanillish",
      "slug": "vanillish",
      "weight": 41,
      "height": 1.1,
      "abilities": [
        "Ice Body",
        "Snow Cloak"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Vanillish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/583.png"
    },
    {
      "number": "584",
      "name": "Vanilluxe",
      "slug": "vanilluxe",
      "weight": 57.5,
      "height": 1.3,
      "abilities": [
        "Ice Body",
        "Snow Warning"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Vanilluxe",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/584.png"
    },
    {
      "number": "585",
      "name": "Deerling",
      "slug": "deerling",
      "weight": 19.5,
      "height": 0.6,
      "abilities": [
        "Chlorophyll",
        "Sap Sipper"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Fighting",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "normal",
        "grass"
      ],
      "ThumbnailAltText": "Deerling",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/585.png"
    },
    {
      "number": "586",
      "name": "Sawsbuck",
      "slug": "sawsbuck",
      "weight": 92.5,
      "height": 1.9,
      "abilities": [
        "Chlorophyll",
        "Sap Sipper"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Fighting",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "normal",
        "grass"
      ],
      "ThumbnailAltText": "Sawsbuck",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/586.png"
    },
    {
      "number": "587",
      "name": "Emolga",
      "slug": "emolga",
      "weight": 5,
      "height": 0.4,
      "abilities": [
        "Static"
      ],
      "weakness": [
        "Ice",
        "Rock"
      ],
      "type": [
        "electric",
        "flying"
      ],
      "ThumbnailAltText": "Emolga",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/587.png"
    },
    {
      "number": "588",
      "name": "Karrablast",
      "slug": "karrablast",
      "weight": 5.9,
      "height": 0.5,
      "abilities": [
        "Shed Skin",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Karrablast",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/588.png"
    },
    {
      "number": "589",
      "name": "Escavalier",
      "slug": "escavalier",
      "weight": 33,
      "height": 1,
      "abilities": [
        "Shell Armor",
        "Swarm"
      ],
      "weakness": [
        "Fire"
      ],
      "type": [
        "bug",
        "steel"
      ],
      "ThumbnailAltText": "Escavalier",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/589.png"
    },
    {
      "number": "590",
      "name": "Foongus",
      "slug": "foongus",
      "weight": 1,
      "height": 0.2,
      "abilities": [
        "Effect Spore"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Foongus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/590.png"
    },
    {
      "number": "591",
      "name": "Amoonguss",
      "slug": "amoonguss",
      "weight": 10.5,
      "height": 0.6,
      "abilities": [
        "Effect Spore"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice"
      ],
      "type": [
        "grass",
        "poison"
      ],
      "ThumbnailAltText": "Amoonguss",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/591.png"
    },
    {
      "number": "592",
      "name": "Frillish",
      "slug": "frillish",
      "weight": 33,
      "height": 1.2,
      "abilities": [
        "Cursed Body",
        "Water Absorb"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric"
      ],
      "type": [
        "water",
        "ghost"
      ],
      "ThumbnailAltText": "Frillish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/592.png"
    },
    {
      "number": "593",
      "name": "Jellicent",
      "slug": "jellicent",
      "weight": 135,
      "height": 2.2,
      "abilities": [
        "Cursed Body",
        "Water Absorb"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric"
      ],
      "type": [
        "water",
        "ghost"
      ],
      "ThumbnailAltText": "Jellicent",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/593.png"
    },
    {
      "number": "594",
      "name": "Alomomola",
      "slug": "alomomola",
      "weight": 31.6,
      "height": 1.2,
      "abilities": [
        "Healer",
        "Hydration"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Alomomola",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/594.png"
    },
    {
      "number": "595",
      "name": "Joltik",
      "slug": "joltik",
      "weight": 0.6,
      "height": 0.1,
      "abilities": [
        "Compound Eyes",
        "Unnerve"
      ],
      "weakness": [
        "Fire",
        "Rock"
      ],
      "type": [
        "bug",
        "electric"
      ],
      "ThumbnailAltText": "Joltik",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/595.png"
    },
    {
      "number": "596",
      "name": "Galvantula",
      "slug": "galvantula",
      "weight": 14.3,
      "height": 0.8,
      "abilities": [
        "Compound Eyes",
        "Unnerve"
      ],
      "weakness": [
        "Fire",
        "Rock"
      ],
      "type": [
        "bug",
        "electric"
      ],
      "ThumbnailAltText": "Galvantula",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/596.png"
    },
    {
      "number": "597",
      "name": "Ferroseed",
      "slug": "ferroseed",
      "weight": 18.8,
      "height": 0.6,
      "abilities": [
        "Iron Barbs"
      ],
      "weakness": [
        "Fire",
        "Fighting"
      ],
      "type": [
        "grass",
        "steel"
      ],
      "ThumbnailAltText": "Ferroseed",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/597.png"
    },
    {
      "number": "598",
      "name": "Ferrothorn",
      "slug": "ferrothorn",
      "weight": 110,
      "height": 1,
      "abilities": [
        "Iron Barbs"
      ],
      "weakness": [
        "Fire",
        "Fighting"
      ],
      "type": [
        "grass",
        "steel"
      ],
      "ThumbnailAltText": "Ferrothorn",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/598.png"
    },
    {
      "number": "599",
      "name": "Klink",
      "slug": "klink",
      "weight": 21,
      "height": 0.3,
      "abilities": [
        "Minus",
        "Plus"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Klink",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/599.png"
    },
    {
      "number": "600",
      "name": "Klang",
      "slug": "klang",
      "weight": 51,
      "height": 0.6,
      "abilities": [
        "Minus",
        "Plus"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Klang",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/600.png"
    },
    {
      "number": "601",
      "name": "Klinklang",
      "slug": "klinklang",
      "weight": 81,
      "height": 0.6,
      "abilities": [
        "Minus",
        "Plus"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Klinklang",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/601.png"
    },
    {
      "number": "602",
      "name": "Tynamo",
      "slug": "tynamo",
      "weight": 0.3,
      "height": 0.2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Tynamo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/602.png"
    },
    {
      "number": "603",
      "name": "Eelektrik",
      "slug": "eelektrik",
      "weight": 22,
      "height": 1.2,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Eelektrik",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/603.png"
    },
    {
      "number": "604",
      "name": "Eelektross",
      "slug": "eelektross",
      "weight": 80.5,
      "height": 2.1,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Eelektross",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/604.png"
    },
    {
      "number": "605",
      "name": "Elgyem",
      "slug": "elgyem",
      "weight": 9,
      "height": 0.5,
      "abilities": [
        "Synchronize",
        "Telepathy"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Elgyem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/605.png"
    },
    {
      "number": "606",
      "name": "Beheeyem",
      "slug": "beheeyem",
      "weight": 34.5,
      "height": 1,
      "abilities": [
        "Synchronize",
        "Telepathy"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Beheeyem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/606.png"
    },
    {
      "number": "607",
      "name": "Litwick",
      "slug": "litwick",
      "weight": 3.1,
      "height": 0.3,
      "abilities": [
        "Flame Body",
        "Flash Fire"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Ground",
        "Water",
        "Rock"
      ],
      "type": [
        "ghost",
        "fire"
      ],
      "ThumbnailAltText": "Litwick",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/607.png"
    },
    {
      "number": "608",
      "name": "Lampent",
      "slug": "lampent",
      "weight": 13,
      "height": 0.6,
      "abilities": [
        "Flame Body",
        "Flash Fire"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Ground",
        "Water",
        "Rock"
      ],
      "type": [
        "ghost",
        "fire"
      ],
      "ThumbnailAltText": "Lampent",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/608.png"
    },
    {
      "number": "609",
      "name": "Chandelure",
      "slug": "chandelure",
      "weight": 34.3,
      "height": 1,
      "abilities": [
        "Flame Body",
        "Flash Fire"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Ground",
        "Water",
        "Rock"
      ],
      "type": [
        "ghost",
        "fire"
      ],
      "ThumbnailAltText": "Chandelure",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/609.png"
    },
    {
      "number": "610",
      "name": "Axew",
      "slug": "axew",
      "weight": 18,
      "height": 0.6,
      "abilities": [
        "Mold Breaker",
        "Rivalry"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Axew",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/610.png"
    },
    {
      "number": "611",
      "name": "Fraxure",
      "slug": "fraxure",
      "weight": 36,
      "height": 1,
      "abilities": [
        "Mold Breaker",
        "Rivalry"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Fraxure",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/611.png"
    },
    {
      "number": "612",
      "name": "Haxorus",
      "slug": "haxorus",
      "weight": 105.5,
      "height": 1.8,
      "abilities": [
        "Mold Breaker",
        "Rivalry"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Haxorus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/612.png"
    },
    {
      "number": "613",
      "name": "Cubchoo",
      "slug": "cubchoo",
      "weight": 8.5,
      "height": 0.5,
      "abilities": [
        "Slush Rush",
        "Snow Cloak"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Cubchoo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/613.png"
    },
    {
      "number": "614",
      "name": "Beartic",
      "slug": "beartic",
      "weight": 260,
      "height": 2.6,
      "abilities": [
        "Slush Rush",
        "Snow Cloak"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Beartic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/614.png"
    },
    {
      "number": "615",
      "name": "Cryogonal",
      "slug": "cryogonal",
      "weight": 148,
      "height": 1.1,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Cryogonal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/615.png"
    },
    {
      "number": "616",
      "name": "Shelmet",
      "slug": "shelmet",
      "weight": 7.7,
      "height": 0.4,
      "abilities": [
        "Hydration",
        "Shell Armor"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Shelmet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/616.png"
    },
    {
      "number": "617",
      "name": "Accelgor",
      "slug": "accelgor",
      "weight": 25.3,
      "height": 0.8,
      "abilities": [
        "Hydration",
        "Sticky Hold"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Accelgor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/617.png"
    },
    {
      "number": "618",
      "name": "Stunfisk",
      "slug": "stunfisk",
      "weight": 11,
      "height": 0.7,
      "abilities": [
        "Limber",
        "Static"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice",
        "Ground"
      ],
      "type": [
        "ground",
        "electric"
      ],
      "ThumbnailAltText": "Stunfisk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/618.png"
    },
    {
      "number": "619",
      "name": "Mienfoo",
      "slug": "mienfoo",
      "weight": 20,
      "height": 0.9,
      "abilities": [
        "Inner Focus",
        "Regenerator"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Mienfoo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/619.png"
    },
    {
      "number": "620",
      "name": "Mienshao",
      "slug": "mienshao",
      "weight": 35.5,
      "height": 1.4,
      "abilities": [
        "Inner Focus",
        "Regenerator"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Mienshao",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/620.png"
    },
    {
      "number": "621",
      "name": "Druddigon",
      "slug": "druddigon",
      "weight": 139,
      "height": 1.6,
      "abilities": [
        "Rough Skin",
        "Sheer Force"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Druddigon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/621.png"
    },
    {
      "number": "622",
      "name": "Golett",
      "slug": "golett",
      "weight": 92,
      "height": 1,
      "abilities": [
        "Iron Fist",
        "Klutz"
      ],
      "weakness": [
        "Water",
        "Ghost",
        "Grass",
        "Dark",
        "Ice"
      ],
      "type": [
        "ground",
        "ghost"
      ],
      "ThumbnailAltText": "Golett",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/622.png"
    },
    {
      "number": "623",
      "name": "Golurk",
      "slug": "golurk",
      "weight": 330,
      "height": 2.8,
      "abilities": [
        "Iron Fist",
        "Klutz"
      ],
      "weakness": [
        "Water",
        "Ghost",
        "Grass",
        "Dark",
        "Ice"
      ],
      "type": [
        "ground",
        "ghost"
      ],
      "ThumbnailAltText": "Golurk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/623.png"
    },
    {
      "number": "624",
      "name": "Pawniard",
      "slug": "pawniard",
      "weight": 10.2,
      "height": 0.5,
      "abilities": [
        "Defiant",
        "Inner Focus"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "dark",
        "steel"
      ],
      "ThumbnailAltText": "Pawniard",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/624.png"
    },
    {
      "number": "625",
      "name": "Bisharp",
      "slug": "bisharp",
      "weight": 70,
      "height": 1.6,
      "abilities": [
        "Defiant",
        "Inner Focus"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "dark",
        "steel"
      ],
      "ThumbnailAltText": "Bisharp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/625.png"
    },
    {
      "number": "626",
      "name": "Bouffalant",
      "slug": "bouffalant",
      "weight": 94.6,
      "height": 1.6,
      "abilities": [
        "Reckless",
        "Sap Sipper"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Bouffalant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/626.png"
    },
    {
      "number": "627",
      "name": "Rufflet",
      "slug": "rufflet",
      "weight": 10.5,
      "height": 0.5,
      "abilities": [
        "Keen Eye",
        "Sheer Force"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Rufflet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/627.png"
    },
    {
      "number": "628",
      "name": "Braviary",
      "slug": "braviary",
      "weight": 41,
      "height": 1.5,
      "abilities": [
        "Keen Eye",
        "Sheer Force"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Braviary",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/628.png"
    },
    {
      "number": "629",
      "name": "Vullaby",
      "slug": "vullaby",
      "weight": 9,
      "height": 0.5,
      "abilities": [
        "Big Pecks",
        "Overcoat"
      ],
      "weakness": [
        "Fairy",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "dark",
        "flying"
      ],
      "ThumbnailAltText": "Vullaby",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/629.png"
    },
    {
      "number": "630",
      "name": "Mandibuzz",
      "slug": "mandibuzz",
      "weight": 39.5,
      "height": 1.2,
      "abilities": [
        "Big Pecks",
        "Overcoat"
      ],
      "weakness": [
        "Fairy",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "dark",
        "flying"
      ],
      "ThumbnailAltText": "Mandibuzz",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/630.png"
    },
    {
      "number": "631",
      "name": "Heatmor",
      "slug": "heatmor",
      "weight": 58,
      "height": 1.4,
      "abilities": [
        "Flash Fire",
        "Gluttony"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Heatmor",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/631.png"
    },
    {
      "number": "632",
      "name": "Durant",
      "slug": "durant",
      "weight": 33,
      "height": 0.3,
      "abilities": [
        "Hustle",
        "Swarm"
      ],
      "weakness": [
        "Fire"
      ],
      "type": [
        "bug",
        "steel"
      ],
      "ThumbnailAltText": "Durant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/632.png"
    },
    {
      "number": "633",
      "name": "Deino",
      "slug": "deino",
      "weight": 17.3,
      "height": 0.8,
      "abilities": [
        "Hustle"
      ],
      "weakness": [
        "Fairy",
        "Fighting",
        "Bug",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dark",
        "dragon"
      ],
      "ThumbnailAltText": "Deino",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/633.png"
    },
    {
      "number": "634",
      "name": "Zweilous",
      "slug": "zweilous",
      "weight": 50,
      "height": 1.4,
      "abilities": [
        "Hustle"
      ],
      "weakness": [
        "Fairy",
        "Fighting",
        "Bug",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dark",
        "dragon"
      ],
      "ThumbnailAltText": "Zweilous",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/634.png"
    },
    {
      "number": "635",
      "name": "Hydreigon",
      "slug": "hydreigon",
      "weight": 160,
      "height": 1.8,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fairy",
        "Fighting",
        "Bug",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dark",
        "dragon"
      ],
      "ThumbnailAltText": "Hydreigon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/635.png"
    },
    {
      "number": "636",
      "name": "Larvesta",
      "slug": "larvesta",
      "weight": 28.8,
      "height": 1.1,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "fire"
      ],
      "ThumbnailAltText": "Larvesta",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/636.png"
    },
    {
      "number": "637",
      "name": "Volcarona",
      "slug": "volcarona",
      "weight": 46,
      "height": 1.6,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug",
        "fire"
      ],
      "ThumbnailAltText": "Volcarona",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/637.png"
    },
    {
      "number": "638",
      "name": "Cobalion",
      "slug": "cobalion",
      "weight": 250,
      "height": 2.1,
      "abilities": [
        "Justified"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "fighting"
      ],
      "ThumbnailAltText": "Cobalion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/638.png"
    },
    {
      "number": "639",
      "name": "Terrakion",
      "slug": "terrakion",
      "weight": 260,
      "height": 1.9,
      "abilities": [
        "Justified"
      ],
      "weakness": [
        "Steel",
        "Psychic",
        "Fighting",
        "Water",
        "Fairy",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "fighting"
      ],
      "ThumbnailAltText": "Terrakion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/639.png"
    },
    {
      "number": "640",
      "name": "Virizion",
      "slug": "virizion",
      "weight": 200,
      "height": 2,
      "abilities": [
        "Justified"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice",
        "Poison",
        "Fairy"
      ],
      "type": [
        "grass",
        "fighting"
      ],
      "ThumbnailAltText": "Virizion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/640.png"
    },
    {
      "number": "641",
      "name": "Tornadus",
      "slug": "tornadus",
      "weight": 63,
      "height": 1.5,
      "abilities": [
        "Prankster"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "flying"
      ],
      "ThumbnailAltText": "Tornadus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/641.png"
    },
    {
      "number": "642",
      "name": "Thundurus",
      "slug": "thundurus",
      "weight": 61,
      "height": 1.5,
      "abilities": [
        "Prankster"
      ],
      "weakness": [
        "Ice",
        "Rock"
      ],
      "type": [
        "electric",
        "flying"
      ],
      "ThumbnailAltText": "Thundurus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/642.png"
    },
    {
      "number": "643",
      "name": "Reshiram",
      "slug": "reshiram",
      "weight": 330,
      "height": 3.2,
      "abilities": [
        "Turboblaze"
      ],
      "weakness": [
        "Ground",
        "Rock",
        "Dragon"
      ],
      "type": [
        "dragon",
        "fire"
      ],
      "ThumbnailAltText": "Reshiram",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/643.png"
    },
    {
      "number": "644",
      "name": "Zekrom",
      "slug": "zekrom",
      "weight": 345,
      "height": 2.9,
      "abilities": [
        "Teravolt"
      ],
      "weakness": [
        "Fairy",
        "Dragon",
        "Ice",
        "Ground"
      ],
      "type": [
        "dragon",
        "electric"
      ],
      "ThumbnailAltText": "Zekrom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/644.png"
    },
    {
      "number": "645",
      "name": "Landorus",
      "slug": "landorus",
      "weight": 68,
      "height": 1.5,
      "abilities": [
        "Sand Force"
      ],
      "weakness": [
        "Water",
        "Ice"
      ],
      "type": [
        "ground",
        "flying"
      ],
      "ThumbnailAltText": "Landorus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/645.png"
    },
    {
      "number": "646",
      "name": "Kyurem",
      "slug": "kyurem",
      "weight": 325,
      "height": 3,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Steel",
        "Fairy",
        "Rock",
        "Fighting",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ice"
      ],
      "ThumbnailAltText": "Kyurem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/646.png"
    },
    {
      "number": "647",
      "name": "Keldeo",
      "slug": "keldeo",
      "weight": 48.5,
      "height": 1.4,
      "abilities": [
        "Justified"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Flying",
        "Psychic",
        "Electric"
      ],
      "type": [
        "water",
        "fighting"
      ],
      "ThumbnailAltText": "Keldeo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/647.png"
    },
    {
      "number": "648",
      "name": "Meloetta",
      "slug": "meloetta",
      "weight": 6.5,
      "height": 0.6,
      "abilities": [
        "Serene Grace"
      ],
      "weakness": [
        "Dark",
        "Bug"
      ],
      "type": [
        "normal",
        "psychic"
      ],
      "ThumbnailAltText": "Meloetta",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/648.png"
    },
    {
      "number": "649",
      "name": "Genesect",
      "slug": "genesect",
      "weight": 82.5,
      "height": 1.5,
      "abilities": [
        "Download"
      ],
      "weakness": [
        "Fire"
      ],
      "type": [
        "bug",
        "steel"
      ],
      "ThumbnailAltText": "Genesect",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/649.png"
    },
    {
      "number": "650",
      "name": "Chespin",
      "slug": "chespin",
      "weight": 9,
      "height": 0.4,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Chespin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/650.png"
    },
    {
      "number": "651",
      "name": "Quilladin",
      "slug": "quilladin",
      "weight": 29,
      "height": 0.7,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Quilladin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/651.png"
    },
    {
      "number": "652",
      "name": "Chesnaught",
      "slug": "chesnaught",
      "weight": 90,
      "height": 1.6,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Ice",
        "Poison",
        "Fairy"
      ],
      "type": [
        "grass",
        "fighting"
      ],
      "ThumbnailAltText": "Chesnaught",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/652.png"
    },
    {
      "number": "653",
      "name": "Fennekin",
      "slug": "fennekin",
      "weight": 9.4,
      "height": 0.4,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Fennekin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/653.png"
    },
    {
      "number": "654",
      "name": "Braixen",
      "slug": "braixen",
      "weight": 14.5,
      "height": 1,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Braixen",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/654.png"
    },
    {
      "number": "655",
      "name": "Delphox",
      "slug": "delphox",
      "weight": 39,
      "height": 1.5,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Ground",
        "Water",
        "Rock"
      ],
      "type": [
        "fire",
        "psychic"
      ],
      "ThumbnailAltText": "Delphox",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/655.png"
    },
    {
      "number": "656",
      "name": "Froakie",
      "slug": "froakie",
      "weight": 7,
      "height": 0.3,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Froakie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/656.png"
    },
    {
      "number": "657",
      "name": "Frogadier",
      "slug": "frogadier",
      "weight": 10.9,
      "height": 0.6,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Frogadier",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/657.png"
    },
    {
      "number": "658",
      "name": "Greninja",
      "slug": "greninja",
      "weight": 40,
      "height": 1.5,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Fairy",
        "Grass",
        "Electric",
        "Fighting",
        "Bug"
      ],
      "type": [
        "water",
        "dark"
      ],
      "ThumbnailAltText": "Greninja",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/658.png"
    },
    {
      "number": "659",
      "name": "Bunnelby",
      "slug": "bunnelby",
      "weight": 5,
      "height": 0.4,
      "abilities": [
        "Cheek Pouch",
        "Pickup"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Bunnelby",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/659.png"
    },
    {
      "number": "660",
      "name": "Diggersby",
      "slug": "diggersby",
      "weight": 42.4,
      "height": 1,
      "abilities": [
        "Cheek Pouch",
        "Pickup"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Fighting",
        "Ice"
      ],
      "type": [
        "normal",
        "ground"
      ],
      "ThumbnailAltText": "Diggersby",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/660.png"
    },
    {
      "number": "661",
      "name": "Fletchling",
      "slug": "fletchling",
      "weight": 1.7,
      "height": 0.3,
      "abilities": [
        "Big Pecks"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Fletchling",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/661.png"
    },
    {
      "number": "662",
      "name": "Fletchinder",
      "slug": "fletchinder",
      "weight": 16,
      "height": 0.7,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Fletchinder",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/662.png"
    },
    {
      "number": "663",
      "name": "Talonflame",
      "slug": "talonflame",
      "weight": 24.5,
      "height": 1.2,
      "abilities": [
        "Flame Body"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Talonflame",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/663.png"
    },
    {
      "number": "664",
      "name": "Scatterbug",
      "slug": "scatterbug",
      "weight": 2.5,
      "height": 0.3,
      "abilities": [
        "Compound Eyes",
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Scatterbug",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/664.png"
    },
    {
      "number": "665",
      "name": "Spewpa",
      "slug": "spewpa",
      "weight": 8.4,
      "height": 0.3,
      "abilities": [
        "Shed Skin"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Spewpa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/665.png"
    },
    {
      "number": "666",
      "name": "Vivillon",
      "slug": "vivillon",
      "weight": 17,
      "height": 1.2,
      "abilities": [
        "Compound Eyes",
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "bug",
        "flying"
      ],
      "ThumbnailAltText": "Vivillon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/666.png"
    },
    {
      "number": "667",
      "name": "Litleo",
      "slug": "litleo",
      "weight": 13.5,
      "height": 0.6,
      "abilities": [
        "Rivalry",
        "Unnerve"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "fire",
        "normal"
      ],
      "ThumbnailAltText": "Litleo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/667.png"
    },
    {
      "number": "668",
      "name": "Pyroar",
      "slug": "pyroar",
      "weight": 81.5,
      "height": 1.5,
      "abilities": [
        "Rivalry",
        "Unnerve"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "fire",
        "normal"
      ],
      "ThumbnailAltText": "Pyroar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/668.png"
    },
    {
      "number": "669",
      "name": "Flabébé",
      "slug": "flabebe",
      "weight": 0.1,
      "height": 0.1,
      "abilities": [
        "Flower Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Flabébé",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/669.png"
    },
    {
      "number": "670",
      "name": "Floette",
      "slug": "floette",
      "weight": 0.9,
      "height": 0.2,
      "abilities": [
        "Flower Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Floette",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/670.png"
    },
    {
      "number": "671",
      "name": "Florges",
      "slug": "florges",
      "weight": 10,
      "height": 1.1,
      "abilities": [
        "Flower Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Florges",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/671.png"
    },
    {
      "number": "672",
      "name": "Skiddo",
      "slug": "skiddo",
      "weight": 31,
      "height": 0.9,
      "abilities": [
        "Sap Sipper"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Skiddo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/672.png"
    },
    {
      "number": "673",
      "name": "Gogoat",
      "slug": "gogoat",
      "weight": 91,
      "height": 1.7,
      "abilities": [
        "Sap Sipper"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Gogoat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/673.png"
    },
    {
      "number": "674",
      "name": "Pancham",
      "slug": "pancham",
      "weight": 8,
      "height": 0.6,
      "abilities": [
        "Iron Fist",
        "Mold Breaker"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Pancham",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/674.png"
    },
    {
      "number": "675",
      "name": "Pangoro",
      "slug": "pangoro",
      "weight": 136,
      "height": 2.1,
      "abilities": [
        "Iron Fist",
        "Mold Breaker"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Fighting"
      ],
      "type": [
        "fighting",
        "dark"
      ],
      "ThumbnailAltText": "Pangoro",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/675.png"
    },
    {
      "number": "676",
      "name": "Furfrou",
      "slug": "furfrou",
      "weight": 28,
      "height": 1.2,
      "abilities": [
        "Fur Coat"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Furfrou",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/676.png"
    },
    {
      "number": "677",
      "name": "Espurr",
      "slug": "espurr",
      "weight": 3.5,
      "height": 0.3,
      "abilities": [
        "Infiltrator",
        "Keen Eye"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Espurr",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/677.png"
    },
    {
      "number": "678",
      "name": "Meowstic",
      "slug": "meowstic",
      "weight": 8.5,
      "height": 0.6,
      "abilities": [
        "Infiltrator",
        "Keen Eye"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Meowstic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/678.png"
    },
    {
      "number": "679",
      "name": "Honedge",
      "slug": "honedge",
      "weight": 2,
      "height": 0.8,
      "abilities": [
        "No Guard"
      ],
      "weakness": [
        "Fire",
        "Ghost",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "ghost"
      ],
      "ThumbnailAltText": "Honedge",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/679.png"
    },
    {
      "number": "680",
      "name": "Doublade",
      "slug": "doublade",
      "weight": 4.5,
      "height": 0.8,
      "abilities": [
        "No Guard"
      ],
      "weakness": [
        "Fire",
        "Ghost",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "ghost"
      ],
      "ThumbnailAltText": "Doublade",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/680.png"
    },
    {
      "number": "681",
      "name": "Aegislash",
      "slug": "aegislash",
      "weight": 53,
      "height": 1.7,
      "abilities": [
        "Stance Change"
      ],
      "weakness": [
        "Fire",
        "Ghost",
        "Dark",
        "Ground"
      ],
      "type": [
        "steel",
        "ghost"
      ],
      "ThumbnailAltText": "Aegislash",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/681.png"
    },
    {
      "number": "682",
      "name": "Spritzee",
      "slug": "spritzee",
      "weight": 0.5,
      "height": 0.2,
      "abilities": [
        "Healer"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Spritzee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/682.png"
    },
    {
      "number": "683",
      "name": "Aromatisse",
      "slug": "aromatisse",
      "weight": 15.5,
      "height": 0.8,
      "abilities": [
        "Healer"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Aromatisse",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/683.png"
    },
    {
      "number": "684",
      "name": "Swirlix",
      "slug": "swirlix",
      "weight": 3.5,
      "height": 0.4,
      "abilities": [
        "Sweet Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Swirlix",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/684.png"
    },
    {
      "number": "685",
      "name": "Slurpuff",
      "slug": "slurpuff",
      "weight": 5,
      "height": 0.8,
      "abilities": [
        "Sweet Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Slurpuff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/685.png"
    },
    {
      "number": "686",
      "name": "Inkay",
      "slug": "inkay",
      "weight": 3.5,
      "height": 0.4,
      "abilities": [
        "Contrary",
        "Suction Cups"
      ],
      "weakness": [
        "Fairy",
        "Bug"
      ],
      "type": [
        "dark",
        "psychic"
      ],
      "ThumbnailAltText": "Inkay",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/686.png"
    },
    {
      "number": "687",
      "name": "Malamar",
      "slug": "malamar",
      "weight": 47,
      "height": 1.5,
      "abilities": [
        "Contrary",
        "Suction Cups"
      ],
      "weakness": [
        "Fairy",
        "Bug"
      ],
      "type": [
        "dark",
        "psychic"
      ],
      "ThumbnailAltText": "Malamar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/687.png"
    },
    {
      "number": "688",
      "name": "Binacle",
      "slug": "binacle",
      "weight": 31,
      "height": 0.5,
      "abilities": [
        "Sniper",
        "Tough Claws"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Binacle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/688.png"
    },
    {
      "number": "689",
      "name": "Barbaracle",
      "slug": "barbaracle",
      "weight": 96,
      "height": 1.3,
      "abilities": [
        "Sniper",
        "Tough Claws"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "water"
      ],
      "ThumbnailAltText": "Barbaracle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/689.png"
    },
    {
      "number": "690",
      "name": "Skrelp",
      "slug": "skrelp",
      "weight": 7.3,
      "height": 0.5,
      "abilities": [
        "Poison Point",
        "Poison Touch"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "poison",
        "water"
      ],
      "ThumbnailAltText": "Skrelp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/690.png"
    },
    {
      "number": "691",
      "name": "Dragalge",
      "slug": "dragalge",
      "weight": 81.5,
      "height": 1.8,
      "abilities": [
        "Poison Point",
        "Poison Touch"
      ],
      "weakness": [
        "Psychic",
        "Ground",
        "Ice",
        "Dragon"
      ],
      "type": [
        "poison",
        "dragon"
      ],
      "ThumbnailAltText": "Dragalge",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/691.png"
    },
    {
      "number": "692",
      "name": "Clauncher",
      "slug": "clauncher",
      "weight": 8.3,
      "height": 0.5,
      "abilities": [
        "Mega Launcher"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Clauncher",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/692.png"
    },
    {
      "number": "693",
      "name": "Clawitzer",
      "slug": "clawitzer",
      "weight": 35.3,
      "height": 1.3,
      "abilities": [
        "Mega Launcher"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Clawitzer",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/693.png"
    },
    {
      "number": "694",
      "name": "Helioptile",
      "slug": "helioptile",
      "weight": 6,
      "height": 0.5,
      "abilities": [
        "Dry Skin",
        "Sand Veil"
      ],
      "weakness": [
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "normal"
      ],
      "ThumbnailAltText": "Helioptile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/694.png"
    },
    {
      "number": "695",
      "name": "Heliolisk",
      "slug": "heliolisk",
      "weight": 21,
      "height": 1,
      "abilities": [
        "Dry Skin",
        "Sand Veil"
      ],
      "weakness": [
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "normal"
      ],
      "ThumbnailAltText": "Heliolisk",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/695.png"
    },
    {
      "number": "696",
      "name": "Tyrunt",
      "slug": "tyrunt",
      "weight": 26,
      "height": 0.8,
      "abilities": [
        "Strong Jaw"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Dragon",
        "Ice",
        "Fairy",
        "Ground"
      ],
      "type": [
        "rock",
        "dragon"
      ],
      "ThumbnailAltText": "Tyrunt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/696.png"
    },
    {
      "number": "697",
      "name": "Tyrantrum",
      "slug": "tyrantrum",
      "weight": 270,
      "height": 2.5,
      "abilities": [
        "Strong Jaw"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Dragon",
        "Ice",
        "Fairy",
        "Ground"
      ],
      "type": [
        "rock",
        "dragon"
      ],
      "ThumbnailAltText": "Tyrantrum",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/697.png"
    },
    {
      "number": "698",
      "name": "Amaura",
      "slug": "amaura",
      "weight": 25.2,
      "height": 1.3,
      "abilities": [
        "Refrigerate"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Rock",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ice"
      ],
      "ThumbnailAltText": "Amaura",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/698.png"
    },
    {
      "number": "699",
      "name": "Aurorus",
      "slug": "aurorus",
      "weight": 225,
      "height": 2.7,
      "abilities": [
        "Refrigerate"
      ],
      "weakness": [
        "Steel",
        "Fighting",
        "Water",
        "Rock",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "ice"
      ],
      "ThumbnailAltText": "Aurorus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/699.png"
    },
    {
      "number": "700",
      "name": "Sylveon",
      "slug": "sylveon",
      "weight": 23.5,
      "height": 1,
      "abilities": [
        "Cute Charm"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Sylveon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/700.png"
    },
    {
      "number": "701",
      "name": "Hawlucha",
      "slug": "hawlucha",
      "weight": 21.5,
      "height": 0.8,
      "abilities": [
        "Limber",
        "Unburden"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy",
        "Electric",
        "Ice"
      ],
      "type": [
        "fighting",
        "flying"
      ],
      "ThumbnailAltText": "Hawlucha",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/701.png"
    },
    {
      "number": "702",
      "name": "Dedenne",
      "slug": "dedenne",
      "weight": 2.2,
      "height": 0.2,
      "abilities": [
        "Cheek Pouch",
        "Pickup"
      ],
      "weakness": [
        "Poison",
        "Ground"
      ],
      "type": [
        "electric",
        "fairy"
      ],
      "ThumbnailAltText": "Dedenne",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/702.png"
    },
    {
      "number": "703",
      "name": "Carbink",
      "slug": "carbink",
      "weight": 5.7,
      "height": 0.3,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "fairy"
      ],
      "ThumbnailAltText": "Carbink",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/703.png"
    },
    {
      "number": "704",
      "name": "Goomy",
      "slug": "goomy",
      "weight": 2.8,
      "height": 0.3,
      "abilities": [
        "Hydration",
        "Sap Sipper"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Goomy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/704.png"
    },
    {
      "number": "705",
      "name": "Sliggoo",
      "slug": "sliggoo",
      "weight": 17.5,
      "height": 0.8,
      "abilities": [
        "Hydration",
        "Sap Sipper"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Sliggoo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/705.png"
    },
    {
      "number": "706",
      "name": "Goodra",
      "slug": "goodra",
      "weight": 150.5,
      "height": 2,
      "abilities": [
        "Hydration",
        "Sap Sipper"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Goodra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/706.png"
    },
    {
      "number": "707",
      "name": "Klefki",
      "slug": "klefki",
      "weight": 3,
      "height": 0.2,
      "abilities": [
        "Prankster"
      ],
      "weakness": [
        "Fire",
        "Ground"
      ],
      "type": [
        "steel",
        "fairy"
      ],
      "ThumbnailAltText": "Klefki",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/707.png"
    },
    {
      "number": "708",
      "name": "Phantump",
      "slug": "phantump",
      "weight": 7,
      "height": 0.4,
      "abilities": [
        "Frisk",
        "Natural Cure"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "ghost",
        "grass"
      ],
      "ThumbnailAltText": "Phantump",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/708.png"
    },
    {
      "number": "709",
      "name": "Trevenant",
      "slug": "trevenant",
      "weight": 71,
      "height": 1.5,
      "abilities": [
        "Frisk",
        "Natural Cure"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "ghost",
        "grass"
      ],
      "ThumbnailAltText": "Trevenant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/709.png"
    },
    {
      "number": "710",
      "name": "Pumpkaboo",
      "slug": "pumpkaboo",
      "weight": 5,
      "height": 0.4,
      "abilities": [
        "Frisk",
        "Pickup"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "ghost",
        "grass"
      ],
      "ThumbnailAltText": "Pumpkaboo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/710.png"
    },
    {
      "number": "711",
      "name": "Gourgeist",
      "slug": "gourgeist",
      "weight": 12.5,
      "height": 0.9,
      "abilities": [
        "Frisk",
        "Pickup"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "ghost",
        "grass"
      ],
      "ThumbnailAltText": "Gourgeist",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/711.png"
    },
    {
      "number": "712",
      "name": "Bergmite",
      "slug": "bergmite",
      "weight": 99.5,
      "height": 1,
      "abilities": [
        "Ice Body",
        "Own Tempo"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Bergmite",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/712.png"
    },
    {
      "number": "713",
      "name": "Avalugg",
      "slug": "avalugg",
      "weight": 505,
      "height": 2,
      "abilities": [
        "Ice Body",
        "Own Tempo"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Avalugg",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/713.png"
    },
    {
      "number": "714",
      "name": "Noibat",
      "slug": "noibat",
      "weight": 8,
      "height": 0.5,
      "abilities": [
        "Frisk",
        "Infiltrator"
      ],
      "weakness": [
        "Fairy",
        "Rock",
        "Ice",
        "Dragon"
      ],
      "type": [
        "flying",
        "dragon"
      ],
      "ThumbnailAltText": "Noibat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/714.png"
    },
    {
      "number": "715",
      "name": "Noivern",
      "slug": "noivern",
      "weight": 85,
      "height": 1.5,
      "abilities": [
        "Frisk",
        "Infiltrator"
      ],
      "weakness": [
        "Fairy",
        "Rock",
        "Ice",
        "Dragon"
      ],
      "type": [
        "flying",
        "dragon"
      ],
      "ThumbnailAltText": "Noivern",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/715.png"
    },
    {
      "number": "716",
      "name": "Xerneas",
      "slug": "xerneas",
      "weight": 215,
      "height": 3,
      "abilities": [
        "Fairy Aura"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Xerneas",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/716.png"
    },
    {
      "number": "717",
      "name": "Yveltal",
      "slug": "yveltal",
      "weight": 203,
      "height": 5.8,
      "abilities": [
        "Dark Aura"
      ],
      "weakness": [
        "Fairy",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "dark",
        "flying"
      ],
      "ThumbnailAltText": "Yveltal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/717.png"
    },
    {
      "number": "718",
      "name": "Zygarde",
      "slug": "zygarde",
      "weight": 305,
      "height": 5,
      "abilities": [
        "Aura Break"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ground"
      ],
      "ThumbnailAltText": "Zygarde",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/718.png"
    },
    {
      "number": "719",
      "name": "Diancie",
      "slug": "diancie",
      "weight": 8.8,
      "height": 0.7,
      "abilities": [
        "Clear Body"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Grass",
        "Ground"
      ],
      "type": [
        "rock",
        "fairy"
      ],
      "ThumbnailAltText": "Diancie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/719.png"
    },
    {
      "number": "720",
      "name": "Hoopa",
      "slug": "hoopa",
      "weight": 9,
      "height": 0.5,
      "abilities": [
        "Magician"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "psychic",
        "ghost"
      ],
      "ThumbnailAltText": "Hoopa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/720.png"
    },
    {
      "number": "721",
      "name": "Volcanion",
      "slug": "volcanion",
      "weight": 195,
      "height": 1.7,
      "abilities": [
        "Water Absorb"
      ],
      "weakness": [
        "Ground",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "water"
      ],
      "ThumbnailAltText": "Volcanion",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/721.png"
    },
    {
      "number": "722",
      "name": "Rowlet",
      "slug": "rowlet",
      "weight": 1.5,
      "height": 0.3,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Rowlet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/722.png"
    },
    {
      "number": "723",
      "name": "Dartrix",
      "slug": "dartrix",
      "weight": 16,
      "height": 0.7,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Rock"
      ],
      "type": [
        "grass",
        "flying"
      ],
      "ThumbnailAltText": "Dartrix",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/723.png"
    },
    {
      "number": "724",
      "name": "Decidueye",
      "slug": "decidueye",
      "weight": 36.6,
      "height": 1.6,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "grass",
        "ghost"
      ],
      "ThumbnailAltText": "Decidueye",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/724.png"
    },
    {
      "number": "725",
      "name": "Litten",
      "slug": "litten",
      "weight": 4.3,
      "height": 0.4,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Litten",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/725.png"
    },
    {
      "number": "726",
      "name": "Torracat",
      "slug": "torracat",
      "weight": 25,
      "height": 0.7,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Torracat",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/726.png"
    },
    {
      "number": "727",
      "name": "Incineroar",
      "slug": "incineroar",
      "weight": 83,
      "height": 1.8,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "fire",
        "dark"
      ],
      "ThumbnailAltText": "Incineroar",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/727.png"
    },
    {
      "number": "728",
      "name": "Popplio",
      "slug": "popplio",
      "weight": 7.5,
      "height": 0.4,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Popplio",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/728.png"
    },
    {
      "number": "729",
      "name": "Brionne",
      "slug": "brionne",
      "weight": 17.5,
      "height": 0.6,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Brionne",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/729.png"
    },
    {
      "number": "730",
      "name": "Primarina",
      "slug": "primarina",
      "weight": 44,
      "height": 1.8,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Poison"
      ],
      "type": [
        "water",
        "fairy"
      ],
      "ThumbnailAltText": "Primarina",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/730.png"
    },
    {
      "number": "731",
      "name": "Pikipek",
      "slug": "pikipek",
      "weight": 1.2,
      "height": 0.3,
      "abilities": [
        "Keen Eye",
        "Skill Link"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Pikipek",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/731.png"
    },
    {
      "number": "732",
      "name": "Trumbeak",
      "slug": "trumbeak",
      "weight": 14.8,
      "height": 0.6,
      "abilities": [
        "Keen Eye",
        "Skill Link"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Trumbeak",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/732.png"
    },
    {
      "number": "733",
      "name": "Toucannon",
      "slug": "toucannon",
      "weight": 26,
      "height": 1.1,
      "abilities": [
        "Keen Eye",
        "Skill Link"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "normal",
        "flying"
      ],
      "ThumbnailAltText": "Toucannon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/733.png"
    },
    {
      "number": "734",
      "name": "Yungoos",
      "slug": "yungoos",
      "weight": 6,
      "height": 0.4,
      "abilities": [
        "Stakeout",
        "Strong Jaw"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Yungoos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/734.png"
    },
    {
      "number": "735",
      "name": "Gumshoos",
      "slug": "gumshoos",
      "weight": 14.2,
      "height": 0.7,
      "abilities": [
        "Stakeout",
        "Strong Jaw"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Gumshoos",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/735.png"
    },
    {
      "number": "736",
      "name": "Grubbin",
      "slug": "grubbin",
      "weight": 4.4,
      "height": 0.4,
      "abilities": [
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Grubbin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/736.png"
    },
    {
      "number": "737",
      "name": "Charjabug",
      "slug": "charjabug",
      "weight": 10.5,
      "height": 0.5,
      "abilities": [
        "Battery"
      ],
      "weakness": [
        "Fire",
        "Rock"
      ],
      "type": [
        "bug",
        "electric"
      ],
      "ThumbnailAltText": "Charjabug",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/737.png"
    },
    {
      "number": "738",
      "name": "Vikavolt",
      "slug": "vikavolt",
      "weight": 45,
      "height": 1.5,
      "abilities": [
        "Levitate"
      ],
      "weakness": [
        "Fire",
        "Rock"
      ],
      "type": [
        "bug",
        "electric"
      ],
      "ThumbnailAltText": "Vikavolt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/738.png"
    },
    {
      "number": "739",
      "name": "Crabrawler",
      "slug": "crabrawler",
      "weight": 7,
      "height": 0.6,
      "abilities": [
        "Hyper Cutter",
        "Iron Fist"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Crabrawler",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/739.png"
    },
    {
      "number": "740",
      "name": "Crabominable",
      "slug": "crabominable",
      "weight": 180,
      "height": 1.7,
      "abilities": [
        "Hyper Cutter",
        "Iron Fist"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Psychic",
        "Flying",
        "Fighting",
        "Fairy"
      ],
      "type": [
        "fighting",
        "ice"
      ],
      "ThumbnailAltText": "Crabominable",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/740.png"
    },
    {
      "number": "741",
      "name": "Oricorio",
      "slug": "oricorio",
      "weight": 3.4,
      "height": 0.6,
      "abilities": [
        "Dancer"
      ],
      "weakness": [
        "Water",
        "Electric",
        "Rock"
      ],
      "type": [
        "fire",
        "flying"
      ],
      "ThumbnailAltText": "Oricorio",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/741.png"
    },
    {
      "number": "742",
      "name": "Cutiefly",
      "slug": "cutiefly",
      "weight": 0.2,
      "height": 0.1,
      "abilities": [
        "Honey Gather",
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Flying",
        "Poison",
        "Rock"
      ],
      "type": [
        "bug",
        "fairy"
      ],
      "ThumbnailAltText": "Cutiefly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/742.png"
    },
    {
      "number": "743",
      "name": "Ribombee",
      "slug": "ribombee",
      "weight": 0.5,
      "height": 0.2,
      "abilities": [
        "Honey Gather",
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Flying",
        "Poison",
        "Rock"
      ],
      "type": [
        "bug",
        "fairy"
      ],
      "ThumbnailAltText": "Ribombee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/743.png"
    },
    {
      "number": "744",
      "name": "Rockruff",
      "slug": "rockruff",
      "weight": 9.2,
      "height": 0.5,
      "abilities": [
        "Keen Eye",
        "Vital Spirit"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Rockruff",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/744.png"
    },
    {
      "number": "745",
      "name": "Lycanroc",
      "slug": "lycanroc",
      "weight": 25,
      "height": 0.8,
      "abilities": [
        "Keen Eye",
        "Sand Rush"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Lycanroc",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/745.png"
    },
    {
      "number": "746",
      "name": "Wishiwashi",
      "slug": "wishiwashi",
      "weight": 0.3,
      "height": 0.2,
      "abilities": [
        "Schooling"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Wishiwashi",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/746.png"
    },
    {
      "number": "747",
      "name": "Mareanie",
      "slug": "mareanie",
      "weight": 8,
      "height": 0.4,
      "abilities": [
        "Limber",
        "Merciless"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "poison",
        "water"
      ],
      "ThumbnailAltText": "Mareanie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/747.png"
    },
    {
      "number": "748",
      "name": "Toxapex",
      "slug": "toxapex",
      "weight": 14.5,
      "height": 0.7,
      "abilities": [
        "Limber",
        "Merciless"
      ],
      "weakness": [
        "Psychic",
        "Electric",
        "Ground"
      ],
      "type": [
        "poison",
        "water"
      ],
      "ThumbnailAltText": "Toxapex",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/748.png"
    },
    {
      "number": "749",
      "name": "Mudbray",
      "slug": "mudbray",
      "weight": 110,
      "height": 1,
      "abilities": [
        "Own Tempo",
        "Stamina"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Mudbray",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/749.png"
    },
    {
      "number": "750",
      "name": "Mudsdale",
      "slug": "mudsdale",
      "weight": 920,
      "height": 2.5,
      "abilities": [
        "Own Tempo",
        "Stamina"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Mudsdale",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/750.png"
    },
    {
      "number": "751",
      "name": "Dewpider",
      "slug": "dewpider",
      "weight": 4,
      "height": 0.3,
      "abilities": [
        "Water Bubble"
      ],
      "weakness": [
        "Flying",
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "bug"
      ],
      "ThumbnailAltText": "Dewpider",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/751.png"
    },
    {
      "number": "752",
      "name": "Araquanid",
      "slug": "araquanid",
      "weight": 82,
      "height": 1.8,
      "abilities": [
        "Water Bubble"
      ],
      "weakness": [
        "Flying",
        "Electric",
        "Rock"
      ],
      "type": [
        "water",
        "bug"
      ],
      "ThumbnailAltText": "Araquanid",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/752.png"
    },
    {
      "number": "753",
      "name": "Fomantis",
      "slug": "fomantis",
      "weight": 1.5,
      "height": 0.3,
      "abilities": [
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Fomantis",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/753.png"
    },
    {
      "number": "754",
      "name": "Lurantis",
      "slug": "lurantis",
      "weight": 18.5,
      "height": 0.9,
      "abilities": [
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Lurantis",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/754.png"
    },
    {
      "number": "755",
      "name": "Morelull",
      "slug": "morelull",
      "weight": 1.5,
      "height": 0.2,
      "abilities": [
        "Effect Spore",
        "Illuminate"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Ice",
        "Poison"
      ],
      "type": [
        "grass",
        "fairy"
      ],
      "ThumbnailAltText": "Morelull",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/755.png"
    },
    {
      "number": "756",
      "name": "Shiinotic",
      "slug": "shiinotic",
      "weight": 11.5,
      "height": 1,
      "abilities": [
        "Effect Spore",
        "Illuminate"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Ice",
        "Poison"
      ],
      "type": [
        "grass",
        "fairy"
      ],
      "ThumbnailAltText": "Shiinotic",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/756.png"
    },
    {
      "number": "757",
      "name": "Salandit",
      "slug": "salandit",
      "weight": 4.8,
      "height": 0.6,
      "abilities": [
        "Corrosion"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Ground",
        "Rock"
      ],
      "type": [
        "poison",
        "fire"
      ],
      "ThumbnailAltText": "Salandit",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/757.png"
    },
    {
      "number": "758",
      "name": "Salazzle",
      "slug": "salazzle",
      "weight": 22.2,
      "height": 1.2,
      "abilities": [
        "Corrosion"
      ],
      "weakness": [
        "Water",
        "Psychic",
        "Ground",
        "Rock"
      ],
      "type": [
        "poison",
        "fire"
      ],
      "ThumbnailAltText": "Salazzle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/758.png"
    },
    {
      "number": "759",
      "name": "Stufful",
      "slug": "stufful",
      "weight": 6.8,
      "height": 0.5,
      "abilities": [
        "Fluffy",
        "Klutz"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy",
        "Fighting"
      ],
      "type": [
        "normal",
        "fighting"
      ],
      "ThumbnailAltText": "Stufful",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/759.png"
    },
    {
      "number": "760",
      "name": "Bewear",
      "slug": "bewear",
      "weight": 135,
      "height": 2.1,
      "abilities": [
        "Fluffy",
        "Klutz"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy",
        "Fighting"
      ],
      "type": [
        "normal",
        "fighting"
      ],
      "ThumbnailAltText": "Bewear",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/760.png"
    },
    {
      "number": "761",
      "name": "Bounsweet",
      "slug": "bounsweet",
      "weight": 3.2,
      "height": 0.3,
      "abilities": [
        "Leaf Guard",
        "Oblivious"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Bounsweet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/761.png"
    },
    {
      "number": "762",
      "name": "Steenee",
      "slug": "steenee",
      "weight": 8.2,
      "height": 0.7,
      "abilities": [
        "Leaf Guard",
        "Oblivious"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Steenee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/762.png"
    },
    {
      "number": "763",
      "name": "Tsareena",
      "slug": "tsareena",
      "weight": 21.4,
      "height": 1.2,
      "abilities": [
        "Leaf Guard",
        "Queenly Majesty"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Tsareena",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/763.png"
    },
    {
      "number": "764",
      "name": "Comfey",
      "slug": "comfey",
      "weight": 0.3,
      "height": 0.1,
      "abilities": [
        "Flower Veil",
        "Triage"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Comfey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/764.png"
    },
    {
      "number": "765",
      "name": "Oranguru",
      "slug": "oranguru",
      "weight": 76,
      "height": 1.5,
      "abilities": [
        "Inner Focus",
        "Telepathy"
      ],
      "weakness": [
        "Dark",
        "Bug"
      ],
      "type": [
        "normal",
        "psychic"
      ],
      "ThumbnailAltText": "Oranguru",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/765.png"
    },
    {
      "number": "766",
      "name": "Passimian",
      "slug": "passimian",
      "weight": 82.8,
      "height": 2,
      "abilities": [
        "Receiver"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Passimian",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/766.png"
    },
    {
      "number": "767",
      "name": "Wimpod",
      "slug": "wimpod",
      "weight": 12,
      "height": 0.5,
      "abilities": [
        "Wimp Out"
      ],
      "weakness": [
        "Flying",
        "Electric",
        "Rock"
      ],
      "type": [
        "bug",
        "water"
      ],
      "ThumbnailAltText": "Wimpod",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/767.png"
    },
    {
      "number": "768",
      "name": "Golisopod",
      "slug": "golisopod",
      "weight": 108,
      "height": 2,
      "abilities": [
        "Emergency Exit"
      ],
      "weakness": [
        "Flying",
        "Electric",
        "Rock"
      ],
      "type": [
        "bug",
        "water"
      ],
      "ThumbnailAltText": "Golisopod",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/768.png"
    },
    {
      "number": "769",
      "name": "Sandygast",
      "slug": "sandygast",
      "weight": 70,
      "height": 0.5,
      "abilities": [
        "Water Compaction"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Water",
        "Ice"
      ],
      "type": [
        "ghost",
        "ground"
      ],
      "ThumbnailAltText": "Sandygast",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/769.png"
    },
    {
      "number": "770",
      "name": "Palossand",
      "slug": "palossand",
      "weight": 250,
      "height": 1.3,
      "abilities": [
        "Water Compaction"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Water",
        "Ice"
      ],
      "type": [
        "ghost",
        "ground"
      ],
      "ThumbnailAltText": "Palossand",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/770.png"
    },
    {
      "number": "771",
      "name": "Pyukumuku",
      "slug": "pyukumuku",
      "weight": 1.2,
      "height": 0.3,
      "abilities": [
        "Innards Out"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Pyukumuku",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/771.png"
    },
    {
      "number": "772",
      "name": "Type: Null",
      "slug": "type-null",
      "weight": 120.5,
      "height": 1.9,
      "abilities": [
        "Battle Armor"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Type: Null",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/772.png"
    },
    {
      "number": "773",
      "name": "Silvally",
      "slug": "silvally",
      "weight": 100.5,
      "height": 2.3,
      "abilities": [
        "RKS System"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Silvally",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/773.png"
    },
    {
      "number": "774",
      "name": "Minior",
      "slug": "minior",
      "weight": 40,
      "height": 0.3,
      "abilities": [
        "Shields Down"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "rock",
        "flying"
      ],
      "ThumbnailAltText": "Minior",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/774.png"
    },
    {
      "number": "775",
      "name": "Komala",
      "slug": "komala",
      "weight": 19.9,
      "height": 0.4,
      "abilities": [
        "Comatose"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Komala",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/775.png"
    },
    {
      "number": "776",
      "name": "Turtonator",
      "slug": "turtonator",
      "weight": 212,
      "height": 2,
      "abilities": [
        "Shell Armor"
      ],
      "weakness": [
        "Ground",
        "Rock",
        "Dragon"
      ],
      "type": [
        "fire",
        "dragon"
      ],
      "ThumbnailAltText": "Turtonator",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/776.png"
    },
    {
      "number": "777",
      "name": "Togedemaru",
      "slug": "togedemaru",
      "weight": 3.3,
      "height": 0.3,
      "abilities": [
        "Iron Barbs",
        "Lightning Rod"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "steel"
      ],
      "ThumbnailAltText": "Togedemaru",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/777.png"
    },
    {
      "number": "778",
      "name": "Mimikyu",
      "slug": "mimikyu",
      "weight": 0.7,
      "height": 0.2,
      "abilities": [
        "Disguise"
      ],
      "weakness": [
        "Ghost",
        "Steel"
      ],
      "type": [
        "ghost",
        "fairy"
      ],
      "ThumbnailAltText": "Mimikyu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/778.png"
    },
    {
      "number": "779",
      "name": "Bruxish",
      "slug": "bruxish",
      "weight": 19,
      "height": 0.9,
      "abilities": [
        "Dazzling",
        "Strong Jaw"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Grass",
        "Electric",
        "Bug"
      ],
      "type": [
        "water",
        "psychic"
      ],
      "ThumbnailAltText": "Bruxish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/779.png"
    },
    {
      "number": "780",
      "name": "Drampa",
      "slug": "drampa",
      "weight": 185,
      "height": 3,
      "abilities": [
        "Berserk",
        "Sap Sipper"
      ],
      "weakness": [
        "Fairy",
        "Fighting",
        "Ice",
        "Dragon"
      ],
      "type": [
        "normal",
        "dragon"
      ],
      "ThumbnailAltText": "Drampa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/780.png"
    },
    {
      "number": "781",
      "name": "Dhelmise",
      "slug": "dhelmise",
      "weight": 210,
      "height": 3.9,
      "abilities": [
        "Steelworker"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Ice"
      ],
      "type": [
        "ghost",
        "grass"
      ],
      "ThumbnailAltText": "Dhelmise",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/781.png"
    },
    {
      "number": "782",
      "name": "Jangmo-o",
      "slug": "jangmo-o",
      "weight": 29.7,
      "height": 0.6,
      "abilities": [
        "Bulletproof",
        "Soundproof"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Jangmo-o",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/782.png"
    },
    {
      "number": "783",
      "name": "Hakamo-o",
      "slug": "hakamo-o",
      "weight": 47,
      "height": 1.2,
      "abilities": [
        "Bulletproof",
        "Soundproof"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Psychic",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "fighting"
      ],
      "ThumbnailAltText": "Hakamo-o",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/783.png"
    },
    {
      "number": "784",
      "name": "Kommo-o",
      "slug": "kommo-o",
      "weight": 78.2,
      "height": 1.6,
      "abilities": [
        "Bulletproof",
        "Soundproof"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Psychic",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "fighting"
      ],
      "ThumbnailAltText": "Kommo-o",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/784.png"
    },
    {
      "number": "785",
      "name": "Tapu Koko",
      "slug": "tapu-koko",
      "weight": 20.5,
      "height": 1.8,
      "abilities": [
        "Electric Surge"
      ],
      "weakness": [
        "Poison",
        "Ground"
      ],
      "type": [
        "electric",
        "fairy"
      ],
      "ThumbnailAltText": "Tapu Koko",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/785.png"
    },
    {
      "number": "786",
      "name": "Tapu Lele",
      "slug": "tapu-lele",
      "weight": 18.6,
      "height": 1.2,
      "abilities": [
        "Psychic Surge"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Tapu Lele",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/786.png"
    },
    {
      "number": "787",
      "name": "Tapu Bulu",
      "slug": "tapu-bulu",
      "weight": 45.5,
      "height": 1.9,
      "abilities": [
        "Grassy Surge"
      ],
      "weakness": [
        "Steel",
        "Fire",
        "Flying",
        "Ice",
        "Poison"
      ],
      "type": [
        "grass",
        "fairy"
      ],
      "ThumbnailAltText": "Tapu Bulu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/787.png"
    },
    {
      "number": "788",
      "name": "Tapu Fini",
      "slug": "tapu-fini",
      "weight": 21.2,
      "height": 1.3,
      "abilities": [
        "Misty Surge"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Poison"
      ],
      "type": [
        "water",
        "fairy"
      ],
      "ThumbnailAltText": "Tapu Fini",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/788.png"
    },
    {
      "number": "789",
      "name": "Cosmog",
      "slug": "cosmog",
      "weight": 0.1,
      "height": 0.2,
      "abilities": [
        "Unaware"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Cosmog",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/789.png"
    },
    {
      "number": "790",
      "name": "Cosmoem",
      "slug": "cosmoem",
      "weight": 999.9,
      "height": 0.1,
      "abilities": [
        "Sturdy"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Cosmoem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/790.png"
    },
    {
      "number": "791",
      "name": "Solgaleo",
      "slug": "solgaleo",
      "weight": 230,
      "height": 3.4,
      "abilities": [
        "Full Metal Body"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Dark",
        "Ground"
      ],
      "type": [
        "psychic",
        "steel"
      ],
      "ThumbnailAltText": "Solgaleo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/791.png"
    },
    {
      "number": "792",
      "name": "Lunala",
      "slug": "lunala",
      "weight": 120,
      "height": 4,
      "abilities": [
        "Shadow Shield"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "psychic",
        "ghost"
      ],
      "ThumbnailAltText": "Lunala",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/792.png"
    },
    {
      "number": "793",
      "name": "Nihilego",
      "slug": "nihilego",
      "weight": 55.5,
      "height": 1.2,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Steel",
        "Water",
        "Psychic",
        "Ground"
      ],
      "type": [
        "rock",
        "poison"
      ],
      "ThumbnailAltText": "Nihilego",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/793.png"
    },
    {
      "number": "794",
      "name": "Buzzwole",
      "slug": "buzzwole",
      "weight": 333.6,
      "height": 2.4,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "bug",
        "fighting"
      ],
      "ThumbnailAltText": "Buzzwole",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/794.png"
    },
    {
      "number": "795",
      "name": "Pheromosa",
      "slug": "pheromosa",
      "weight": 25,
      "height": 1.8,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Fire",
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "bug",
        "fighting"
      ],
      "ThumbnailAltText": "Pheromosa",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/795.png"
    },
    {
      "number": "796",
      "name": "Xurkitree",
      "slug": "xurkitree",
      "weight": 100,
      "height": 3.8,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Xurkitree",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/796.png"
    },
    {
      "number": "797",
      "name": "Celesteela",
      "slug": "celesteela",
      "weight": 999.9,
      "height": 9.2,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Fire",
        "Electric"
      ],
      "type": [
        "steel",
        "flying"
      ],
      "ThumbnailAltText": "Celesteela",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/797.png"
    },
    {
      "number": "798",
      "name": "Kartana",
      "slug": "kartana",
      "weight": 0.1,
      "height": 0.3,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Fire",
        "Fighting"
      ],
      "type": [
        "grass",
        "steel"
      ],
      "ThumbnailAltText": "Kartana",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/798.png"
    },
    {
      "number": "799",
      "name": "Guzzlord",
      "slug": "guzzlord",
      "weight": 888,
      "height": 5.5,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Fairy",
        "Fighting",
        "Bug",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dark",
        "dragon"
      ],
      "ThumbnailAltText": "Guzzlord",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/799.png"
    },
    {
      "number": "800",
      "name": "Necrozma",
      "slug": "necrozma",
      "weight": 230,
      "height": 2.4,
      "abilities": [
        "Prism Armor"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Necrozma",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/800.png"
    },
    {
      "number": "801",
      "name": "Magearna",
      "slug": "magearna",
      "weight": 80.5,
      "height": 1,
      "abilities": [
        "Soul-Heart"
      ],
      "weakness": [
        "Fire",
        "Ground"
      ],
      "type": [
        "steel",
        "fairy"
      ],
      "ThumbnailAltText": "Magearna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/801.png"
    },
    {
      "number": "802",
      "name": "Marshadow",
      "slug": "marshadow",
      "weight": 22.2,
      "height": 0.7,
      "abilities": [
        "Technician"
      ],
      "weakness": [
        "Ghost",
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting",
        "ghost"
      ],
      "ThumbnailAltText": "Marshadow",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/802.png"
    },
    {
      "number": "803",
      "name": "Poipole",
      "slug": "poipole",
      "weight": 1.8,
      "height": 0.6,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "poison"
      ],
      "ThumbnailAltText": "Poipole",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/803.png"
    },
    {
      "number": "804",
      "name": "Naganadel",
      "slug": "naganadel",
      "weight": 150,
      "height": 3.6,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Psychic",
        "Ground",
        "Ice",
        "Dragon"
      ],
      "type": [
        "poison",
        "dragon"
      ],
      "ThumbnailAltText": "Naganadel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/804.png"
    },
    {
      "number": "805",
      "name": "Stakataka",
      "slug": "stakataka",
      "weight": 820,
      "height": 5.5,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Water",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock",
        "steel"
      ],
      "ThumbnailAltText": "Stakataka",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/805.png"
    },
    {
      "number": "806",
      "name": "Blacephalon",
      "slug": "blacephalon",
      "weight": 13,
      "height": 1.8,
      "abilities": [
        "Beast Boost"
      ],
      "weakness": [
        "Water",
        "Ghost",
        "Ground",
        "Dark",
        "Rock"
      ],
      "type": [
        "fire",
        "ghost"
      ],
      "ThumbnailAltText": "Blacephalon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/806.png"
    },
    {
      "number": "807",
      "name": "Zeraora",
      "slug": "zeraora",
      "weight": 44.5,
      "height": 1.5,
      "abilities": [
        "Volt Absorb"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Zeraora",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/807.png"
    },
    {
      "number": "808",
      "name": "Meltan",
      "slug": "meltan",
      "weight": 8,
      "height": 0.2,
      "abilities": [
        "Magnet Pull"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Meltan",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/808.png"
    },
    {
      "number": "809",
      "name": "Melmetal",
      "slug": "melmetal",
      "weight": 800,
      "height": 2.5,
      "abilities": [
        "Iron Fist"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Melmetal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/809.png"
    },
    {
      "number": "810",
      "name": "Grookey",
      "slug": "grookey",
      "weight": 5,
      "height": 0.3,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Grookey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/810.png"
    },
    {
      "number": "811",
      "name": "Thwackey",
      "slug": "thwackey",
      "weight": 14,
      "height": 0.7,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Thwackey",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/811.png"
    },
    {
      "number": "812",
      "name": "Rillaboom",
      "slug": "rillaboom",
      "weight": 90,
      "height": 2.1,
      "abilities": [
        "Overgrow"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Rillaboom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/812.png"
    },
    {
      "number": "813",
      "name": "Scorbunny",
      "slug": "scorbunny",
      "weight": 4.5,
      "height": 0.3,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Scorbunny",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/813.png"
    },
    {
      "number": "814",
      "name": "Raboot",
      "slug": "raboot",
      "weight": 9,
      "height": 0.6,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Raboot",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/814.png"
    },
    {
      "number": "815",
      "name": "Cinderace",
      "slug": "cinderace",
      "weight": 33,
      "height": 1.4,
      "abilities": [
        "Blaze"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Rock"
      ],
      "type": [
        "fire"
      ],
      "ThumbnailAltText": "Cinderace",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/815.png"
    },
    {
      "number": "816",
      "name": "Sobble",
      "slug": "sobble",
      "weight": 4,
      "height": 0.3,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Sobble",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/816.png"
    },
    {
      "number": "817",
      "name": "Drizzile",
      "slug": "drizzile",
      "weight": 11.5,
      "height": 0.7,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Drizzile",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/817.png"
    },
    {
      "number": "818",
      "name": "Inteleon",
      "slug": "inteleon",
      "weight": 45.2,
      "height": 1.9,
      "abilities": [
        "Torrent"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Inteleon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/818.png"
    },
    {
      "number": "819",
      "name": "Skwovet",
      "slug": "skwovet",
      "weight": 2.5,
      "height": 0.3,
      "abilities": [
        "Cheek Pouch"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Skwovet",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/819.png"
    },
    {
      "number": "820",
      "name": "Greedent",
      "slug": "greedent",
      "weight": 6,
      "height": 0.6,
      "abilities": [
        "Cheek Pouch"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Greedent",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/820.png"
    },
    {
      "number": "821",
      "name": "Rookidee",
      "slug": "rookidee",
      "weight": 1.8,
      "height": 0.2,
      "abilities": [
        "Keen Eye",
        "Unnerve"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "flying"
      ],
      "ThumbnailAltText": "Rookidee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/821.png"
    },
    {
      "number": "822",
      "name": "Corvisquire",
      "slug": "corvisquire",
      "weight": 16,
      "height": 0.8,
      "abilities": [
        "Keen Eye",
        "Unnerve"
      ],
      "weakness": [
        "Electric",
        "Ice",
        "Rock"
      ],
      "type": [
        "flying"
      ],
      "ThumbnailAltText": "Corvisquire",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/822.png"
    },
    {
      "number": "823",
      "name": "Corviknight",
      "slug": "corviknight",
      "weight": 75,
      "height": 2.2,
      "abilities": [
        "Pressure",
        "Unnerve"
      ],
      "weakness": [
        "Fire",
        "Electric"
      ],
      "type": [
        "flying",
        "steel"
      ],
      "ThumbnailAltText": "Corviknight",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/823.png"
    },
    {
      "number": "824",
      "name": "Blipbug",
      "slug": "blipbug",
      "weight": 8,
      "height": 0.4,
      "abilities": [
        "Compound Eyes",
        "Swarm"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "type": [
        "bug"
      ],
      "ThumbnailAltText": "Blipbug",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/824.png"
    },
    {
      "number": "825",
      "name": "Dottler",
      "slug": "dottler",
      "weight": 19.5,
      "height": 0.4,
      "abilities": [
        "Compound Eyes",
        "Swarm"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "psychic"
      ],
      "ThumbnailAltText": "Dottler",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/825.png"
    },
    {
      "number": "826",
      "name": "Orbeetle",
      "slug": "orbeetle",
      "weight": 40.8,
      "height": 0.4,
      "abilities": [
        "Frisk",
        "Swarm"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Dark",
        "Rock",
        "Bug"
      ],
      "type": [
        "bug",
        "psychic"
      ],
      "ThumbnailAltText": "Orbeetle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/826.png"
    },
    {
      "number": "827",
      "name": "Nickit",
      "slug": "nickit",
      "weight": 8.9,
      "height": 0.6,
      "abilities": [
        "Run Away",
        "Unburden"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Nickit",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/827.png"
    },
    {
      "number": "828",
      "name": "Thievul",
      "slug": "thievul",
      "weight": 19.9,
      "height": 1.2,
      "abilities": [
        "Run Away",
        "Unburden"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark"
      ],
      "ThumbnailAltText": "Thievul",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/828.png"
    },
    {
      "number": "829",
      "name": "Gossifleur",
      "slug": "gossifleur",
      "weight": 2.2,
      "height": 0.4,
      "abilities": [
        "Cotton Down",
        "Regenerator"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Gossifleur",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/829.png"
    },
    {
      "number": "830",
      "name": "Eldegoss",
      "slug": "eldegoss",
      "weight": 2.5,
      "height": 0.5,
      "abilities": [
        "Cotton Down",
        "Regenerator"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Ice",
        "Poison",
        "Bug"
      ],
      "type": [
        "grass"
      ],
      "ThumbnailAltText": "Eldegoss",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/830.png"
    },
    {
      "number": "831",
      "name": "Wooloo",
      "slug": "wooloo",
      "weight": 6,
      "height": 0.6,
      "abilities": [
        "Fluffy",
        "Run Away"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Wooloo",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/831.png"
    },
    {
      "number": "832",
      "name": "Dubwool",
      "slug": "dubwool",
      "weight": 43,
      "height": 1.3,
      "abilities": [
        "Fluffy",
        "Steadfast"
      ],
      "weakness": [
        "Fighting"
      ],
      "type": [
        "normal"
      ],
      "ThumbnailAltText": "Dubwool",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/832.png"
    },
    {
      "number": "833",
      "name": "Chewtle",
      "slug": "chewtle",
      "weight": 8.5,
      "height": 0.3,
      "abilities": [
        "Shell Armor",
        "Strong Jaw"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Chewtle",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/833.png"
    },
    {
      "number": "834",
      "name": "Drednaw",
      "slug": "drednaw",
      "weight": 115.5,
      "height": 1,
      "abilities": [
        "Shell Armor",
        "Strong Jaw"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Ground"
      ],
      "type": [
        "water",
        "rock"
      ],
      "ThumbnailAltText": "Drednaw",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/834.png"
    },
    {
      "number": "835",
      "name": "Yamper",
      "slug": "yamper",
      "weight": 13.5,
      "height": 0.3,
      "abilities": [
        "Ball Fetch"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Yamper",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/835.png"
    },
    {
      "number": "836",
      "name": "Boltund",
      "slug": "boltund",
      "weight": 34,
      "height": 1,
      "abilities": [
        "Strong Jaw"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Boltund",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/836.png"
    },
    {
      "number": "837",
      "name": "Rolycoly",
      "slug": "rolycoly",
      "weight": 12,
      "height": 0.3,
      "abilities": [
        "Heatproof",
        "Steam Engine"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Rolycoly",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/837.png"
    },
    {
      "number": "838",
      "name": "Carkol",
      "slug": "carkol",
      "weight": 78,
      "height": 1.1,
      "abilities": [
        "Flame Body",
        "Steam Engine"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "rock",
        "fire"
      ],
      "ThumbnailAltText": "Carkol",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/838.png"
    },
    {
      "number": "839",
      "name": "Coalossal",
      "slug": "coalossal",
      "weight": 310.5,
      "height": 2.8,
      "abilities": [
        "Flame Body",
        "Steam Engine"
      ],
      "weakness": [
        "Water",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "rock",
        "fire"
      ],
      "ThumbnailAltText": "Coalossal",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/839.png"
    },
    {
      "number": "840",
      "name": "Applin",
      "slug": "applin",
      "weight": 0.5,
      "height": 0.2,
      "abilities": [
        "Gluttony",
        "Ripen"
      ],
      "weakness": [
        "Flying",
        "Ice",
        "Dragon",
        "Poison",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dragon"
      ],
      "ThumbnailAltText": "Applin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/840.png"
    },
    {
      "number": "841",
      "name": "Flapple",
      "slug": "flapple",
      "weight": 1,
      "height": 0.3,
      "abilities": [
        "Gluttony",
        "Ripen"
      ],
      "weakness": [
        "Flying",
        "Ice",
        "Dragon",
        "Poison",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dragon"
      ],
      "ThumbnailAltText": "Flapple",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/841.png"
    },
    {
      "number": "842",
      "name": "Appletun",
      "slug": "appletun",
      "weight": 13,
      "height": 0.4,
      "abilities": [
        "Gluttony",
        "Ripen"
      ],
      "weakness": [
        "Flying",
        "Ice",
        "Dragon",
        "Poison",
        "Fairy",
        "Bug"
      ],
      "type": [
        "grass",
        "dragon"
      ],
      "ThumbnailAltText": "Appletun",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/842.png"
    },
    {
      "number": "843",
      "name": "Silicobra",
      "slug": "silicobra",
      "weight": 7.6,
      "height": 2.2,
      "abilities": [
        "Sand Spit",
        "Shed Skin"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Silicobra",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/843.png"
    },
    {
      "number": "844",
      "name": "Sandaconda",
      "slug": "sandaconda",
      "weight": 65.5,
      "height": 3.8,
      "abilities": [
        "Sand Spit",
        "Shed Skin"
      ],
      "weakness": [
        "Water",
        "Grass",
        "Ice"
      ],
      "type": [
        "ground"
      ],
      "ThumbnailAltText": "Sandaconda",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/844.png"
    },
    {
      "number": "845",
      "name": "Cramorant",
      "slug": "cramorant",
      "weight": 18,
      "height": 0.8,
      "abilities": [
        "Gulp Missile"
      ],
      "weakness": [
        "Electric",
        "Rock"
      ],
      "type": [
        "flying",
        "water"
      ],
      "ThumbnailAltText": "Cramorant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/845.png"
    },
    {
      "number": "846",
      "name": "Arrokuda",
      "slug": "arrokuda",
      "weight": 1,
      "height": 0.5,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Arrokuda",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/846.png"
    },
    {
      "number": "847",
      "name": "Barraskewda",
      "slug": "barraskewda",
      "weight": 30,
      "height": 1.3,
      "abilities": [
        "Swift Swim"
      ],
      "weakness": [
        "Grass",
        "Electric"
      ],
      "type": [
        "water"
      ],
      "ThumbnailAltText": "Barraskewda",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/847.png"
    },
    {
      "number": "848",
      "name": "Toxel",
      "slug": "toxel",
      "weight": 11,
      "height": 0.4,
      "abilities": [
        "Rattled",
        "Static"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "electric",
        "poison"
      ],
      "ThumbnailAltText": "Toxel",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/848.png"
    },
    {
      "number": "849",
      "name": "Toxtricity",
      "slug": "toxtricity",
      "weight": 40,
      "height": 1.6,
      "abilities": [
        "Minus",
        "Punk Rock"
      ],
      "weakness": [
        "Psychic",
        "Ground"
      ],
      "type": [
        "electric",
        "poison"
      ],
      "ThumbnailAltText": "Toxtricity",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/849.png"
    },
    {
      "number": "850",
      "name": "Sizzlipede",
      "slug": "sizzlipede",
      "weight": 1,
      "height": 0.7,
      "abilities": [
        "Flash Fire",
        "White Smoke"
      ],
      "weakness": [
        "Water",
        "Flying",
        "Rock"
      ],
      "type": [
        "fire",
        "bug"
      ],
      "ThumbnailAltText": "Sizzlipede",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/850.png"
    },
    {
      "number": "851",
      "name": "Centiskorch",
      "slug": "centiskorch",
      "weight": 120,
      "height": 3,
      "abilities": [
        "Flash Fire",
        "White Smoke"
      ],
      "weakness": [
        "Water",
        "Flying",
        "Rock"
      ],
      "type": [
        "fire",
        "bug"
      ],
      "ThumbnailAltText": "Centiskorch",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/851.png"
    },
    {
      "number": "852",
      "name": "Clobbopus",
      "slug": "clobbopus",
      "weight": 4,
      "height": 0.6,
      "abilities": [
        "Limber"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Clobbopus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/852.png"
    },
    {
      "number": "853",
      "name": "Grapploct",
      "slug": "grapploct",
      "weight": 39,
      "height": 1.6,
      "abilities": [
        "Limber"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Grapploct",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/853.png"
    },
    {
      "number": "854",
      "name": "Sinistea",
      "slug": "sinistea",
      "weight": 0.2,
      "height": 0.1,
      "abilities": [
        "Weak Armor"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Sinistea",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/854.png"
    },
    {
      "number": "855",
      "name": "Polteageist",
      "slug": "polteageist",
      "weight": 0.4,
      "height": 0.2,
      "abilities": [
        "Weak Armor"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Polteageist",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/855.png"
    },
    {
      "number": "856",
      "name": "Hatenna",
      "slug": "hatenna",
      "weight": 3.4,
      "height": 0.4,
      "abilities": [
        "Anticipation",
        "Healer"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Hatenna",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/856.png"
    },
    {
      "number": "857",
      "name": "Hattrem",
      "slug": "hattrem",
      "weight": 4.8,
      "height": 0.6,
      "abilities": [
        "Anticipation",
        "Healer"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic"
      ],
      "ThumbnailAltText": "Hattrem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/857.png"
    },
    {
      "number": "858",
      "name": "Hatterene",
      "slug": "hatterene",
      "weight": 5.1,
      "height": 2.1,
      "abilities": [
        "Anticipation",
        "Healer"
      ],
      "weakness": [
        "Ghost",
        "Steel",
        "Poison"
      ],
      "type": [
        "psychic",
        "fairy"
      ],
      "ThumbnailAltText": "Hatterene",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/858.png"
    },
    {
      "number": "859",
      "name": "Impidimp",
      "slug": "impidimp",
      "weight": 5.5,
      "height": 0.4,
      "abilities": [
        "Frisk",
        "Prankster"
      ],
      "weakness": [
        "Steel",
        "Fairy",
        "Poison"
      ],
      "type": [
        "dark",
        "fairy"
      ],
      "ThumbnailAltText": "Impidimp",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/859.png"
    },
    {
      "number": "860",
      "name": "Morgrem",
      "slug": "morgrem",
      "weight": 12.5,
      "height": 0.8,
      "abilities": [
        "Frisk",
        "Prankster"
      ],
      "weakness": [
        "Steel",
        "Fairy",
        "Poison"
      ],
      "type": [
        "dark",
        "fairy"
      ],
      "ThumbnailAltText": "Morgrem",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/860.png"
    },
    {
      "number": "861",
      "name": "Grimmsnarl",
      "slug": "grimmsnarl",
      "weight": 61,
      "height": 1.5,
      "abilities": [
        "Frisk",
        "Prankster"
      ],
      "weakness": [
        "Steel",
        "Fairy",
        "Poison"
      ],
      "type": [
        "dark",
        "fairy"
      ],
      "ThumbnailAltText": "Grimmsnarl",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/861.png"
    },
    {
      "number": "862",
      "name": "Obstagoon",
      "slug": "obstagoon",
      "weight": 46,
      "height": 1.6,
      "abilities": [
        "Guts",
        "Reckless"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting"
      ],
      "type": [
        "dark",
        "normal"
      ],
      "ThumbnailAltText": "Obstagoon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/862.png"
    },
    {
      "number": "863",
      "name": "Perrserker",
      "slug": "perrserker",
      "weight": 28,
      "height": 0.8,
      "abilities": [
        "Battle Armor",
        "Tough Claws"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Perrserker",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/863.png"
    },
    {
      "number": "864",
      "name": "Cursola",
      "slug": "cursola",
      "weight": 0.4,
      "height": 1,
      "abilities": [
        "Weak Armor"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Cursola",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/864.png"
    },
    {
      "number": "865",
      "name": "Sirfetch’d",
      "slug": "sirfetchd",
      "weight": 117,
      "height": 0.8,
      "abilities": [
        "Steadfast"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Sirfetch’d",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/865.png"
    },
    {
      "number": "866",
      "name": "Mr. Rime",
      "slug": "mr-rime",
      "weight": 58.2,
      "height": 1.5,
      "abilities": [
        "Screen Cleaner",
        "Tangled Feet"
      ],
      "weakness": [
        "Steel",
        "Ghost",
        "Fire",
        "Dark",
        "Rock",
        "Bug"
      ],
      "type": [
        "ice",
        "psychic"
      ],
      "ThumbnailAltText": "Mr. Rime",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/866.png"
    },
    {
      "number": "867",
      "name": "Runerigus",
      "slug": "runerigus",
      "weight": 66.6,
      "height": 1.6,
      "abilities": [
        "Wandering Spirit"
      ],
      "weakness": [
        "Water",
        "Ghost",
        "Grass",
        "Dark",
        "Ice"
      ],
      "type": [
        "ground",
        "ghost"
      ],
      "ThumbnailAltText": "Runerigus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/867.png"
    },
    {
      "number": "868",
      "name": "Milcery",
      "slug": "milcery",
      "weight": 0.3,
      "height": 0.2,
      "abilities": [
        "Sweet Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Milcery",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/868.png"
    },
    {
      "number": "869",
      "name": "Alcremie",
      "slug": "alcremie",
      "weight": 0.5,
      "height": 0.3,
      "abilities": [
        "Sweet Veil"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Alcremie",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/869.png"
    },
    {
      "number": "870",
      "name": "Falinks",
      "slug": "falinks",
      "weight": 62,
      "height": 3,
      "abilities": [
        "Battle Armor"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Falinks",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/870.png"
    },
    {
      "number": "871",
      "name": "Pincurchin",
      "slug": "pincurchin",
      "weight": 1,
      "height": 0.3,
      "abilities": [
        "Lightning Rod"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Pincurchin",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/871.png"
    },
    {
      "number": "872",
      "name": "Snom",
      "slug": "snom",
      "weight": 3.8,
      "height": 0.3,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Flying",
        "Rock"
      ],
      "type": [
        "ice",
        "bug"
      ],
      "ThumbnailAltText": "Snom",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/872.png"
    },
    {
      "number": "873",
      "name": "Frosmoth",
      "slug": "frosmoth",
      "weight": 42,
      "height": 1.3,
      "abilities": [
        "Shield Dust"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Flying",
        "Rock"
      ],
      "type": [
        "ice",
        "bug"
      ],
      "ThumbnailAltText": "Frosmoth",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/873.png"
    },
    {
      "number": "874",
      "name": "Stonjourner",
      "slug": "stonjourner",
      "weight": 520,
      "height": 2.5,
      "abilities": [
        "Power Spot"
      ],
      "weakness": [
        "Water",
        "Steel",
        "Grass",
        "Fighting",
        "Ground"
      ],
      "type": [
        "rock"
      ],
      "ThumbnailAltText": "Stonjourner",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/874.png"
    },
    {
      "number": "875",
      "name": "Eiscue",
      "slug": "eiscue",
      "weight": 89,
      "height": 1.4,
      "abilities": [
        "Ice Face"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Eiscue",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/875.png"
    },
    {
      "number": "876",
      "name": "Indeedee",
      "slug": "indeedee",
      "weight": 28,
      "height": 0.9,
      "abilities": [
        "Inner Focus",
        "Synchronize"
      ],
      "weakness": [
        "Dark",
        "Bug"
      ],
      "type": [
        "psychic",
        "normal"
      ],
      "ThumbnailAltText": "Indeedee",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/876.png"
    },
    {
      "number": "877",
      "name": "Morpeko",
      "slug": "morpeko",
      "weight": 3,
      "height": 0.3,
      "abilities": [
        "Hunger Switch"
      ],
      "weakness": [
        "Fairy",
        "Bug",
        "Fighting",
        "Ground"
      ],
      "type": [
        "electric",
        "dark"
      ],
      "ThumbnailAltText": "Morpeko",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/877.png"
    },
    {
      "number": "878",
      "name": "Cufant",
      "slug": "cufant",
      "weight": 100,
      "height": 1.2,
      "abilities": [
        "Sheer Force"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Cufant",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/878.png"
    },
    {
      "number": "879",
      "name": "Copperajah",
      "slug": "copperajah",
      "weight": 650,
      "height": 3,
      "abilities": [
        "Sheer Force"
      ],
      "weakness": [
        "Fire",
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel"
      ],
      "ThumbnailAltText": "Copperajah",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/879.png"
    },
    {
      "number": "880",
      "name": "Dracozolt",
      "slug": "dracozolt",
      "weight": 190,
      "height": 1.8,
      "abilities": [
        "Hustle",
        "Volt Absorb"
      ],
      "weakness": [
        "Fairy",
        "Ground",
        "Ice",
        "Dragon"
      ],
      "type": [
        "electric",
        "dragon"
      ],
      "ThumbnailAltText": "Dracozolt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/880.png"
    },
    {
      "number": "881",
      "name": "Arctozolt",
      "slug": "arctozolt",
      "weight": 150,
      "height": 2.3,
      "abilities": [
        "Static",
        "Volt Absorb"
      ],
      "weakness": [
        "Fire",
        "Ground",
        "Fighting",
        "Rock"
      ],
      "type": [
        "electric",
        "ice"
      ],
      "ThumbnailAltText": "Arctozolt",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/881.png"
    },
    {
      "number": "882",
      "name": "Dracovish",
      "slug": "dracovish",
      "weight": 215,
      "height": 2.3,
      "abilities": [
        "Strong Jaw",
        "Water Absorb"
      ],
      "weakness": [
        "Fairy",
        "Dragon"
      ],
      "type": [
        "water",
        "dragon"
      ],
      "ThumbnailAltText": "Dracovish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/882.png"
    },
    {
      "number": "883",
      "name": "Arctovish",
      "slug": "arctovish",
      "weight": 175,
      "height": 2,
      "abilities": [
        "Ice Body",
        "Water Absorb"
      ],
      "weakness": [
        "Grass",
        "Electric",
        "Fighting",
        "Rock"
      ],
      "type": [
        "water",
        "ice"
      ],
      "ThumbnailAltText": "Arctovish",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/883.png"
    },
    {
      "number": "884",
      "name": "Duraludon",
      "slug": "duraludon",
      "weight": 40,
      "height": 1.8,
      "abilities": [
        "Heavy Metal",
        "Light Metal"
      ],
      "weakness": [
        "Fighting",
        "Ground"
      ],
      "type": [
        "steel",
        "dragon"
      ],
      "ThumbnailAltText": "Duraludon",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/884.png"
    },
    {
      "number": "885",
      "name": "Dreepy",
      "slug": "dreepy",
      "weight": 2,
      "height": 0.5,
      "abilities": [
        "Clear Body",
        "Infiltrator"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ghost"
      ],
      "ThumbnailAltText": "Dreepy",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/885.png"
    },
    {
      "number": "886",
      "name": "Drakloak",
      "slug": "drakloak",
      "weight": 11,
      "height": 1.4,
      "abilities": [
        "Clear Body",
        "Infiltrator"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ghost"
      ],
      "ThumbnailAltText": "Drakloak",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/886.png"
    },
    {
      "number": "887",
      "name": "Dragapult",
      "slug": "dragapult",
      "weight": 50,
      "height": 3,
      "abilities": [
        "Clear Body",
        "Infiltrator"
      ],
      "weakness": [
        "Ghost",
        "Dark",
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon",
        "ghost"
      ],
      "ThumbnailAltText": "Dragapult",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/887.png"
    },
    {
      "number": "888",
      "name": "Zacian",
      "slug": "zacian",
      "weight": 110,
      "height": 2.8,
      "abilities": [
        "Intrepid Sword"
      ],
      "weakness": [
        "Steel",
        "Poison"
      ],
      "type": [
        "fairy"
      ],
      "ThumbnailAltText": "Zacian",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/888.png"
    },
    {
      "number": "889",
      "name": "Zamazenta",
      "slug": "zamazenta",
      "weight": 210,
      "height": 2.9,
      "abilities": [
        "Dauntless Shield"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Zamazenta",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/889.png"
    },
    {
      "number": "890",
      "name": "Eternatus",
      "slug": "eternatus",
      "weight": 950,
      "height": 20,
      "abilities": [
        "Pressure"
      ],
      "weakness": [
        "Psychic",
        "Ground",
        "Ice",
        "Dragon"
      ],
      "type": [
        "poison",
        "dragon"
      ],
      "ThumbnailAltText": "Eternatus",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/890.png"
    },
    {
      "number": "891",
      "name": "Kubfu",
      "slug": "kubfu",
      "weight": 12,
      "height": 0.6,
      "abilities": [
        "Inner Focus"
      ],
      "weakness": [
        "Psychic",
        "Flying",
        "Fairy"
      ],
      "type": [
        "fighting"
      ],
      "ThumbnailAltText": "Kubfu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/891.png"
    },
    {
      "number": "892",
      "name": "Urshifu",
      "slug": "urshifu",
      "weight": 105,
      "height": 1.9,
      "abilities": [
        "Unseen Fist"
      ],
      "weakness": [
        "Fairy",
        "Flying",
        "Fighting"
      ],
      "type": [
        "fighting",
        "dark"
      ],
      "ThumbnailAltText": "Urshifu",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/892.png"
    },
    {
      "number": "893",
      "name": "Zarude",
      "slug": "zarude",
      "weight": 70,
      "height": 1.8,
      "abilities": [
        "Leaf Guard"
      ],
      "weakness": [
        "Fire",
        "Flying",
        "Fighting",
        "Ice",
        "Poison",
        "Fairy",
        "Bug"
      ],
      "type": [
        "dark",
        "grass"
      ],
      "ThumbnailAltText": "Zarude",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/893.png"
    },
    {
      "number": "894",
      "name": "Regieleki",
      "slug": "regieleki",
      "weight": 145,
      "height": 1.2,
      "abilities": [
        "Transistor"
      ],
      "weakness": [
        "Ground"
      ],
      "type": [
        "electric"
      ],
      "ThumbnailAltText": "Regieleki",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/894.png"
    },
    {
      "number": "895",
      "name": "Regidrago",
      "slug": "regidrago",
      "weight": 200,
      "height": 2.1,
      "abilities": [
        "Dragon's Maw"
      ],
      "weakness": [
        "Fairy",
        "Ice",
        "Dragon"
      ],
      "type": [
        "dragon"
      ],
      "ThumbnailAltText": "Regidrago",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/895.png"
    },
    {
      "number": "896",
      "name": "Glastrier",
      "slug": "glastrier",
      "weight": 800,
      "height": 2.2,
      "abilities": [
        "Chilling Neigh"
      ],
      "weakness": [
        "Fire",
        "Steel",
        "Fighting",
        "Rock"
      ],
      "type": [
        "ice"
      ],
      "ThumbnailAltText": "Glastrier",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/896.png"
    },
    {
      "number": "897",
      "name": "Spectrier",
      "slug": "spectrier",
      "weight": 44.5,
      "height": 2,
      "abilities": [
        "Grim Neigh"
      ],
      "weakness": [
        "Ghost",
        "Dark"
      ],
      "type": [
        "ghost"
      ],
      "ThumbnailAltText": "Spectrier",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/897.png"
    },
    {
      "number": "898",
      "name": "Calyrex",
      "slug": "calyrex",
      "weight": 7.7,
      "height": 1.1,
      "abilities": [
        "Unnerve"
      ],
      "weakness": [
        "Ghost",
        "Fire",
        "Flying",
        "Ice",
        "Dark",
        "Poison",
        "Bug"
      ],
      "type": [
        "psychic",
        "grass"
      ],
      "ThumbnailAltText": "Calyrex",
      "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/898.png"
    }
  ]

  module.exports = pokedex;