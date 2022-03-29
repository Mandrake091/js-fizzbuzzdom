
let maxNum = 100;
const app = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', 'row g-2')
app.append(row);

for (let i = 1; i <= maxNum; i++) {

    const col = document.createElement('div');
    col.setAttribute('class', 'col-4 col-sm-4 col-md-2 col-lg-2');
    const square = document.createElement('div');

    if (i % 3 == 0 && i % 5 == 0) {
        console.log((i) + " : FizzBuzz");
        square.innerHTML += `<h1>FizzBuzz</h1>`
        square.setAttribute('class', 'square color-0');
        for (let c = 0; c < i.length; c++) {
        }

    } else if (i % 5 === 0) {
        console.log((i) + " : Buzz");
        square.innerHTML += `<h1>Buzz</h1>`
        square.setAttribute('class', 'square color-1');
        for (let c = 0; c < i.length; c++) {
        }

    } else if (i % 3 === 0) {
        console.log((i) + " : Fizz");
        square.innerHTML += `<h1>Fizz</h1>`
        square.setAttribute('class', 'square color-2');
        for (let c = 0; c < i.length; c++) {
        }

    } else {
        square.innerHTML += `<h1>${[i]}</h1>`
        square.setAttribute('class', 'square color-3');
    }

    col.append(square);
    row.append(col);
}

app.append(row);