import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import queryString from 'query-string';

interface DeviceInfo {
  app_id: string;
  os_version: string;
  device_type: string;
}
interface DeviceInfoExtended {
  app_id: string;
  os_version: string;
  device_type: string;
  device_id: string;
  device_name: string;
}

const getDeviceUrlParams = () => {
  let device: DeviceInfo;
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
