
function buscarVocales(palabra) {
 
    let vocales = [];
   

    for (let i = 0; i < palabra.length; i++) {
   

     const resultado = /[aeiouáéíóú]/.match(palabra[i]);
   
   
     if (resultado !== null) {
   
     
      vocales.push(palabra[i]);
     }
    }

    return vocales;
   }
   

   let palabra = "helicóptero";
   let vocales = buscarVocales(palabra);
   
  
   alert("Las vocales de la palabra \"" + palabra + "\" son:");
   for (let letra of vocales) {
    alert("- " + letra);
   }