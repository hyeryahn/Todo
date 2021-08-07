window.onload = function () {
    const date = document.getElementById('date');
    const day = new Date();
    date.innerText = day.toDateString();
    let i = 0;
    const countTasks = document.getElementById('count-tasks');
    countTasks.innerText = `${i} tasks`;

    function addWrapper() {
        const newWrapper = document.createElement('div');
        newWrapper.id = `wrapper${i}`;
        newWrapper.className = "wrapper";
        document.getElementById('container').appendChild(newWrapper);

        addTextDiv();
        addDiv();

        i++;
        countTasks.innerText = `${i} tasks`;
    }

    function addTextDiv() {
        const newTextDiv = document.createElement('div');
        newTextDiv.id = `textDiv${i}`;
        newTextDiv.className = "textDiv";
        document.getElementById(`wrapper${i}`).appendChild(newTextDiv);

        addTextBox();
    }

    function addTextBox() {
        const textBox = document.createElement('input');
        textBox.name = "textBox";
        textBox.className = "textBox";
        textBox.id = `textBox${i}`;
        textBox.type = "textBox";
        textBox.maxLength = 45;
        textBox.value = textBox.innerText;
        document.getElementById(`textDiv${i}`).appendChild(textBox);
    }

    function addDiv() {
        const newDiv = document.createElement('div');
        newDiv.id = `box${i}`;
        newDiv.className = "box";
        document.getElementById(`wrapper${i}`).appendChild(newDiv);

        addCheckBox();
        addBin();
    }

    function addCheckBox() {
        const checkBox = document.createElement('input');
        checkBox.name = "checkBox";
        checkBox.className = "checkBox";
        checkBox.id = `checkBox${i}`;
        checkBox.value = "false";
        checkBox.type = "checkbox";
        document.getElementById(`box${i}`).appendChild(checkBox);
    }

    function addBin() {
        const bin = document.createElement('button');
        bin.className = "bin";
        document.getElementById(`box${i}`).appendChild(bin);
    }

    const button = document.getElementById('addButton');
    button.addEventListener('click', addWrapper);

};


