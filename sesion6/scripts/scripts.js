
var cantidadestudiantes = new Number();
var contador = new Number();
var nota = new Number();
var acumulador = new Number();
document.write("Algoritmo para calcular el porcentaje de estudiantes que pierden una asignatura.",'<BR/>');
document.write("Por favor, ingrese la cantidad de estudiantes a calificar:",'<BR/>');
cantidadestudiantes = Number(prompt());
for (contador=1;contador<=cantidadestudiantes;contador++) {
    document.write("Por favor ingrese la calificacion del estudiante numero ",contador," :",'<BR/>');
    document.write("Notas entre 0 y 5.",'<BR/>');
    nota = Number(prompt());
    if (nota<3) {
        // Almacena la cantidad de usuarios perdiendo
        acumulador = acumulador+1;
    }
}
document.write("La cantidad de estudiantes que REPROBARON la materia es: ",acumulador,'<BR/>');
document.write("Esto representa un porcentaje de: ",(acumulador*100)/cantidadestudiantes," %.",'<BR/>');


var cantidadestudiantes = new Number();
var contador = new Number();
var nota = new Number();
var acumulador = new Number();
document.write("Algoritmo para calcular el porcentaje de estudiantes que pierden una asignatura.",'<BR/>');
document.write("Por favor, ingrese la cantidad de estudiantes a calificar:",'<BR/>');
cantidadestudiantes = Number(prompt());
for (contador=1;contador<=cantidadestudiantes;contador++) {
    document.write("Por favor ingrese la calificacion del estudiante numero ",contador," :",'<BR/>');
    document.write("Notas entre 0 y 5.",'<BR/>');
    nota = Number(prompt());
    if (nota<3) {
        // Almacena la cantidad de usuarios perdiendo
        acumulador = acumulador+1;
    }
}
document.write("La cantidad de estudiantes que REPROBARON la materia es: ",acumulador,'<BR/>');
document.write("Esto representa un porcentaje de: ",(acumulador*100)/cantidadestudiantes," %.",'<BR/>');




var numerouno = new Number();
var numerodos = new Number();
numerouno = 0;
document.write("Algoritmo para generar las tablas de multiplicar hasta el numero 10.",'<BR/>');
for (numerouno=numerouno+1;numerouno<=10;numerouno++) {
    numerodos = 0;
    for (numerodos=numerodos+1;numerodos<=10;numerodos++) {
        document.write(numerouno," x ",numerodos," = ",numerouno*numerodos,".",'<BR/>');
    }
}






// Creado por Edgardo Mendez Lara para BICTIA Bootcamp JS
document.write("Calcular el promedio de edad en un grupo de varias personas.",'<br/>');
var cantidadpersonas = Number;
				var contador = Number;
				var edad = Number;
                var edades = Number;
                var cantidadpersonas = Number;
                var promedio = Number;
				cantidadpersonas = 0;
				
				alert("Por favor ingrese la cantidad de personas a promediar:");
				cantidadpersonas = Number(prompt());
				for (contador=1;contador<=cantidadpersonas;contador++) {
					alert("Ingrese la edad de la persona numero "+ contador+ ", porfavor:");
					edad = Number(prompt());
					// Acumula la suma de las edades
                    edades = edades+edad;
                    promedio = edades/cantidadpersonas;
				}
				alert("El promedio es: " + promedio );





document.write("Calcular si un numero es primo y/o par.",'<br/>');

                var i, verprimo, verprimo1;
				// Creado por Edgardo Mendez Lara para BICTIA Bootcamp JS
				var numentrada=Number ;
				var estadoprimo=Boolean;
				var estadopar= Number;
				alert("Por favor ingrese un numero para verificar si es par o impar y si es primo: ");
				numentrada = Number(prompt());
				if (numentrada==2) {
					alert("El numero ingresado es PAR y es PRIMO.");
					
				} else {
					estadopar = numentrada%2;
					if (estadopar==0) {
						alert("El numero ingresado es PAR.");
					} else {
						// Saca raiz cuadradada para abreviar el calculo
						verprimo = Math.sqrt(numentrada);
						// Sacamos la parte entera de la raiz encontrada
						verprimo1 = Math.trunc(verprimo);
						// ya sabemos que es impar e incrementamos para encontrar los primos
						for (i=3;i<=verprimo1;i+=2) {
							if (numentrada%i!=0) {
								estadoprimo = true;
							}
						}
						if (estadoprimo==true) {
							alert("El numero ingresado es PRIMO e IMPAR.");
							
						} else {
							alert("El numero ingresado NO es PRIMO y es IMPAR.");
							
						}
					}
                }
                
