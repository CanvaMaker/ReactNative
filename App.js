/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { text } from 'express';
import React from 'react';
import { 
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
} from 'react-native';


const App= () => {
  let url = "https://docs.microsoft.com/tr-tr/visualstudio/intellicode/visual-studio-whole-line-completions"
    return (
      <View style={styles.body}> 
        <Text style={styles.textP}>
          This is first text
        </Text>
        <Button title="Tıkla Bana"  onPress={()=>{Linking.openURL('https://youtube.com/emrebaltaoglu')}}>
        
        </Button>
        
        <ActivityIndicator size = "large" color = "yellow"> 

        </ActivityIndicator>
      </View>
    );
};

const styles = StyleSheet.create({
  body : {
    flex : 1,
    backgroundColor : "#FF5733",
    alignItems : 'center',
    justifyContent : 'center',    
  },
  textP : {
    fontSize : 32,
    color : "white",
    fontStyle : 'italic'
  },
  buttonStil : {
    
  }
});

export default App;
