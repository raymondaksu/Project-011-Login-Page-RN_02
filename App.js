import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.between}>
          <Image
            source={require('./shopping_basket.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="E-posta giriniz.." keyboardType='email-address' />
        <TextInput style={styles.input} placeholder="Şifre giriniz.." keyboardType='phone-pad'/>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80cbc4',
  },

  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 50,
    backgroundColor: '#ebeff2',
    margin: 18,
    borderRadius: 10,
    paddingLeft: 10
  },

  image: {
    flex: 1,
    minWidth: undefined,
    height: undefined,
    aspectRatio: 1.2,
    resizeMode: 'contain',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#546f7a',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '50%',
  },

  text: {
    color: '#feffff',
  },

  bottom: {
    flex: 2,
    alignItems: 'center',
  },

  between: {
    flex: 1,
    padding: 20,
  },
});
