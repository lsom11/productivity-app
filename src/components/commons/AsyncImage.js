import React, { Component } from "react"; // eslint-disable-line no-unused-vars

import { Image, View } from "react-native";
import FastImage from "react-native-fast-image";

export default class AsyncImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { placeholder, style, source, noFlex = false } = this.props;

    return (
      <View style={!noFlex && { flex: 1 }}>
        <FastImage
          source={source}
          resizeMode={"contain"}
          style={[style, !noFlex && { flex: this.state.loaded ? 1 : 0 }]}
          onLoad={this.onLoad}
        />

        {!this.state.loaded && (
          <Image
            source={placeholder || require("../../assets/images/camera.png")}
            resizeMode={"contain"}
            style={[style, !noFlex && { flex: 1 }]}
          />
        )}
      </View>
    );
  }

  onLoad = () => {
    this.setState(() => ({ loaded: true }));
  };
}
