window.onload = function () {
    const wrapperAll = document.getElementById('wrapper_all');
    if(localStorage.getItem('background') !== undefined){
        wrapperAll.style.background = localStorage.getItem('background');
    }

    const date = document.getElementById('date');
    const day = new Date();
    date.innerText = day.toDateString();
    let i = 0;
    let j = 0;
    const countTasks = document.getElementById('count-tasks');
    countTasks.innerText = `${i} tasks / ${j} completed`;

    function addItem() {
        const index = i;
        //
        const wrapper = addWrapper();
        const textDiv = addTextDiv();
        const div = addDiv();
        const textBox = addTextBox();
        const checkBox = addCheckBox();
        const bin = addBin();

        //
        wrapper.appendChild(textDiv);
        wrapper.appendChild(div);

        textDiv.appendChild(textBox);
        div.appendChild(checkBox);
        div.appendChild(bin);
        //
        checkBox.addEventListener('change',function (e){
            if(e.target.checked){
                textBox.style.textDecoration = "line-through";
                j++;
                countTasks.innerText = `${i} tasks / ${j} completed`;
            } else {
                textBox.style.textDecoration = "none";
                j--;
                countTasks.innerText = `${i} tasks / ${j} completed`;
            }
        })

        bin.addEventListener('click',function(){
            i--;
            wrapper.remove();
            localStorage.removeItem(`textBox${i}`);
            countTasks.innerText = `${i} tasks / ${j} completed`;
        })

        function changeButton(){
            checkBox.style.display = 'none';
            bin.style.display = 'block';
        }

        editButton.addEventListener('click',changeButton);

        doneButton.addEventListener('click',function(){
            addButton.style.display = 'block';
            doneButton.style.display = 'none';
            checkBox.style.display = 'block';
            bin.style.display = 'none';
        });
        
        function updateStorageData(){
            localStorage[`textBox${index}`] = textBox.value;
        }

        textBox.addEventListener('change',updateStorageData);

        i++;
        countTasks.innerText = `${i} tasks / ${j} completed`;
    }

    function addWrapper() {
        const newWrapper = document.createElement('div');
        newWrapper.id = `wrapper${i}`;
        newWrapper.className = "wrapper";
        document.getElementById('container').appendChild(newWrapper);

        return newWrapper;
    }

    function addTextDiv() {
        const newTextDiv = document.createElement('div');
        newTextDiv.id = `textDiv${i}`;
        newTextDiv.className = "textDiv";

        return newTextDiv;
    }

    function addTextBox() {
        const textBox = document.createElement('input');
        textBox.name = "textBox";
        textBox.className = "textBox";
        textBox.id = `textBox${i}`;
        textBox.type = "textBox";
        textBox.maxLength = 45;
        textBox.value = textBox.innerText;
        if(localStorage.getItem('color') !== undefined){
            textBox.style.color = localStorage.getItem('color');    
        }

        return textBox;
    }

    function addDiv() {
        const newDiv = document.createElement('div');
        newDiv.id = `box${i}`;
        newDiv.className = "box";

        return newDiv;

    }

    function addCheckBox() {
        const checkBox = document.createElement('input');
        checkBox.name = "checkBox";
        checkBox.className = "checkBox";
        checkBox.id = `checkBox${i}`;
        checkBox.value = "false";
        checkBox.type = "checkbox";
 
        return checkBox;
    }

    function addBin() {
        const bin = document.createElement('button');
        bin.className = "bin";
        bin.id = `bin${i}`;

        return bin;
    }

    //Button change
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addItem);

    const doneButton = document.getElementById('doneButton');

    function changeDisplay(){
        addButton.style.display = 'none';
        doneButton.style.display = 'block';
    }

    const editButton = document.getElementById('edit');
    editButton.addEventListener('click',changeDisplay);


    doneButton.addEventListener('click',function(){
        addButton.style.display = 'block';
        doneButton.style.display = 'none';
    });

};