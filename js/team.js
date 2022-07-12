let person = document.querySelectorAll('.feedback-inner-person');
let personSwitchNext = document.querySelector('#switchNext');
let personSwitchPrev = document.querySelector('#switchPrev');
let personInfo = document.querySelector('#personInfo');

let currentPerson = 2;
let unitsSettings;

if (window.innerWidth > 1050) {
	unitsSettings = [
		['60px', '180px', '130px'],
		['80px', '340px', '120px'],
		['150px', '240px', '230px'],
		['35px', '340px', '420px'],
		['90px', '140px', '400px'],
		['50px', '100px', '270px']
	]
}
else {
	unitsSettings = [
		['30px', 'calc(35% - 15px)', '200px'],
		['50px', 'calc(22% - 25px)', '150px'],
		['140px', 'calc(50% - 70px)', '50px'],
		['50px', 'calc(78% - 25px)', '150px'],
		['30px', 'calc(65% - 15px)', '200px'],
		['20px', 'calc(50% - 10px)', '220px'],
	]
}
let personsBio = ['Brand Kyle, Frontend-developer', 'Margo Brin, Tester', 'Jenifer Bushe, Backend-developer', 'Jeffer Cruz, Ceo Ninja', 'John Smith, Product manager', 'Mike Jimson, Designer']

for (let i = 0; i < person.length; i++) {
	person[i].style.width = unitsSettings[i][0];
	person[i].style.height = unitsSettings[i][0];
	person[i].style.left = unitsSettings[i][1];
	person[i].style.top = unitsSettings[i][2];
	personInfo.innerHTML = personsBio[currentPerson];
}

personSwitchNext.onclick = () => {
	unitsSettings.unshift( unitsSettings.pop() );
	if (++currentPerson > 5)
		currentPerson = 0;
	personInfo.innerHTML = personsBio[currentPerson];
	for (let i = 0; i < person.length; i++) {
		person[i].style.width = unitsSettings[i][0];
		person[i].style.height = unitsSettings[i][0];
		person[i].style.left = unitsSettings[i][1];
		person[i].style.top = unitsSettings[i][2];
	}
}

personSwitchPrev.onclick = () => {
	unitsSettings.push( unitsSettings.shift() );
	if (--currentPerson < 0)
		currentPerson = 5;
	personInfo.innerHTML = personsBio[currentPerson];
	for (let i = 0; i < person.length; i++) {
		person[i].style.width = unitsSettings[i][0];
		person[i].style.height = unitsSettings[i][0];
		person[i].style.left = unitsSettings[i][1];
		person[i].style.top = unitsSettings[i][2];
	}
}