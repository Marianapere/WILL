/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
                  resultado =[];
                  for (var elem of array) {
                        if (elem >= 0 )
                        {
                          resultado.push(elem)
                        }
                  }
                  return resultado;
}
console.log(soloNumeros([4854,'jose',5,689,'manu',8231,743,'fede']))



// No modifiques nada debajo de esta linea //


module.exports = soloNumeros