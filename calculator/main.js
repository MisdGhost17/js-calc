const stroka = document.querySelector('span');
let znak = '';
let flag_znak = false;

function addtostr(event){
    if(stroka.innerText.length < 19){
        if(isNaN(event.target.textContent)){
            if(event.target.textContent == '.'){
                if(stroka.textContent.length != 0){
                    if(stroka.textContent.includes('.') == false){
                        stroka.innerText += event.target.textContent;
                    }
                }
            }
            else{
                if(flag_znak == false){
                    num1 = stroka.textContent;
                    znak = event.target.textContent;
                    stroka.innerText = '';
                    flag_znak = true;
                }
            }
        }
        else{
            stroka.innerText += event.target.textContent;
        }
    }
    else if(isNaN(event.target.textContent)){
        if(flag_znak == false){
            num1 = stroka.textContent;
            znak = event.target.textContent;
            stroka.innerText = '';
            flag_znak = true;
        }
    }
}

function addtostrwithbut(event){
    if(stroka.innerText.length < 19){
        if(Number(event.key)){
            stroka.innerText += event.key;
        }
        else if(event.key == '0'){
            stroka.innerText += event.key;
        }
    }
}

function deletestroka(event){
    stroka.innerText = '';
    num1 = "";
    num2 = "";
    znak = "";
}   

function result(event){
    num2 = stroka.textContent;
    if(znak == "+"){
        rez = Number(num1) + Number(num2);
    }
    else if(znak == "-"){
        rez = Number(num1) - Number(num2);
    }
    else if(znak == "×"){
        rez = Number(num1) * Number(num2);
    }
    else if(znak == "÷"){
        rez = Number(num1) / Number(num2);
    }
    stroka.innerText = String(rez);
    num1 = num2;
    num2 = "";
    flag_znak = false;
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if(button.classList == 'sbros'){
        button.addEventListener('click', deletestroka);
    }
    else if(button.classList == 'num'){
        button.addEventListener('click', addtostr);
    }
    else if(button.classList == 'znak'){
        button.addEventListener('click', addtostr);
    }
    else if(button.classList == 'rez'){
        button.addEventListener('click', result);
    }
})

document.addEventListener('keyup', addtostrwithbut);
