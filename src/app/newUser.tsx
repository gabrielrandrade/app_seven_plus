import React, {Component} from 'react';
import { StyleSheet,Text, TextInput, Image, View, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import styles from '../../assets/style/style-seven';
import { Link } from 'expo-router';


class NewUser extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/image/fundo.jpg')} style={styles.backgroundImage} resizeMode="cover">
            <View>
              <Image 
              source={require('../../assets/image/logo.png')} style={styles.logo_login}
              />
            </View>
          <View style={styles.containerLogin}>
            <View style={styles.containerInput}>
              <View>
                <Text style={styles.textLogin}>Criar Usuario</Text>
                <Text style={styles.textCadastro}>Email</Text>
                <TextInput placeholder='Digite seu email' style={styles.inputLogin}  />
              </View>
              <View>
                  <Text style={styles.textCadastro}>Nome</Text>
                  <TextInput placeholder='Digite a sua senha' style={styles.inputLogin} />
              </View>
              <View>
                  <Text style={styles.textCadastro}>Senha</Text>
                  <TextInput placeholder='Digite a sua senha' style={styles.inputLogin} />
              </View> 
              <View>
                  <Text style={styles.textCadastro}>Cofirmar senha</Text>
                  <TextInput placeholder='Digite a sua senha' style={styles.inputLogin} />
              </View> 
            </View>
            <View>
            <Link href={"/index"} asChild>
                <TouchableOpacity style={styles.buttonLogin}>
                  <Text>Entrar</Text>
                </TouchableOpacity>
            </Link>
            </View>
          </View>
        </ImageBackground> 
      </SafeAreaView>
    );
  }

}

export default NewUser;
