import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen, { Login } from '../myApp/src/screens/Login';
import { ProductsList } from '../myApp/src/screens/ProductList';
import { ProductDetails } from '../myApp/src/screens/ProductDetails';
import { Cart } from '../myApp/src/screens/Cart';
import { CartIcon } from './src/components/CartIcon.js';
import { CartProvider } from './src/CartContext';
import { Checkout } from '../myApp/src/screens/Checkout';
import { Confirmation } from '../myApp/src/screens/Confirmation';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Checkout' component={Checkout} 
          options={({ navigation }) => ({
            title: 'Checkout',
            headerTitleStyle: styles.headerTitle,
            Checkout: () => <CheckoutBtn navigation={navigation}/>
          })}/>
          <Stack.Screen name='Confirmation' component={Confirmation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'montserrat',
    fontWeight: 'bold'
    
  }
});
export default App;

//logo color is #560cce