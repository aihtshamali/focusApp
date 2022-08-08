import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors, padding, spacing} from '../utils/index'
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';

export default Focus = ({addFocus}) => {
  const [subject, setSubject] = useState(null)
  return (
  <View style ={styles.container}>
    <View style={styles.textInputContainer}>
      <TextInput style = {styles.textInput} label ="Need to Focus on?" 
      onChangeText={setSubject}
      />
      <RoundedButton title="+" size={55} onPress={() => addFocus(subject)}/>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 0.15
  },
  textInputContainer: {
    ...padding(10,10,20,10),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'

  },
  textInput: {
    flex: 1,
    color: colors.white,
    borderRadius: spacing.sm,
    marginRight: spacing.sm
  }
});
