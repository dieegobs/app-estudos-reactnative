import React, {useState} from "react";
import {View, Text, Image, ImageBackground, Button } from 'react-native';

const App = () => {

  const [name, setName] = useState('Diego');
  const [age, setAge] = useState(30);


  //handle => gerencie o Botão 
  const handleLoginBtn = () => {
    alert('Olá mundo')
  }


  return (
    <View>
      <Text>Olá {name}</Text>

    <Button title="Mudar Bilu" onPress={() => setName('Bilu')}/>
    <Button title="Mudar João " onPress={() => setName('João')}/>
    <Button title="Mudar Matheus" onPress={() => setName('Matheus')}/>
    <Button title="Mudar Alessandra" onPress={() => setName('Alessandra')}/>
     

    </View>  
  );
}

export default App;