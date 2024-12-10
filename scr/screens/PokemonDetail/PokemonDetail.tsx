import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { pokemonData } from '../../data/pokemonData';


const PokemonDetail = ({ route }) => {
  const { pokemonId } = route.params;

  const DetailPokemon = pokemonData.find((detail) => detail.id === pokemonId);

  return (
    <View style={{ backgroundColor: DetailPokemon?.backgroundColor }}>
      <View>
        <Image
          source={require('../../images/Pokeball.png')}
          style={styles.pokeball}
        />
        <Image source={DetailPokemon?.image}
          style={styles.styile}
        />
      </View>
      <View style={styles.backgroundWhite}>
        <Text style={{ color: DetailPokemon?.backgroundColor, fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>
          {DetailPokemon?.name}
        </Text>
        <Text style={styles.depscrition}>{DetailPokemon?.description}</Text>

        <View style={styles.Row}>
          {DetailPokemon?.power.map((item, index) => (
            <Text style={styles.power} key={index}>{item}</Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#74CB48',
    flex: 1,
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,



  },

  depscrition: {
    textAlign: 'center'
  },

  power: {
    backgroundColor: 'red',
    flexShrink: 1,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,


  },

  namePokemon: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#74CB48',
  },

  styile: {

    width: 200,
    height: 200,
    marginLeft: 100,

  },
  backgroundWhite: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    height: '100%',
  },
  textbalbasaur: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    borderRadius: 8,
    paddingTop: 10,
    width: 'auto'
  },
  pokeball: {
    width: 280,
    opacity: 0.1,
    height: 280,
    marginLeft: 150,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
  },


})

export default PokemonDetail