import React from 'react';
import {StyleSheet, Text, View, Image,Button,Alert, TouchableOpacity } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ejercicios from './escenas/ejercicios';
import alimentos from './escenas/alimentos';
import estadisticas from './escenas/estadisticas';
import alarmas from './escenas/alarmas';
export default class registro extends React.Component {
  onPress(){
    Alert.alert(
  'Aviso',
  'Tu App esta en progreso',
  [
    {text: 'Avisarme Tarde', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
  }
  render() {
    let nombre = 'Amigo';
    return (
      <View style={styles.container}>
        <View style={styles.head}></View>
        <Text style={styles.texto}>OwnGym</Text>
        <Image style={styles.imagen} source={require('./imagenes/logoApp.png')} />
        <Text> </Text>
        <Text> </Text>
        <Text>¡Bienvenido {nombre}!</Text>
        <Text>Mejora tu salud con nuestra nueva App</Text>
        <View style={styles.head}></View>
        <Button style={styles.boton1}
         onPress={this.onPress}
         title="Leer mas"
         backgroundColor='#0097e6'
         accessibilityLabel="Button1"/>
       <Router>
         <Scene key="root">
       <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-end',}}>
         <View  style={{width: 80, height: 80, backgroundColor: 'powderblue'}}>
           <Scene key="ejercicios" component={ejercicios}/>
           <Icon name="commenting-o" size={30} color="#900" />
         </View>
         <View  style={{width: 80, height: 80, backgroundColor: 'skyblue'}}>
         <Scene key="alimentos" component={alimentos}/>
         <Icon name="commenting-o" size={30} color="#900" />
     </View>
         <View  style={{width: 80, height: 80, backgroundColor: 'steelblue'}}>
         <Scene key="estadisticas" component={estadisticas}/>
         <Icon name="commenting-o" size={30} color="#900" />
     </View>
         <View  style={{width: 80, height: 80, backgroundColor: '#0097e6'}}>
         <Scene key="alarmas" component={alarmas}/>
         <Icon name="commenting-o" size={30} color="#900" />
     </View>
    </View>
    </Scene>
  </Router>
</View>
    );
  }
}

const styles = StyleSheet.create({
  head:{
    height:30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagen:{
    width:150,
    height:200,
  },
  texto:{
    fontSize:30,
    fontWeight:'bold',
  },

});
