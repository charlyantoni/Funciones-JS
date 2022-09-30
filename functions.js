function testing(){
    console.log("Hola mundo")
    alert("Hola mundo")
}

function ejercicio1(){
    var nombresito = document.getElementById("nombre").value; //Creamos una variable y almacenamos el valor del textBox con el id "nombre"
    alert("Hola " +nombresito); //Creamos una aleerta y concatenamos el nombre 
    document.getElementById("nombre").value=("Hola, "+nombresito+" !!!"); //Cambiamos el valor del textBox para gregar informacion, conservando el nombre al concatenar
}

function ejercicio2(){
    var num1 = parseInt(document.getElementById("num1mult").value); //Creamos una variable y almacenamos el valor del textBox con el id "num1Mult"
    var num2 = parseInt(document.getElementById("num2mult").value); //Creamos una variable y almacenamos el valor del textBox con el id "num2Mult"
    var result = num1*num2;
    document.getElementById("resMult").value=("El resultado es: "+result); //Cambiamos el valor del textBox para gregar informacion, conservando el valor al concatenar
}

function ejercicio3(){
    var num1 = parseInt(document.getElementById("num1sum").value); //Creamos una variable y almacenamos el valor del textBox con el id "num1Mult"
    var num2 = parseInt(document.getElementById("num2sum").value); //Creamos una variable y almacenamos el valor del textBox con el id "num2Mult"
    var result = num1+num2;
    document.getElementById("resSum").value=("El resultado es: "+result); //Cambiamos el valor del textBox para gregar informacion, conservando el valor al concatenar
}

function ejercicio4(){
    var num1 = parseInt(document.getElementById("num1eje4").value); //Creamos una variable y almacenamos el valor del textBox con el id "num1Mult"
    var num2 = parseInt(document.getElementById("num2eje4").value); //Creamos una variable y almacenamos el valor del textBox con el id "num2Mult"
    var multiresult = num1+num2;
    var exponresult = Math.pow(num1,num2);
    var sumresult = num1 + num2;
    document.getElementById("resEj4").value=("El resultado de la multiplicacion es: "+multiresult+ " \nEl resultado del exponencial es: " +exponresult+  "\nEl resultado de la suma es: " +sumresult); //Cambiamos el valor del textBox para gregar informacion, conservando el valor al concatenar

}

function ejercicio5(){
    let nombresito = document.getElementById("noom1").value; //Creamos una variable y almacenamos el valor del textBox con el id "nombre"
    let nombresito2 = document.getElementById("noom2").value; //Creamos una variable y almacenamos el valor del textBox con el id "nombre"
    document.getElementById("saludo").innerHTML='Hola, '+nombresito+' y '+nombresito2+' !!!'; //Cambiamos el valor del textBox para gregar informacion, conservando el nombre al concatenar
}

function ejercicio6(){
    let passFarenheit = (grado) => {return Farenheit =  (grado * 1.8)+32;};
    var temperatura = document.getElementById("temp").value; //Creamos una variable y almacenamos el valor del textBox con el id "nombre"
    var tempconv = passFarenheit(temperatura)
    document.getElementById("resTemp").innerHTML=(+temperatura +" Celcius, son " +tempconv+ " Faranheit"); //Cambiamos el valor del textBox para gregar informacion, conservando el nombre al concatenar
}

function ejercicio7(){
    var aleato = parseInt(document.getElementById("aleat").value); //Creamos una variable y almacenamos el valor del textBox con el id "nombre"
    let x = Math.round(Math.random()*aleato);
    document.getElementById("resAleat").value=("El numero aleatorio generado es: "+x); //Cambiamos el valor del textBox para gregar informacion, conservando el nombre al concatenar
}

function ejercicio8(nombrecolor){
    let color = document.getElementById("textooo");
    color.style.color = nombrecolor;
}

function ejercicio9(){
    var numerin1 = parseInt(document.getElementById("numra").value); //Creamos una variable y almacenamos el valor del textBox con el id "num1Mult"
    var resRaiz = Math.sqrt(numerin1);
    document.getElementById("resRaiz").value=("La raiz cuadrada de "+numerin1+ " es: " +resRaiz); //Cambiamos el valor del textBox para gregar informacion, conservando el valor al concatenar
}