import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Button, } from 'react-native';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';
import { pokemonData } from '../../data/pokemonData';

const PokemonList = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleNavigation = (id: number) => {
        navigation.navigate('PokemonDetail', {pokemonId: id,

        });
    }

    return (

        <View style={styles.container}>


        
            <Image
                source={require('../../images/Title.png')}
                style={styles.logoPokemon} />
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="seacrh"
                />
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../images//Sort.png')}
                        style={styles.searchIcon}

                    />
                </TouchableOpacity>

            </View>
            <View style={styles.backgroundWhite}>

                <View style={styles.row}>
                  {pokemonData.map((item)=>(
                    
                    <TouchableOpacity onPress={()=> handleNavigation(item.id)}>
                        <PokemonCard
                     image={item.image}
                     name={item.name}
                     number={item.number}
                    /></TouchableOpacity>
                    
                   

                  ))}
                </View>
               
                
            </View>

            


        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    backgroundWhite: {

        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: 645,
        borderRadius: 8,
        paddingTop: 10,


    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        flexWrap: 'wrap'

    },

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
    button: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginLeft: 10,
    },
    logoPokemon: {
        width: 400,
        height: 32,
        marginLeft: 50,
        marginBottom: 20,

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
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 40,
        height: 35,
    },
});

export default PokemonList;