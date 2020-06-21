import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
const Navegador = () => {
    const [y, setY] = useState();
    const navigation = useNavigation();
    function hundleVoltar(){
        navigation.goBack();
    }
    function browser(){
        setY: <WebView
        source={{ uri: campoUrl }}
        style={{ marginTop: 20 }}
      />
      return(y);
    }
    const [campoUrl, setCampoUrl] = useState(String); 
    return (
    <>
    <RectButton style={styles.button} onPress={hundleVoltar}>
        <Text style={styles.buttonText}>
            Voltar
        </Text>
    </RectButton>
    
    <View style={styles.campoContainer}>
    <TextInput style={styles.campo} 
    onChangeText={text => setCampoUrl(text)}
    />
    </View>
    <RectButton style={styles.button} onPress={browser}>
        <Text style={styles.buttonText}>
            ir
        </Text>
    </RectButton>
    <WebView source={{uri: campoUrl}}/>
    </>
    )}
    const styles = StyleSheet.create({
        campoContainer: {
            marginTop: 10,
        },
        campo:{
            backgroundColor: '#4169e1',
            height: 80,
            width: 300,
            borderColor: '#FFF',
            borderRadius: 10,
            textAlign: 'center',
            marginBottom: 8,
            paddingHorizontal: 24,
            fontSize:50,
            marginLeft: 50
        },
        voltar: {
            marginTop: 30,
            fontSize: 40,
            color: '#4169e1',
        },
    
        button: {
            backgroundColor: '#4169e1',
            height: 60,
            width: 90,
            flexDirection: 'row',
            borderRadius: 10,
            overflow: 'hidden',
            alignItems: 'center',
            marginTop: 40,
        },
        buttonText: {
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFF',
            fontSize: 16,
        },
    })

export default Navegador;
