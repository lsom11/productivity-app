import NetInfo from "@react-native-community/netinfo";

const checkInternetConnection = async () => {
  const connectionInfo = await NetInfo.getConnectionInfo();
  if (connectionInfo.type === "none" || connectionInfo.type === "unknown") {
    return false;
  }
  return true;
};

export default checkInternetConnection;
