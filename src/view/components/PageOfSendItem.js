import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    Dimensions
} from 'react-native';
const tconb = require('tcomb-form-native');

export default class PageOfRentalItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const personalInfo = tconb.struct({
            "お名前": tconb.String,
            "フリガナ": tconb.String,
            "住所": tconb.String,  
            "電話番号": tconb.String            
        });
      
          const options = {
          }
      
          const Form = tconb.form.Form;

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                <Text style={styles.text}>登録情報確認</Text>
                <Form ref="form" type={personalInfo} options={options} />
                </View>
                <View style={styles.button}>
                    <TouchableHighlight onPress={()=>{}} underlayColor='white'>
                        <Image source={require('../../../assets/images/send_b.png')} style={styles.buttonImage}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    text: {
        marginBottom: 30,
        color: '#595757'
    },
    form: {
        marginTop: 10,
        flex: 1,
        padding: 30,
        marginBottom: 150,
    },
    formImage: {
        width: Dimensions.get('window').width - 40,
        marginBottom: 50,
        marginRight: 20,
        marginLeft: 20,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        width: 128,
        height: 128
    }
});
