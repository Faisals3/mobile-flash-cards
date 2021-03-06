import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import {connect} from 'react-redux'
import { addDeck } from '../action';




function AddDeck({ navigation,dispatch }) {
    const [deckTitle, setDeckTitle] = useState('');

    function handleAddDeck() {

        const deck = {
            title : deckTitle,
            questions : []
           
        }

        dispatch(addDeck(deck))
        setDeckTitle('')
        navigation.navigate('Deck Page', {
            deck
        })

        
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40, alignSelf: 'center' }}>What is the title of your new deck?</Text>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ marginTop: 30 }}
            placeholder="Enter Deck title"
            onChangeText={deckTitle => setDeckTitle(deckTitle)}
            defaultValue={deckTitle}
            value={deckTitle}
          />
  
  
        </View>
  
        <TouchableOpacity style={styles.btn}
        onPress = {() => handleAddDeck()}
        >
          <Text style={{ color: 'white' }}>
            Submit
        </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    deckContainer: {
      flex: 0.1,
      padding: 20,
      borderWidth: 5,
      borderRadius: 30,
      width: 360,
      margin: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    btn: {
      backgroundColor: 'black',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 50,
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    correctBtn: {
      backgroundColor: 'green',
      padding: 15,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 50,
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    incoreectBtn: {
      backgroundColor: 'red',
      padding: 15,
      paddingLeft: 50,
      paddingRight: 50,
      borderRadius: 50,
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
  
    normalText : {
      fontSize:32,
      marginBottom:10,
      marginTop:10,
    }
  })

  export default connect()(AddDeck)