import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./navigation/CustomDrawer";
import { OnboardingStackNavigator } from "./navigation/StackNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./stores/rootReducer";
import thunk from 'redux-thunk';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <OnboardingStackNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

