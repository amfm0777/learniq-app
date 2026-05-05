// App.js — Navegación principal de LearnIQ
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Pantallas
import HomeScreen from './src/screens/HomeScreen';
import BasicIntroScreen from './src/screens/BasicIntroScreen';
import BasicTestScreen from './src/screens/BasicTestScreen';
import BasicResultScreen from './src/screens/BasicResultScreen';
import PremiumIntroScreen from './src/screens/PremiumIntroScreen';
import PremiumTestScreen from './src/screens/PremiumTestScreen';
import PremiumResultScreen from './src/screens/PremiumResultScreen';
import DisclaimerScreen from './src/screens/DisclaimerScreen';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#0D0B1E' },
            animationEnabled: true,
          }}
        >
          {/* Home */}
          <Stack.Screen name="Home" component={HomeScreen} />

          {/* Test Básico (gratuito) */}
          <Stack.Screen name="BasicIntro" component={BasicIntroScreen} />
          <Stack.Screen name="BasicTest" component={BasicTestScreen} />
          <Stack.Screen name="BasicResult" component={BasicResultScreen} />

          {/* 💳 Pago → luego Premium */}
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="PremiumIntro" component={PremiumIntroScreen} />
          <Stack.Screen name="PremiumTest" component={PremiumTestScreen} />
          <Stack.Screen name="PremiumResult" component={PremiumResultScreen} />

          {/* Páginas de soporte */}
          <Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
