//recupero il .box dal dom
const box = document.querySelector('.box')  

//creo un ciclo per creare i numeri da 1 a 100

for (let i = 1; i < 101; i++) {
    //inserisco un div nel dom
    const divBody = document.createElement('div')

//se i multipli sono  di 3 e 5  avranno un output "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        divBody.append('fizzbuzz');

        //se i multipli sono di 5 avranno un output "buzz"
    }  else if (i % 5 === 0) {
        divBody.append('buzz');

    //se i multipli sono di 3 avranno un output "fizz"
    }  else if (i % 3 === 0 ) {
        divBody.append('fizz');
        //altrimenti
    }   else {divBody.append(i)     
    } 
    //stampo il div nel dom
    box.append(divBody)
}


 
  
 
  
 





