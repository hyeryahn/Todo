window.onload = function () {
    const hueBack = document.getElementById('hue-back');
    const saturationBack = document.getElementById('saturation-back');
    const lightnessBack = document.getElementById('lightness-back');
    const hueValueBack = document.getElementById('hueValue-back');
    const satValueBack = document.getElementById('satValue-back');
    const lightValueBack = document.getElementById('lightValue-back');

    const hueText = document.getElementById('hue-text');
    const saturationText = document.getElementById('saturation-text');
    const lightnessText = document.getElementById('lightness-text');
    const hueValueText = document.getElementById('hueValue-text');
    const satValueText = document.getElementById('satValue-text');
    const lightValueText = document.getElementById('lightValue-text');

    const preview = document.getElementById('preview');

    function updateInnerText(label, input) {
        label.innerText = input.value;
        sampleText.innerText = "Hello World!";
        sampleText.style.color = `hsl(${hueValueText.innerText},${satValueText.innerText}%,${lightValueText.innerText}%)`;
        preview.style.backgroundColor = `hsl(${hueValueBack.innerText},${satValueBack.innerText}%,${lightValueBack.innerText}%)`;
    }

    function updateValueFactory(label, input) {
        return () => updateInnerText(label, input);
    }

    hueBack.addEventListener('change', updateValueFactory(hueValueBack, hueBack));
    saturationBack.addEventListener('change', updateValueFactory(satValueBack, saturationBack));
    lightnessBack.addEventListener('change', updateValueFactory(lightValueBack, lightnessBack));

    hueText.addEventListener('change', updateValueFactory(hueValueText, hueText));
    saturationText.addEventListener('change', updateValueFactory(satValueText, saturationText));
    lightnessText.addEventListener('change', updateValueFactory(lightValueText, lightnessText));

    const sampleText = document.createElement('span');
    sampleText.id = 'sample';

    preview.appendChild(sampleText);


};