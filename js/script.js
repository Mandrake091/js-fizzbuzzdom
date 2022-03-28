/*
graph TD
START --> A((Ciclare numeri da 1 a 100))
A-->B{Numero divisibile per 3?}
B-->|si|C{Ed è anche divisibile per 5?}
B-->|no|D{Divisibile per 5?}
D-->|no|E[Output numero]
C-->|no|F["Output-"Fizz""]
C-->|si|G["Output-FizzBuzz"]
D-->|si|H["Output-Buzz"]
E & F & G & H-->I[Fine]
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