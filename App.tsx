import React from "react";
import {View, Text, Image, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Olá Mundo</Text>


     <ImageBackground 
      source={require('./assets/image.jpg')} 
      style={{ width:300, height: 200 }} 
      >
      <Text style={{color: '#FFFFFF'}} >Algum exemplo de texto</Text>
     </ImageBackground>


    </View>  
  );
}

export default App;