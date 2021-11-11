const generate = document.getElementById('submit');
const result = document.getElementById("result");

generate.addEventListener('click', () =>{
    const x = document.getElementById('len');
    const length = +x.value;
    const lower = document.getElementById('lowercase').checked;
    const upper = document.getElementById('uppercase').checked;
    const number = document.getElementById('number').checked;
    const symbols = document.getElementById('symbol').checked;
    const arr = [];
    if(lower)
        arr.push('lower');
    if(upper)
        arr.push('upper');
    if(number)
        arr.push('number');
    if(symbols)
        arr.push('symbol');
    let password = genPwd(length, arr);
    result.innerHTML = `<p>${password}</p>`;

});

function genPwd(length, arr){
    let password = '';
    let count = 0;
    while(count < length){
        let x = arr[Math.floor(Math.random() * arr.length)];
        switch(x){
            case 'lower':
                password += createLower();
                break;
            case 'upper':
                password += createUpper();
                break;
            case 'number':
                password += createNumber();
                break;
            case 'symbol':
                password += createSymbol();
                break;
        }
        count++;
    }
    return password;
}

function createLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function createUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+ 65 );
}

function createNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function createSymbol(){
    const symbols='!@#$~%^&*()+=[]{}<>?/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];
}
