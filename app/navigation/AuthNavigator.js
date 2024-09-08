import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "../screens/LogIn";
import ForgotPassword from "../screens/ForgotPassword";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LogIn}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default AuthNavigator;
