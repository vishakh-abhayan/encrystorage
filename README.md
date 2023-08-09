# encrystorage 🔗

![npm](https://img.shields.io/npm/v/encrystorage?color=blue)
![license](https://img.shields.io/npm/l/encrystorage)

## About

The "encrystorage" package is a lightweight and secure solution for encrypting and decrypting sensitive data in the local storage of web browsers. It provides two simple yet powerful functions that enable developers to store and retrieve encrypted data securely.

### Tech Stack

- TypeScript
- CryptoJS (for encryption and decryption)

## Installation

Install the package via npm:

```bash
npm install encrystorage
```

## How to Use

```javascript
import SecureStorage from "encrystorage";

const encryptionKey = "your-secret-key";
const secureStorage = new SecureStorage(encryptionKey);

const sensitiveData = "sensitive information";
secureStorage.encryptAndSave(sensitiveData);

// Later, retrieve and decrypt the data
const decryptedData = secureStorage.getAndDecrypt();
console.log(decryptedData); // Output: 'sensitive information'
```

## How to Contribute

We welcome contributions to improve the "browser-encrypt-storage" package. To contribute, follow these steps:

1.Fork the repository.
2.Create a new branch for your feature or bug fix.
3.Make changes and commit them.
4.Push your branch to your forked repository.
5.Create a pull request to the main repository.

### Posting Issues

If you encounter any bugs or have suggestions for improvements, please open an issue on GitHub. We appreciate your feedback and will address the issues as soon as possible.

### Support

If you need any assistance or have questions about using the package, feel free to contact us via the GitHub repository or by email at vishakhabhayan0@gmail.com

##

