/*function multiplicaPorSiMismo(valor, ejecuta) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function() {
    ejecuta(valor, valor * valor);
    //ejecuta(2,2*2)
    }, 1000)
    }
    multiplicaPorSiMismo(2, function(valor, resultado) {
    console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
    })
    console.log('Procesando')*/
var promise1 = new Promise(function (resolve, reject) {
    console.log(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(function () {
        ejecuta(valor, valor * valor);
        //ejecuta(2,2*2)
    }, 1000)
}
multiplicaPorSiMismo(2, function (valor, resultado) {
    console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
}) console.log('Procesando')
})



var promise = new Promise(function(resolve, reject){

	/*const FLAG = 5;
	if (FLAG == 10)
		resolve("Todo Bien!!");
	else
		reject(Error("Algo salio mal :C"));*/

	/*setTimeout(function(){
		resolve("Todo Bien!!");
	}, 3000);*/

	setTimeout(resolve, 4000, "Todo Bien!!!");

});


promise.then(function(response){
	console.log(response);
}, function(error){
	console.log(error);
})
   