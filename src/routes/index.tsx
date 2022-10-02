import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, ListAllActivity } from "presentation/screens";

const MainStack = createStackNavigator();

export function AppMainRoutes() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="ListAllActivity" component={ListAllActivity} />
    </MainStack.Navigator>
  );
}
