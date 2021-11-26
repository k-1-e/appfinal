import { Button, Text, View, StyleSheet } from 'react-native';
import React from 'react';

const FeedScreen = ({ navigation, route}) => {
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen {itemId} {otherParam} </Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button
          title="nueva ventana"
          onPress={() => navigation.push('FeedScreen')}
        />
      </View>
    );
  }

  export default FeedScreen

  const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    }
})