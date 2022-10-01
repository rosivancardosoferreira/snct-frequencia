import React from "react";
import { AppMainRoutes } from "routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "presentation/styles/defaultTheme";

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
        <ThemeProvider theme={theme}>
          <AppMainRoutes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
