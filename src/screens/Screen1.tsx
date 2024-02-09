import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Screen2} from './Screen2';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Screen1'> {}

export const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.img}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/b5/2a/19/b52a199a2ad77ba3c83b73db91851223.jpg',
        }}
        style={styles.img}
      />
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
