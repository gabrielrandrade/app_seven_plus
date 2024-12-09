import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    backgroundImage:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        alignItems: 'center',
    },
    logo_login:{
        width: 100,
        height:100,
    },
    containerLogin:{
        width:300,
        backgroundColor:'#ffffffa6',
        marginTop:30,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:5
    },
    containerInput:{
        width: '80%',
        marginLeft:'auto',
        marginRight:'auto'

    },
    textLogin:{
        fontSize:25,
        textAlign:'center',
        marginTop:30
    },
    textCadastro:{
        fontSize:15,
        textAlign:'left',
        marginTop:30,
        // marginLeft:30   
    },
    inputLogin:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        width:'100%',
        marginTop: 10,
        backgroundColor:'#fff',
        // marginLeft:'auto',
        // marginRight:'auto'
    },
    buttonLogin:{

        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:1,
        marginBottom: 20,
        marginTop: 30,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor:'#fff',

    },
//Carousel -----------
    wrapper: {

    },
    slide1: {
  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      height:300
    },
    slide2: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
      height:300,
    },
    slide3: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
      height:300
    },
    carouselImage:{
        width:'100%',
        height:300
    }

    




    


});
//CSS Login

export default styles;