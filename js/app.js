

//creo un ciclo per creare i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
//creo un elemento nel dom    
const elementBody = document.createElement('div')
elementBody.append(i)
elementBody.classList.add('container')
console.log(elementBody)


//se i multipli sono di 3 avranno un output "fizz"
    if (i % 3 === 0 ) {
        console.log('fizz');
        //se i multipli sono di 5 avranno un output "buzz"
    } else if (i % 5 === 0) {
        console.log('buzz');
    //se i multipli sono  di 3 e 5  avranno un output "buzzfizz"
    }  if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else console.log(i)
    
}







