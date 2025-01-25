import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import Dashboard from '@/components/Dashboard';
const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component = {Index} options={{ title: "Login", headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Dashboard" component= {Dashboard} options={{ title: "Dashboard"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
