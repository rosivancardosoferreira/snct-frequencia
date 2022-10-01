import React from "react";
import { AppMainRoutes } from "routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const styleSafe = StyleSheet.create({
  containerSafeArea: {
    flex: 1
  }
});

const App = () => {
  return (
    <SafeAreaView style={styleSafe.containerSafeArea}>
      <StatusBar barStyle="light-content" backgroundColor={"red"} />
      <NavigationContainer>
        <AppMainRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
