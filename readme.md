::: mermaid
graph TD;
    START --> A((Ciclare numeri da 1 a 100));
    A-->B{I numeri sono divisibili per 3 e per 5?};
    B-->|si|C[Stampa:FizzBuzz];
    B-->|no|D{Divisibile per 5?};
    D-->|no|E{Divisibile per 3?};
    D-->|si|H["Stampa:Buzz"];
    E-->|si|I[Stampa:Fizz];
    E-->|no|F[Stampa: Numeri rimanenti];
    F & I & H & C -->Z[Fine];
:::
