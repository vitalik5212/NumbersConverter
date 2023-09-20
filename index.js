const characters = "0123456789ABCDEF";

function anyToBinary(value, fromBase) {
    if (fromBase === 2) return value;
    let binary = '';
    let num = parseInt(value, fromBase);
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

function binaryToAny(binary, toBase) {
    if (toBase === 2) return binary;

    // Конвертація з двійкової в десяткову
    let decimal = 0;
    let multiplier = 1;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1") {
            decimal += multiplier;
        }
        multiplier *= 2;
    }

    // Конвертація з десяткової в потрібну систему числення
    let result = "";

    while (decimal > 0) {
        let remainder = decimal % toBase;
        result = characters[remainder] + result;
        decimal = Math.floor(decimal / toBase);
    }

    return result || "0";
}

function convert() {
    const inputBase = parseInt(document.getElementById('inputBase').value, 10);
    const inputValue = document.getElementById('inputValue').value;
    const outputBase = parseInt(document.getElementById('outputBase').value, 10);
    const outputValue = document.getElementById('outputValue');

    const binaryValue = anyToBinary(inputValue, inputBase);
    outputValue.value = binaryToAny(binaryValue, outputBase);
}