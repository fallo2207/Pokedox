import { ImageSourcePropType } from "react-native";

type PokemonProps = {
    id : number;
    name : string;
    description: string;
    power: string[]
    image: ImageSourcePropType
    backgroundColor: string;
    number: string
    
}

export const pokemonData: PokemonProps[] = [

    {
        id:1,
        name: 'Bulbasaur',
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        power: ['Grass', 'Gossion'],
        image: require('../images/Bulbasaur.png'),
        backgroundColor: '#74CB48' ,
        number: '#001',
    },
    {
        id:2,
        name: 'Charmander',
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail',
        power: ['Fire',] ,
        image: require('../images/Charmander.png'),
        backgroundColor: '#F57D31' ,
        number:'#004',
    },
    {
        id:3,
        name: 'Squirtle',
        description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force',
        power: ['water'],
        image: require('../images/Squirtle.png'),
        backgroundColor: '#6493EB' ,
        number:'#007',
    },
    {
        id:4,
        name: 'Butterfree',
        description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
        power: ['Bug', 'Flying'],
        image: require('../images/Butterfree.png'),
        backgroundColor: '#A7B723' ,
        number:'#012',
    },
    {
        id:5,
        name: 'Pikachu',
        description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy',
        power: ['Electic',] ,
        image: require('../images/Pikachu.png'),
        backgroundColor: '#F9CF30' ,
        number:'#025',
    },
    {
        id:6,
        name: 'Gastly',
        description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison',
        power: ['Ghost ' , 'Posion' ,],
        image: require('../images/Gastly.png'),
        backgroundColor: '#70559B' ,
        number:'#092',
    },
    {
        id:7,
        name: 'Ditto',
        description: 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
        power: ['Normal'],
        image: require('../images/Ditto.png'),
        backgroundColor: '#AAA67F' ,
        number:'#132',
    },
    {
        id:8,
        name: 'Mew',
        description: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.',
        power: ['Psychic',] ,
        image: require('../images/Mew.png'),
        backgroundColor: '#FB5584' ,
        number:'#152',
    },
    {
        id:9,
        name: 'Aron',
        description: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.',
        power: ['Rok ' , 'Stell' ,],
        image: require('../images/Aron.png'),
        backgroundColor: '#B7B9D0',
        number:'#304',
    },



]