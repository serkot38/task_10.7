const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
let minValue = parseInt(prompt('Минимальное значение числа для игры','0'))||0;
if (minValue < -999) minValue = -999;
else if(minValue > 999) minValue = 999;
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'))||100;
if (maxValue > 999) maxValue = 999;
else if(maxValue < -999) maxValue = -999;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

orderNumberField.innerText = orderNumber;
answerField.innerText = answerText();

function text20(number){
    let oneNine = {
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять"
    };
    let tenNineteen = {
        10: "десять",
        11: "одиннадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать"
    };
    let dozens = {
        2: "двадцать",
        3: "тридцать",
        4: "сорок",
        5: "пятьдесят",
        6: "шестьдесят",
        7: "семьдесят",
        8: "восемьдесят",
        9: "девяносто"
    };
    let hundreds = {
        1: "сто",
        2: "двести",
        3: "триста",
        4: "четыреста",
        5: "пятьсот",
        6: "шестьсот",
        7: "семьсот",
        8: "восемьсот",
        9: "девятьсот"
    };
    let text = "";
    let num = parseInt(number);
        key = null;
    if (num == 0) {
        text = "0";
        return text;
    }
    if (num<0){
        text += "минус ";
        num = Math.abs(num);
    }
    if (num>=100){
       key = Math.floor(num/100);
       num = num - key*100;
       text += hundreds[key] + " ";
    }
    if (num>=10 && num<20){
        text += tenNineteen[num] + " ";
    }
    else if (num<10 && num>0){
        text += oneNine[num] + " ";
    }
    else if (num>=20){
        key = Math.floor(num/10);
        num = num - key*10;
        text += dozens[key] + " ";
        if (num>0){
            text += oneNine[num];
        }
    }
    text.trim;
    return text.length<20 ? text : number;
    
}

function answerText(){
    const phraseRandom = Math.round(Math.random()*2);
    switch (phraseRandom){
        case 0:
            return `Вы загадали число ${text20(answerNumber)}?`;
        case 1:
            return `Может это число ${text20(answerNumber)}?`;
        case 2:
            return `Думаю... Это число ${text20(answerNumber)}?`;
    }
}

function winText(){
    const phraseRandom = Math.round(Math.random()*2);
    switch (phraseRandom){
        case 0:
            return `Я всегда угадываю`;
        case 1:
            return `Я угадал всего c ${orderNumber} раза!`;
        case 2:
            return `И я опять угадал!`;
    }
}

document.querySelector('#btnRetry').addEventListener('click', function () {
    orderNumber = 1;
	answerNumber = 0;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'))||0;
    if (minValue < -999) minValue = -999;
    else if(minValue > 999) minValue = 999;
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'))||100;
    if (maxValue > 999) maxValue = 999;
    else if(maxValue < -999) maxValue = -999;
	alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
	answerNumber  = Math.floor((minValue + maxValue) / 2);
	orderNumberField.innerText = orderNumber;
    answerField.innerText = answerText();
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (minValue === maxValue){
        answerField.innerText = answerText();
	} else {
        maxValue = answerNumber  - 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = answerText();
	}
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (minValue === maxValue){
        answerField.innerText = answerText();
    } else {
        minValue = answerNumber  + 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = answerText();
		}
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    const phraseRandom = Math.round( Math.random()*2);
	if (phraseRandom === 0)
		answerField.innerText = winText();
		else answerField.innerText = `Неверно!`;
		gameRun = false;
})