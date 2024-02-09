import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import {  HomeScreen } from '../screens/ScreenBase';


//Lista de Screens que son parte de nuestra navegación
export type RootStackParamList={
Screen1: undefined,
Screen2: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0,
            },
            cardStyle:{
                backgroundColor:'#2df1fc'
            }
            
        }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen} />     
      <Stack.Screen name="Screen1" options={{title: 'Screen 1'}} component={Screen1} />
      <Stack.Screen name="Screen2" options={{title: 'Screen 2'}} component={Screen2} />

    </Stack.Navigator>
  );
}