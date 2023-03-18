import React, {useState} from "react";
import {View, Text, Image, ImageBackground, Button } from 'react-native';

const App = () => {

  const [name, setName] = useState('Diego');
  const [age, setAge] = useState(30);

  const handleClear = () => {
    setName('');
    setAge(0);
  }


  return (
    <View>
      <Text>Olá {name} </Text>


      { name != '' &&
        <Button
        title="Limpar tudo"
        onPress={handleClear}
      
      />
      }
    
    


    <Button 
      title="Mudar Bilu" 
      onPress={ () => {
        setName('Bilu');
        setAge(20);
      }
    } 
      
      />

    <Button title="Mudar João " onPress={() => setName('João')}/>
    <Button title="Mudar Matheus" onPress={() => setName('Matheus')}/>
    <Button title="Mudar Alessandra" onPress={() => setName('Alessandra')}/>
     

    </View>  
  );
}

export default App;