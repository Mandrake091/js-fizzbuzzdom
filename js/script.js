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

for (let i = 1; i <= maxNum; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log((i) + " : FizzBuzz");

    } else if (i % 5 === 0) {
        console.log((i) + " : Buzz");

    } else if (i % 3 === 0) {
        console.log((i) + " : Fizz");

    } else {
        console.log((i));
    }




}