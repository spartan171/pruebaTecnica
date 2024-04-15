const express = require('express');
const router = express.Router();

router.get("/",async(req,res,next)=>{
    let resultado = "";
    resultado= {
        "status":200,
        "Mensaje":"Ruta principal de categoria pruebas",
    }
    res.json(resultado);
});

router.get("/fibonacci", async(req,res,next)=>{
    let resultado = "";
    let data = await fibonacciSecuence();
    resultado= {
        "status":200,
        "Mensaje":"Serie Fibonacci simple hasta 15 valores",
        "data":data
    }
    res.json(resultado);
});

router.post("/fibonacciList", async(req,res,next)=>{
    const body = req.body;
    let resultado = "";
    let data = await fibonacciSecuenceList(body.numero_veces);
    resultado= {
        "status":200,
        "Mensaje":"Serie Fibonacci realizada con arrays",
        "data":data
    }
    res.json(resultado);
});

function fibonacciSecuence(){
    let a = 0;
    let b = 0;
    let actualNumber = 0;
    let resultList = []
    while (actualNumber < 1600){
        if(actualNumber < 2 && b < 1){
            resultList.push(actualNumber);
            b = a;
            a = actualNumber;
            actualNumber += 1;
        }else{
            actualNumber = a + b;
            b = a;
            a = actualNumber
            resultList.push(actualNumber);
        }
    }
    return resultList;
}

function fibonacciSecuenceList(i = 15){
    fibonacciList = [];
    n = 0;
    size = 0;
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


module.exports = router