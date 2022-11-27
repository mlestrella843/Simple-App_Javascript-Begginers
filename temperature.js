
"Use strict"


//funcion con --------JAVASCRIPT y FUNCIONA CORRECTAMENTE------------------------
/*
  function fah_celcius(){ 
    var celcius, fahr, numero1;
    const a = 32;
    const b = (5/9);

    fahr = document.getElementById('number').value;
    celcius = (fahr - a) * b;
    console.log("The temperature in grade Celsius is: ", celcius);
    document.getElementById("p-celsius").innerHTML = "The temperature in grade Celsius is: " + celcius;        
    return celcius;

};

    // Funcion que convierte de Celcius a Kelvin   
    //    Kelvin (K) = Celsius + 273.15,

      function celcius_kelvin(celcius2){
        var kelvin;
        const k = 273.15;
        var celcius2 = fah_celcius();

        kelvin = celcius2 + k;

        console.log("Este es el resultado en kelvin: ", kelvin);
        document.getElementById("p-kelvin").innerHTML = "The temperature in grade Kelvin is: " + kelvin;
   
        return kelvin;

}*/


//FUNCIONES CON JQUERY
//FUNCION DE FAHRENHEIT A CELSIUS.



$(document).ready(function(){
    $('#btn1').click(function(){
        var celcius, fahr;
        const a = 32;
        const b = (5/9);
    
        fahr = document.getElementById('number').value;
        celcius = (fahr - a) * b;
        console.log("The temperature in grade Celsius is: ", celcius);
        document.getElementById("p-celsius").innerHTML = "The temperature in grade Celsius is: " + celcius;        
       
        //to convert from Celsius to Kelvin
        $('#btn1').click(function(){
            var celcius3 = celcius;
            var kelvin;
            //var celcius;
            const k = 273.15;

            kelvin = celcius3 + k;

            console.log("Este es el resultado en kelvin: ", kelvin);
            document.getElementById("p-kelvin").innerHTML = "The temperature in grade Kelvin is: " + kelvin;
    
    }); 

       // return celcius;      
  });


});  







               
 