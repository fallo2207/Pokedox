import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { pokemonData } from '../../data/pokemonData';


const PokemonDetail = ({route}) => {
  const {pokemonId} = route.params;

  const DetailPokemon = pokemonData.find((detail) => detail.id === pokemonId);
  return (
    <View style={{backgroundColor: DetailPokemon?.backgroundColor}}>
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
           
           

           <View style={styles.Row}>

           
           
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap : 50, 
  },

  styile : {
    
    width:200,
    height:200,
    marginLeft:100,
    
  },
  backgroundWhite: {
    flex: 1,
    backgroundColor: 'white',
    width: 400,
    height: 400,
    borderRadius: 10,
    margin: 4,
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