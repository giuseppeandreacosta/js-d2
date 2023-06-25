/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Esistono diversi tipi di DataType.
   Number = semplici numeri sia negativi che positivi.
   String = è un'insieme di caratteri , per capire che stiamo codificando una stringa usiamo le virgolette("STRINGA"),
   Boolean = è un'entità logica, i suoi valori sono true or false.
   Undefined = è un valore che non esiste(indefinito), ad esempio se alla variabile non attribuiamo nessun valore il suo contenuto non verrà definito.
   Null = è un valore vuoto, si attribuisce ad una variabile per indicare che non contenga nulla.
*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /*Un'oggetto è un contenitore di valori, ad esempio :
  let persona1 = {"nome": Giuseppe Andrea", "cognome": "Costa"}
  let persona2 = {"nome": Giovanni", "cognome": "Falcone"}
  */
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    const a = 12;
    b = 20;

    console.log(a+b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    const x = 12
    console.log(typeof x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    const name = "Giuseppe Andrea"
    console.log(typeof "name")

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
    
/* SCRIVI QUI LA TUA RISPOSTA */
    const y = 4
    console.log(x-y)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase())
