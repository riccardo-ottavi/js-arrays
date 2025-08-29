const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

for(let i = 0; i < teachers.length; i++){
  if (teachers[i] === teachers[3]) {
    const fourthTeacher = teachers[3];
    console.log("esercizio 1 " + fourthTeacher);
  }
}


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
for(let i = 0; i < teachers.length; i++){
  if (teachers[i] === teachers[4]) {
    teachers[4] = "Patrick";
    console.log("esercizio 2 " + teachers);
  }
}

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
for (let i = 0 ; i < teachers.length; i++) {
  if (i === teachers.length-1) {
    const lastTeacher = teachers[i];
    teachers.length = teachers.length-1;
    console.log("esercizio 3 " +lastTeacher);
  }
}


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
console.log("esercizio 4 " + firstTeacher);
for (let i = 0 ; i< teachers.length ; i++) {
  teachers[i] = teachers[i+1];
  if (i === teachers.length-1) {
    teachers.length = teachers.length-1;
  }
}
console.log("esercizio 4 " + teachers);
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers[teachers.length] = "Vanessa";
console.log("Esercizio 5 " + teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
for (let i = teachers.length; i > 0 ; i--) {
    teachers[i] = teachers[i-1];
    
  }
teachers[0] = "Sarah";
console.log("Esercizio 6 " + teachers);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;