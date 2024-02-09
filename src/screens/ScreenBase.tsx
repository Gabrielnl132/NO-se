import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../navigator/StackNavigator'
import { Button } from 'react-native'

interface Props extends StackScreenProps<RootStackParamList,'ScreenBase'>{};

export const ScreeBase = ({navigation}:Props) => {
  return (
    <Button title="Regresar" onPress={() => navigation.pop()} />
  )
}
