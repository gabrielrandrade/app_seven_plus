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
    text:{
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
    




    


});
//CSS Login

export default styles;