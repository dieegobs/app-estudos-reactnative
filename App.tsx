import React from "react";
import {View, Text, Image, ImageBackground, Button } from 'react-native';

const App = () => {

  //handle => gerencie o Botão 
  const handleLoginBtn = () => {
    alert('Olá mundo')
  }


  return (
    <View>
      <Text>Olá Mundo</Text>


     <ImageBackground 
      source={require('./assets/image.jpg')} 
      style={{ width:300, height: 200 }} 
      >
      <Text onPress={handleLoginBtn} style={{color: '#FFFFFF'}} >Algum exemplo de texto</Text>
     </ImageBackground>


    <Button title="Logar" onPress={handleLoginBtn}/>

    </View>  
  );
}

export default App;