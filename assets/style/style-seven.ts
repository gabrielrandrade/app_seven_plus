import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'none'
    },
    image_login:{
        flex:1,
        zIndex:-10,
        marginTop:10
    },
    logo_login:{
        width: 100,
        height:100,
        marginTop:225
    },
    text_login:{
        fontSize:25,
        textAlign:'center',
        marginTop:50,
        marginBottom:50
    },
    text:{
        fontSize:15,
        textAlign:'left',
        marginTop:30    
    },
    input_login:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        width:250,
        marginTop: 10
    },
    button_login:{
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth:1,
        marginBottom: 20,
        marginTop: 30,
        width: 100,
    }


    


});
//CSS Login

export default styles;