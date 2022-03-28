/*
graph TD
START --> A((Ciclare numeri da 1 a 100))
A-->B{I numeri sono divisibili per 3 e per 5?}
B-->|si|C[Stampa:FizzBuzz]
B-->|no|D{Divisibile per 5?}
D-->|no|E{Divisibile per 3?}
D-->|si|H["Stampa:Buzz"]
E-->|si|I[Stampa:Fizz]
E-->|no|F[Stampa:Buzz]
F & I & H & C -->Z[Fine]
*/



let maxNum = 100;
const app = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', 'row g-3')
app.append(row);

for (let i = 1; i <= maxNum; i++) {

    const col = document.createElement('div');

    col.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-2');

    const square = document.createElement('div');
    square.setAttribute('class', 'square color-0');


    if (i % 3 == 0 && i % 5 == 0) {

        console.log((i) + " : FizzBuzz");
        
        square.innerHTML += `<h1>${[i]}</h1>`

        for (let c = 0; c < i.length; c++) {
        }



    } else if (i % 5 === 0) {
        console.log((i) + " : Buzz");
        square.innerHTML += `<h1>${[i]}</h1>`
        square.setAttribute('class', 'square color-1');

        for (let c = 0; c < i.length; c++) {
        }

    } else if (i % 3 === 0) {
        console.log((i) + " : Fizz");
        square.innerHTML += `<h1>${[i]}</h1>`
        square.setAttribute('class', 'square color-2');

        for (let c = 0; c < i.length; c++) {
        }

    } else {
        square.innerHTML += `<h1>${[i]}</h1>`
        square.setAttribute('class', 'square color-3');
        console.log((i));
    }

    col.append(square);
    row.append(col);
}

app.append(row);