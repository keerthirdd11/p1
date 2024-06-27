function generateKeys() {
    const rsa = new JSEncrypt({ default_key_size: parseInt(document.getElementById('encryptionMode').value) });
    const publicKey = rsa.getPublicKey();
    const privateKey = rsa.getPrivateKey();

    document.getElementById('publicKey').value = publicKey;
    document.getElementById('privateKey').value = privateKey;
}

function encrypt() {
    const encryptor = new JSEncrypt();
    const publicKey = document.getElementById('encryptionPublicKey').value;
    encryptor.setPublicKey(publicKey);

    const plainText = document.getElementById('encryptionText').value;
    const encrypted = encryptor.encrypt(plainText);

    document.getElementById('encryptedText').value = encrypted;
}

function decrypt() {
    const decryptor = new JSEncrypt();
    const privateKey = document.getElementById('decryptionPrivateKey').value;
    decryptor.setPrivateKey(privateKey);

    const encryptedText = document.getElementById('decryptionText').value;
    const decrypted = decryptor.decrypt(encryptedText);

    document.getElementById('decryptedText').value = decrypted;
}