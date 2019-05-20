import DeviceInfo from "react-native-device-info";

const parseByLocale = async (english, portuguese) => {
  const deviceLocale = await DeviceInfo.getDeviceLocale();
  if (deviceLocale === "en" || "en-US") return english;
  return portuguese;
};

export default parseByLocale;
