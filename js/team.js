let person = document.querySelectorAll('.feedback-inner-row-person');
let personSwitchNext = document.querySelector('#switchNext');
let personSwitchPrev = document.querySelector('#switchPrev');
let personInfo = document.querySelector('#personInfo');

let firstPerson = 0;
let replacedPerson;

let unitsInfo = [
    ["url(images/photo1.jpg)", "Brand Kyle, Frontend-developer"],
    ["url(images/photo2.jpg)", "Margo Brin, Tester"],
    ["url(images/photo3.jpg)", "Jenifer Bushe, Backend-developer"],
    ["url(images/photo4.jpg)", "Jeffer cruz, Ceo Ninja"],
    ["url(images/photo5.jpg)", "Mike Jimson, Designer"],
    ["url(images/photo6.jpg)", "John Smith, Product manager"],
]

personSwitchNext.onclick = function() {
    replacedPerson = unitsInfo[5];
    unitsInfo.pop();
    unitsInfo.unshift(replacedPerson);
    for (let i = 0; i < person.length; i++) {
        person[i].style.backgroundImage = "";
        person[i].style.backgroundImage = unitsInfo[i][0];
        if (i == 4) {
            personInfo.innerHTML = unitsInfo[3][1]
        }
    }
}

personSwitchPrev.onclick = function() {
    replacedPerson = unitsInfo[0];
    unitsInfo.shift();
    unitsInfo.push(replacedPerson);
    for (let i = 0; i < person.length; i++) {
        person[i].style.backgroundImage = "";
        person[i].style.backgroundImage = unitsInfo[i][0];
        if (i == 4) {
            personInfo.innerHTML = unitsInfo[3][1]
        }
    }
}