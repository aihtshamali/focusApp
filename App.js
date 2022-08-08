import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {colors} from './src/utils/colors'
// You can import from local files
import Focus from './src/features/focus';

// or any pure javascript modules available in npm
import { Timer } from './src/features/timer';
import { FocusHistory } from './src/features/focusHistory';

export default function App() {
  const [currentFocus, setCurrentFocus] = useState(null)
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {(
        !currentFocus ? 
        (
          <>
            <Focus addFocus={setCurrentFocus}/>
            <FocusHistory history={history}/>
          </>
        )  :
          <Timer focusSubject={currentFocus}
            onTimerEnd={(subject) => {setHistory([...history, subject])}}
            clearSubject={() => setCurrentFocus(null)}
          />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  }
});
