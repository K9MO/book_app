import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Book App</Text>
      <Text style={styles.subheading}>Curating stories, simply</Text>
      <Text style={styles.bodyText}>
        This minimalist app was co-created with AI to explore ethical design and storytelling.
      </Text>
      <Button title="Go to Books" onPress={() => navigation.navigate('Books')} />
    </View>
  );
}

function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Books</Text>
      <Text style={styles.bodyText}>Page is coming.</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 12,
    color: '#555',
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
  },

