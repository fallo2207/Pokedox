import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonList from './scr/screens/PokemonList/PokemonList';
import PokemonDetail from './scr/screens/PokemonDetail';

export type RootStackParamList = {
  ['PokemonList'] : undefined
  ['PokemonDetail'] : {pokemonId: number}
}

const Stack = createNativeStackNavigator<RootStackParamList>();


const RootStack = () => {
  return(

    <Stack.Navigator>
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail}/>
      </Stack.Navigator> 
  )

}

const App = () => {
 return(
   <NavigationContainer>
    <RootStack/>
   </NavigationContainer>

 )
 
};


export default App;