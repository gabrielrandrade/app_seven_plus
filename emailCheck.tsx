import React, {Component} from 'react';
import { StyleSheet,Text, TextInput, Image, View, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import styles from './assets/style/style-seven';


class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./assets/image/fundo.jpg')} style={styles.backgroundImage} resizeMode="cover">
            <View>
              <Image 
              source={require('./assets/image/logo.png')} style={styles.logo_login}
              />
            </View>
          <View style={styles.containerLogin}>
            <View style={styles.containerInput}>
              <View>
                <Text style={styles.textLogin}>Recuperação de senha</Text>
                <Text style={styles.text}>Confirma o email</Text>
                <TextInput placeholder='Digite seu email' style={styles.inputLogin}  />
              </View>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonLogin}>
                  <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ImageBackground> 
      </SafeAreaView>
    );
  }

}

export default App;
