import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  QuestionRoutes,
  SharedRoutes,
  QuestionRoutesPT,
  SharedRoutesPT,
} from "./routes";
import { LogoContainer, RouteContainer, UsernameText, Text } from "./styles";
import RouteComponent from "./RouteComponent";
import withContext from "../hocs/withContext";
import parseByLocale from "../../utils/parseByLocale";

class Menu extends PureComponent {
  state = {
    routes: null,
  };

  async getRoutes() {
    const routes = await parseByLocale(
      [...QuestionRoutes, ...SharedRoutes],
      [...QuestionRoutesPT, ...SharedRoutesPT],
    );
    this.setState({ routes });
  }

  async componentDidMount() {
    const { navigation, modalContext } = this.props;
    const { setShowLoading } = modalContext;
    const { openDrawer, closeDrawer } = navigation;
    await setShowLoading(true);

    modalContext.setDrawerNav(openDrawer, closeDrawer);
    this.getRoutes();
    navigation.navigate("DrawerClose");
    await setShowLoading(false);
  }

  render() {
    const { routes } = this.state;
    const { modalContext, sessionContext, navigation } = this.props;
    const {
      theme: { backgroundColor, primaryColor, secondaryColor },
      appText: { hello },
    } = sessionContext;

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <LogoContainer backgroundColor={backgroundColor}>
          {/* <Image
            source={require("../../assets/images/logos/goreadColor.png")}
            resizeMode="contain"
          /> */}
        </LogoContainer>

        <RouteContainer>
          <Text color={secondaryColor}>
            {hello} <UsernameText color={primaryColor}>Luc</UsernameText>
          </Text>
          <RouteComponent navigation={navigation} routes={routes} />
        </RouteContainer>
      </View>
    );
  }
}

export default withContext(Menu);
