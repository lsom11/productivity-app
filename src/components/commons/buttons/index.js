import React, { useEffect, useState } from "react";
import { ActivityIndicator, Platform, View } from "react-native";
import styled, { css } from "styled-components";

const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  padding: 0 2.5%;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#eb0f68"};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop || 0};
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : "transparent"};
`;

const Text = styled.Text`
  font-size: 16px;
  color: ${props => (props.textColor ? props.textColor : "#fff")};
  ${Platform.select({
    android: css``,
    ios: css`
      margin-top: 7px;
    `,
  })};
`;

const Button = ({
  submit,
  title,
  marginTop,
  paddingRight,
  backgroundColor,
  icon,
  loading = false,
  textColor = null,
  borderColor = null,
}) => {
  const [isLoading, setLoading] = useState(false);
  async function submitForm() {
    setLoading(true);
    await submit();
    setLoading(false);
  }

  useEffect(() => {
    setLoading(loading);
  }, []);

  return (
    <Container
      onPress={() => submitForm()}
      marginTop={marginTop}
      backgroundColor={backgroundColor}
      paddingRight={paddingRight}
      borderColor={borderColor}
    >
      {!isLoading ? (
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {Platform.OS === "android" ? <View>{icon}</View> : null}
          <Text textColor={textColor}>{title}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </Container>
  );
};

export { Button }; // eslint-disable-line
