import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import YoloPayScreen from './src/screens/YoloPayScreen';
import GenieScreen from './src/screens/GenieScreen';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#888',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: '#FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  source={require('./src/assets/Home.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Yolo Pay"
          component={YoloPayScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  borderWidth: 0.5,
                  borderColor: '#FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 25,
                }}>
                <Image
                  source={require('./src/assets/Home.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Genie"
          component={GenieScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: '#FFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Image
                  source={require('./src/assets/Home.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
