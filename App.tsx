import React, {Component} from 'react';
import { StyleSheet,Text, TextInput, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './assets/style/style-seven';


class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Image source={require('./assets/image/fundo.jpg')} style={styles.image_login} />
        <View>
          <Image 
          source={require('./assets/image/logo.jpg')} style={styles.logo_login}
          />
          <Text style={styles.text_login}>Login</Text>
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput placeholder='Digite seu email' style={styles.input_login}  />
        </View>
        <View>
            <Text style={styles.text}>Senha</Text>
            <TextInput placeholder='Digite a sua senha' style={styles.input_login} />
        </View> 
        <View>
            <TouchableOpacity style={styles.button_login}>
              <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

}

export default App;
