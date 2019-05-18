import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import ForgotPass from "../screens/login/ForgotPassword";
import Login from "../screens/login/Login";
import Register from "../screens/login/Register";

const loginNavigator = createStackNavigator(
  {
    ForgotPass: { screen: ForgotPass },
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    headerMode: "none",
    initialRouteName: "Login",

    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        easing: Easing.step0,
        timing: Animated.timing,
      },
    }),
  },
);

export default loginNavigator;
