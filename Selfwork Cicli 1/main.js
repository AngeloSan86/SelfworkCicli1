let num = 2;
let risultato;
let moltiplicatore = 0;

console.log( `Tabellina del numero ${num}:`);

for(i=0; i<=10; i++)
{
    risultato = num * moltiplicatore;
    console.log(`${num} x ${moltiplicatore} = ${risultato}`);
    moltiplicatore++;
}

