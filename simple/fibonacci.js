const QUESTION = `Bienvenido, porfavor ingresa cuantos numeros de la serie de Fibonacci deseas conocer
Nota: Solo se aceptan numeros enteros positivos, de lo contrario la solucion no funcionara correctamente.`
/* ` */
/*
    Version simple de serie Fibonacci con limite de los numeros menores a 1600
*/
function fibonacciSecuence(){
    let a = 0;
    let b = 0;
    let actualNumber = 0;
    while (actualNumber < 1600){
        if(actualNumber < 2 && b < 1){
            console.log(actualNumber)
            b = a;
            a = actualNumber;
            actualNumber += 1;
        }else{
            actualNumber = a + b;
            b = a;
            a = actualNumber
            console.log(actualNumber);
        }
    }
    console.log("Terminado");
}

/*
    Version de serie Fibonacci utilizando listas y que trabaja con una cantidad elegida por el usuario
    para el numero de elementos que se desea imprimir.
    Nota: en caso de no proporcionarlo, evitamos el colapso al preedeterminar el parametro a 15
*/
function fibonacciSecuenceList(i = 15){
    let fibonacciList = [];
    let n = 0;
    let size = 0;
    while (fibonacciList.length < i){
        if (fibonacciList.length > 1){
            size = fibonacciList.length;
            fibonacciList.push(fibonacciList[(size - 1)] + fibonacciList[(size - 2)]);
        }else{
            fibonacciList.push(n);
            n += 1;
        }
    }
    return fibonacciList;
}

function printList(aList){
    aList.forEach(x => {
        console.log(x);
    });
}

function howManyTimes(){
    let nTimes = 0;
    process.stdout.write(QUESTION);
    process.stdin.on('data', function(data){
        nTimes = parseInt(data);
        console.log("Resultado---------------------");
        printList(fibonacciSecuenceList(nTimes));
        process.exit();
    });
}

//fibonacciSecuence();
howManyTimes();