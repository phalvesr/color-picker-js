const redInput = document.querySelector('#Red');
const redValue = document.querySelector('#red-value');
const greenInput = document.querySelector('#Green');
const greenValue = document.querySelector('#green-value');
const blueInput = document.querySelector('#Blue');
const blueValue = document.querySelector('#blue-value');
const alphaInput = document.querySelector('#Alpha');
const alphaValue = document.querySelector('#alpha-value');
const outputFormat = document.querySelector('#color-rgba-format');
const copyBtn = document.querySelector('.copy-btn');

addEventListener('DOMContentLoaded', updateColor);
redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);
alphaInput.addEventListener('input', updateColor)
copyBtn.addEventListener('click', () => {
    const copy = outputFormat;
    copy.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    copy.blur();
});

function updateColor() {

    redValue.textContent = redInput.value;
    greenValue.textContent = greenInput.value;
    blueValue.textContent = blueInput.value;
    alphaValue.textContent = alphaInput.value;
    outputFormat.value = `rgba(${redInput.value},${greenInput.value},${blueInput.value},${alphaInput.value})`;

    document.querySelector('body').style.backgroundColor = `rgba(${redInput.value},${greenInput.value},${blueInput.value},${alphaInput.value})`;


}