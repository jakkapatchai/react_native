import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,Button, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {login:'',password:''
    };
  }
  onPressShow(){
    Alert.alert('Hello==','This is '+`${this.state.login}
   + ${this.state.password}`);
    if(this.state.login == '1' && this.state.password == '2'){
      Alert.alert('Hello==','This is '+`${this.state.login}
    + ${this.state.password}`)
    }
    else{
      Alert.alert('55555555');
    }
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 250, height: 100,
          marginTop: 35}}
          source={require('./logo.png')}
        />
        <Text style={styles.title}>Authentication Screen</Text>
        <View style={styles.container2}>
          <Text style={{fontSize: 20, fontWeight: 'bold' }}>
            Login</Text>
          <TextInput 
            placeholder="login name"
            maxLength={50} 
            value={this.state.login}
            style = {styles.inputs}
            onChangeText={(login)=>this.setState({login})}
            />
          <Text style={{fontSize: 20, fontWeight: 'bold' }}>
            Password</Text>
          <TextInput 
           placeholder="password"
           maxLength={50} 
           value={this.state.password}
           style = {styles.inputs}
           secureTextEntry={true}
           onChangeText={(password)=>this.setState({password})}
           />
          <Button
           onPress = {this.onPressShow.bind(this)}
           //onPress = {this.calculateSum}
            title="LOGIN NOW"
            color="#841584"/>
        </View>
        <TextInput 
          value ={this.state.sum}
           />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
  inputs:{
    width: 150,
    height: 40,
    padding: 10,
    backgroundColor:'#ecf0f1'
  }
});
