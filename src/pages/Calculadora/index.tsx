import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Calculadora = () =>{

const [primeiro, setPrimeiro] = useState(0);
const [segundo, setSegundo] = useState(0); 
const [result, setResultado] = useState(0);


const navigation = useNavigation();
function hundleVoltar(){
    navigation.goBack();
}
function soma(){
    setResultado(primeiro + segundo );
}
function subtrair() {
    setResultado(primeiro - segundo)
}
function multiplicar() {
    setResultado(primeiro * segundo)

}
function dividir() {
    if(segundo <= primeiro){
        setResultado(primeiro/segundo)
    }else{
        Alert.alert('Imposivel a divisão');
    }
}

    return(
        <View>
            <RectButton style={styles.button} onPress={hundleVoltar}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </RectButton>
            <Text style={styles.title}>
                Calculadora
            </Text>
            <View style={styles.campoContainer}>
                <TextInput style={styles.campo} 
                keyboardType="decimal-pad"
                onChangeText={text => setPrimeiro(Number(text))}
                />

                <TextInput style={styles.campo} 
                keyboardType="decimal-pad"
                onChangeText={text => setSegundo(Number(text))}
               />                    
            </View>
            <View style={styles.buttonContainer}>
                <RectButton style={styles.buttonCalc} onPress={subtrair}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={soma}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={multiplicar}>
                    <Text style={styles.buttonText}>
                        *
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={dividir}>
                    <Text style={styles.buttonText}>
                        /
                    </Text>
                </RectButton>
            </View>
            <Text style={styles.resultado}>
                {result}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
    resultado:{ 
        backgroundColor: '#4169e1',
        height: 80,
        width: 300,
        borderColor: '#FFF',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize:50,
        marginLeft: 50,
        
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },
    title: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 40,
      maxWidth: 260,
      marginTop: 10,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',   
    },
    buttonCalc: {
        backgroundColor: '#4169e1',
        height: 60,
        width: 90,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },
    campo: {
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
    campoContainer:{
        marginTop: 10,
    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },
})
export default Calculadora;