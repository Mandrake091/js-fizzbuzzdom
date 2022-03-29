let maxNum = 100;
const app = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', 'row g-2')

//Ciclo i numeri da 1 a 100;
for (let i = 1; i <= maxNum; i++) {

//Creo 'div' per ogni elemento del ciclo
    const col = document.createElement('div');
    col.setAttribute('class', 'col-4 col-sm-4 col-md-2 col-lg-2');
    const square = document.createElement('div');

//Verifico che i numeri sia divisibili sia per 3 che per 5;
    if (i % 3 == 0 && i % 5 == 0) {
        console.log((i) + " : FizzBuzz");
        square.innerHTML += `<h1>FizzBuzz</h1>`
        square.setAttribute('class', 'square color-0');
        for (let c = 0; c < i.length; c++) {}
//Verifico che i numeri sia divisibili per 5;
    } else if (i % 5 === 0) {
        console.log((i) + " : Buzz");
        square.innerHTML += `<h1>Buzz</h1>`
        square.setAttribute('class', 'square color-1');
        for (let c = 0; c < i.length; c++) {}
//Verifico che i numeri sia divisibili per 3;
    } else if (i % 3 === 0) {
        console.log((i) + " : Fizz");
        square.innerHTML += `<h1>Fizz</h1>`
        square.setAttribute('class', 'square color-2');
        for (let c = 0; c < i.length; c++) {}
//I rimanenti numeri non divisibili per 3, 5 e 15;
    } else {
        square.innerHTML += `<h1>${[i]}</h1>`
        square.setAttribute('class', 'square color-3');
    }
//Appendo il quadrato alla col;
    col.append(square);
//Appendo la col alla row;    
    row.append(col);
}
//Appendo tutto ciò che ho fatto al div in HTML;
app.append(row);