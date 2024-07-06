import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors'; // Adjust the path if necessary

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../../../assets/images/login.jpeg')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign:'center', marginTop: 30, }}>
          Let's Find
          <Text style={{fontWeight: 'bold'}}> Professional {'\n'} Cleaning and repair
          </Text>  Service
        </Text>

        <Text style={{fontSize:17, color:Colors.WHITE, textAlign: 'center', marginTop: 20, padding: 10}}>Best App to find services near you which deliver you a profesional service</Text>
      
      <TouchableOpacity style={styles.button}
      onPress={()=>console.log("Button Click")}>
        <Text style={{textAlign: 'center', fontSize: 17, color: Colors.PRIMARY}}>Let's Get Started</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%', // Corrected width to '100%'
    backgroundColor: Colors.PRIMARY,
    height: '70%', // Corrected height to '70%'
    marginTop: -300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button:{
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 20,
    width: '90%',
    marginLeft: "5%"
  }
});
