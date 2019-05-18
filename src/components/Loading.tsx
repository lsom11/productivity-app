import React from "react";
import { Animated, Easing, View } from "react-native";
import styled from "styled-components";
import Icon from "../../assets/images/utils/loading.png";

const LoadingContainer = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
`;

interface IProps {
  size: string;
  color: string;
  loading: boolean;
}
const Loading = (props: IProps) => {
  const { size = "large", color = "#000", loading } = props;
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

  if (loading) {
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
