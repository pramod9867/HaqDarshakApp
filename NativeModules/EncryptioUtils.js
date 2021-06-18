
import { NativeModules } from 'react-native';

const { EncryptionUtils } = NativeModules;

console.log(NativeModules);

async function encryptString(encryptedVar) {
    const string = await EncryptionUtils.encryptString(encryptedVar);
    // console.log(string);
    return string;


}

async function decryptString(decryptVar) {
    const decryptStringVar = await EncryptionUtils.decryptString(decryptVar);
    console.log(decryptStringVar);

    return decryptStringVar;


}

export { encryptString, decryptString };