# vcrypt 🔗

![npm](https://img.shields.io/npm/v/vcrypt?color=blue)
![license](https://img.shields.io/npm/l/vcrypt)

## About

The "vcrypt" package is a lightweight and secure solution for encrypting and decrypting sensitive data in the local storage of web browsers. It provides two simple yet powerful functions that enable developers to store and retrieve encrypted data securely.

### Tech Stack

- TypeScript
- CryptoJS (for encryption and decryption)

## Installation

Install the package via npm:

```bash
npm install vcrypt
```
## How to Use

```javascript
import SecureStorage from 'vcrypt';

const encryptionKey = 'your-secret-key';
const secureStorage = new SecureStorage(encryptionKey);

const sensitiveData = 'sensitive information';
secureStorage.encryptAndSave(sensitiveData);

// Later, retrieve and decrypt the data
const decryptedData = secureStorage.getAndDecrypt();
console.log(decryptedData); // Output: 'sensitive information'

```

