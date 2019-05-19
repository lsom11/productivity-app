import React, { useContext } from "react";
import { Animated, Easing, View } from "react-native";
import styled from "styled-components";
import Icon from "../assets/images/loading.png";
import { ModalContext } from "../context/modalContext";

const LoadingContainer = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
`;

const Loading = props => {
  const modalContext = useContext(ModalContext);
  const { showLoading } = modalContext;
  const { size = "large", color = "#000" } = props;
  const holder = new Animated.Value(0);

  const rotate = () => {
    holder.setValue(0);
    Animated.timing(holder, {
      duration: 2000,
      easing: Easing.linear,
      toValue: 1,
    }).start(() => rotate());
  };

  rotate();

  const styleRotate = holder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (showLoading) {
    return (
      <LoadingContainer>
        <Animated.Image
          source={Icon}
          style={{
            height: 80,
            transform: [{ rotate: styleRotate }],
            width: 80,
          }}
        />
      </LoadingContainer>
    );
  }
  return <View />;
};

export default Loading;
