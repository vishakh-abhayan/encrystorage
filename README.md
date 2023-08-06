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

If you need any assistance or have questions about using the package, feel free to contact us via the GitHub repository or by email at support@example.com.

##

### ISC License (ISC)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
