import React from 'react'
import { View, Image, Text, StyleSheet, ImageSourcePropType, } from 'react-native';

type PokemonProps = {
    name :string,
    image : ImageSourcePropType,
    number:string,
}

const PokemonCard = ({image,name,number}: PokemonProps) => {
  return (
    <View style={styles.box}>
    <Text style={styles.number}>{number}</Text>
    <Image
        source={image} 
        style={styles.images}
    />
    <Text style={styles.namePokemon}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    box: {
        width: 120,
        height: 130,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 5,
        elevation: 20,
        borderRadius: 10, 
        margin: 10,
        marginLeft: 10,
           
    },
    images: {
        width: 90,
        height: 85,
        marginLeft: 8,
        alignItems: 'center'
    },
    namePokemon: {
        textAlign: 'center',
        marginBottom: 20,
    },

number:{
    textAlign: 'left'
},

});



export default PokemonCard
