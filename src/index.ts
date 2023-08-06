import * as CryptoJS from "crypto-js";

class SecureStorage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public encryptAndSave(value: string): void {
    const encryptedValue = CryptoJS.AES.encrypt(value, this.key).toString();
    localStorage.setItem(this.key, encryptedValue);
  }

  public getAndDecrypt(): string | null {
    const encryptedValue = localStorage.getItem(this.key);
    if (encryptedValue) {
      const decryptedValue = CryptoJS.AES.decrypt(
        encryptedValue,
        this.key
      ).toString(CryptoJS.enc.Utf8);
      return decryptedValue;
    }
    return null;
  }
}

export default SecureStorage;
