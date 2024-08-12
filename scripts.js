document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');

    if (inputText && outputText && encryptButton && decryptButton && copyButton) {
        function encryptText() {
            let text = inputText.value;
            let encryptedText = text
                .replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
            outputText.innerText = encryptedText;
        }

        function decryptText() {
            let text = inputText.value;
            let decryptedText = text
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
            outputText.innerText = decryptedText;
        }

        function copyText() {
            let text = outputText.innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }

        encryptButton.addEventListener('click', encryptText);
        decryptButton.addEventListener('click', decryptText);
        copyButton.addEventListener('click', copyText);
    } else {
        console.error('Uno o más elementos no se encontraron en el DOM');
    }
});
