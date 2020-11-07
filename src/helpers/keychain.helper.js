import * as Keychain from 'react-native-keychain';

export const setSecureValue = (key, value) => {
  Keychain.setInternetCredentials(
    key,
    key /* <- can be a random string */,
    value,
  );
};

export const getSecureValue = async (key) => {
  const result = await Keychain.getInternetCredentials(key);
  if (result) {
    return result.password;
  }
  return false;
};

export const removeSecureValue = (key) => {
  Keychain.resetInternetCredentials(key);
};
