window.onload = function () {
    const hueBackTop = document.getElementById('hue-backTop');
    const saturationBackTop = document.getElementById('saturation-backTop');
    const lightnessBackTop = document.getElementById('lightness-backTop');
    const hueValueBackTop = document.getElementById('hueValue-backTop');
    const satValueBackTop = document.getElementById('satValue-backTop');
    const lightValueBackTop = document.getElementById('lightValue-backTop');

    const hueBackBttm = document.getElementById('hue-backBttm');
    const saturationBackBttm = document.getElementById('saturation-backBttm');
    const lightnessBackBttm = document.getElementById('lightness-backBttm');
    const hueValueBackBttm = document.getElementById('hueValue-backBttm');
    const satValueBackBttm = document.getElementById('satValue-backBttm');
    const lightValueBackBttm = document.getElementById('lightValue-backBttm');

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
        preview.style.background = `linear-gradient(hsl(${hueValueBackTop.innerText},${satValueBackTop.innerText}%,${lightValueBackTop.innerText}%),
        hsl(${hueValueBackBttm.innerText},${satValueBackBttm.innerText}%,${lightValueBackBttm.innerText}%))`;
    }

    function updateValueFactory(label, input) {
        return () => updateInnerText(label, input);
    }

    hueBackTop.addEventListener('change', updateValueFactory(hueValueBackTop, hueBackTop));
    saturationBackTop.addEventListener('change', updateValueFactory(satValueBackTop, saturationBackTop));
    lightnessBackTop.addEventListener('change', updateValueFactory(lightValueBackTop, lightnessBackTop));

    hueBackBttm.addEventListener('change', updateValueFactory(hueValueBackBttm, hueBackBttm));
    saturationBackBttm.addEventListener('change', updateValueFactory(satValueBackBttm, saturationBackBttm));
    lightnessBackBttm.addEventListener('change', updateValueFactory(lightValueBackBttm, lightnessBackBttm));

    hueText.addEventListener('change', updateValueFactory(hueValueText, hueText));
    saturationText.addEventListener('change', updateValueFactory(satValueText, saturationText));
    lightnessText.addEventListener('change', updateValueFactory(lightValueText, lightnessText));

    const sampleText = document.createElement('span');
    sampleText.id = 'sample';

    preview.appendChild(sampleText);

};