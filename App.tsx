import React from "react";
import {View, Text, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Olá Mundo</Text>


     <Image
        source={{uri: 'https://www.google.com.br/google.jpg'}}
        style={{width: 300, height: 100}}
      />

    <Image
        source={require('./assets/image.jpg')}
        style={{width: 500, height: 500}}
      
      />


    </View>  
  );
}

export default App;