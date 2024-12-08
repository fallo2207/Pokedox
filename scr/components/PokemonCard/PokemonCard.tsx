import React from 'react'
import { View, Image, Text, StyleSheet, ImageSourcePropType, } from 'react-native';

type PokemonProps = {
    name :string,
    image : ImageSourcePropType,
}

const PokemonCard = ({image,name}: PokemonProps) => {
  return (
    <View style={styles.box}>
    <Text>#007</Text>
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

});



export default PokemonCard
