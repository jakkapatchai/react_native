import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,
Button, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {Num1:0,Num2:0};}
  Sumplus=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1+N2;
    Alert.alert("Sum Plus = " + Sum);
  }
  SumSubtrac=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1-N2;
    Alert.alert("Sum Subtrac = " + Sum);
  }
  SumMultiply=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1*N2;
    Alert.alert("Sum Multiply = " + Sum);
  }
  SumDivide=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1/N2;
    Alert.alert("Sum Divide = " + Sum);
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculator</Text>
        <TextInput placeholder="0"  style = {styles.inputs} onChangeText={Num1=>this.setState({Num1})}/>
        <TextInput placeholder="0" style = {styles.inputs} onChangeText={Num2=>this.setState({Num2})} />

        <View style={styles.buttons} >
        <Button title="+"  onPress ={this.Sumplus}  />
        </View>
        <View style={styles.buttons}>
        <Button title="-"   onPress ={this.SumSubtrac}/>
        </View>
        <View style={styles.buttons}>
        <Button title="*" onPress ={this.SumMultiply}/>
        </View>
        <View style={styles.buttons}>
        <Button title="/"  onPress ={this.SumDivide}/>
        </View>
      </View>
        
        
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  title: {
    padding: 20,
    fontSize: 25,
    marginTop: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  inputs:{
    width: 250,
    height: 40,
    marginTop: 20,
    backgroundColor:'#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'left',
  },
  buttons: {
    width: 150,
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});