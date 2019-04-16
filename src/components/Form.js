import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Logo extends React.Component {
    render(){
      return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#ffffff"
            keyboardType="email-address"
            onSubmitEditing={()=>this.password.focus()}
            />

            <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            ref={(input)=>this.password=input}
            />

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
},

inputBox:{
  width:300,
  height:50,
  backgroundColor:'rgba(255,255,255,0.2)',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#ffffff',
  marginVertical:10
},
button:{
  backgroundColor:'#1c313a',
  width:300,
  height:50,
  borderRadius:25,
  marginVertical:10,
  paddingVertical:12
},
buttonText:{
  fontSize:16,
  fontWeight:'500',
  color:'#ffffff',
  textAlign:'center'
}
});
