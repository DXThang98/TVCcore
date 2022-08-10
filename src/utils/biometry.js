import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {Platform} from 'react-native';

const RNBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});

const checkPermission = async (type = 'TouchID') => {
  const {biometryType, available} = await RNBiometrics.isSensorAvailable();

  if (!available) return false;

  if (Platform.OS === 'android') {
    if (biometryType === BiometryTypes.Biometrics) return true;
  }

  if (Platform.OS === 'ios') {
    if (biometryType === BiometryTypes[type]) return true;
  }

  return false;
};

const checkKey = async () =>
  (await RNBiometrics.biometricKeysExist()).keysExist;

const createKey = async () => {
  const {publicKey} = await RNBiometrics.createKeys();
  console.log('awdawd', publicKey);
  return publicKey;
};

let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
let payload = epochTimeSeconds + 'some message';

export const checkTouchID = async () => {
  try {
    const permission = await checkPermission('TouchID');
    const key = await checkKey();
    console.log('awdawdawawdawdawdawdaw', key);
    if (!key) await createKey();

    if (!permission) throw new Error('need perms');

    const result = await RNBiometrics.createSignature({
      promptMessage: 'check finger',
      payload: payload,
    });

    return result;
  } catch (err) {
    console.log('eeee', err);
  }
};
