import React, { PureComponent } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Dimensions, FlatList } from "react-native";
import { TitleText, TextContainer, Route } from "./styles";

import withContext from "../hocs/withContext";

class UserMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      routes: props.routes,
    };
  }

  componentDidMount() {
    console.log(this.state.routes);
  }

  componentDidUpdate(prevProps, prevState) {
    const { routes } = this.props;
    if (prevProps.routes !== routes) this.setState({ routes });
  }

  handleNavigation = async data => {
    console.log(data);

    // navigate("DrawerClose");
  };

  renderItem = item => {
    console.log(item);
    const {
      navigation,
      sessionContext: {
        theme: { primaryColor, backgroundColor },
      },
    } = this.props;
    return (
      <Route
        color={backgroundColor}
        // onPress={() => this.handleNavigation(item)}
      >
        <TextContainer>
          <TitleText color={primaryColor}>{item.title}</TitleText>
        </TextContainer>

        <Icon
          style={{ paddingRight: 10, position: "absolute", right: 0 }}
          name="angle-right"
          size={30}
          color={primaryColor}
        />
      </Route>
    );
  };

  render() {
    const { routes } = this.state;
    return (
      <FlatList
        data={routes}
        contentContainerStyle={{
          height: Dimensions.get("window").height,
          marginTop: 30,
        }}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

export default withContext(UserMenu);
