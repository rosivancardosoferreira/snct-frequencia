import React from "react";
import { AppMainRoutes } from "routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";
import theme from "presentation/styles/defaultTheme";
import store from "store";

const styleSafe = StyleSheet.create({
  containerSafeArea: {
    flex: 1
  }
});

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styleSafe.containerSafeArea}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <AppMainRoutes />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
