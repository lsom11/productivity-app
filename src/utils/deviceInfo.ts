import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import queryString from 'query-string';

const getDeviceUrlParams = () => {
  let device;
  if (Platform.OS === 'ios') {
    device = DeviceInfo.isTablet() ? 'ipad' : 'iphone';
  } else {
    device = DeviceInfo.isTablet() ? 'tablet_android' : 'smartphone_android';
  }

  const deviceInfo = {
    app_id: DeviceInfo.getBundleId(),
    os_version: Platform.OS,
    device_type: device,
  };

  return queryString.stringify(deviceInfo);
};

const getSessionUrlParams = body => {
  let device;

  if (Platform.OS === 'ios') {
    device = DeviceInfo.isTablet() ? 'ipad' : 'iphone';
  } else {
    device = DeviceInfo.isTablet() ? 'tablet_android' : 'smartphone_android';
  }

  const deviceInfo = {
    app_id: DeviceInfo.getBundleId(),
    os_version: Platform.OS,
    device_type: device,
    device_id: DeviceInfo.getUniqueID(),
    device_name: DeviceInfo.getDeviceName(),
  };

  if (body) return deviceInfo;

  return queryString.stringify(deviceInfo);
};

export { getDeviceUrlParams, getSessionUrlParams };
