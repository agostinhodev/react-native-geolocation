import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create({

  container:{

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  text:{

    fontSize: 28

  },
  button:{

    marginTop: 15,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginBottom: 15


  },
  textButton:{

    color: 'white',
    fontSize: 20

  },

  textLocation:{

    fontSize: 20

  }

});

export default function App(){

  function getLocation(){
        
    Geolocation.getCurrentPosition(

        (pos) => {
            
            setLatitude(pos.coords.longitude);
            setLongitude(pos.coords.latitude);
            
        },
        (error) => Alert.alert("Erro", error.message),
        { 

            enableHighAccuracy: false, timeout: 120000, maximumAge: 1000 
          
        }
    );   
    
  }

  const [latitude, setLatitude]  = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  return(

    <View style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo ao meu App      
      </Text>

      <TouchableOpacity 
      onPress={getLocation}
      style={styles.button}>
        <Text style={styles.textButton}>Obter minha localização</Text>
      </TouchableOpacity>

      <Text style={styles.textLocation}>Localização atual:</Text>
      <Text style={styles.textLocation}>{latitude}, {longitude}</Text> 
      
    </View>

  );

}