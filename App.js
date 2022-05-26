import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

export default function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Torch.switchState(toggle)
  }, [toggle]); 

  useEffect(()=>{
    const subscription = RNShake.addListener(() => {
      setToggle(!toggle);
    })
    return () => subscription.remove();
  }, [])

  return (
    <View style = {toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Image style ={toggle ? styles.lightingOn : styles.lightingOff} source = {toggle ? require('./src/assets/images/eco-light.png') : require('./src/assets/images/eco-light-off.png') } />
        <Image style ={dioLogo} source = {toggle ? require('./src/assets/images/logo-dio.png') : require('./src/assets/images/logo-dio-white.png') } />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250
  }
})
