function getValueProduct(value) {
  let valorProducto;
  switch (value) {
    case '1':
      valorProducto = 1500000;
      break;
    case '2':
      valorProducto = 4500000;
      break;
    default:
      alert('Este producto no existe');
      break;
  }

  return valorProducto;
}

function calculateValue(valorProducto, pagoInicial, cuotas) {
  if (pagoInicial > valorProducto) {
    return alert('El pago inicial es mayor que el producto, ajuste el valor');
  } else if (pagoInicial === valorProducto) {
    return alert('El pago es igual que el valor del producto, será pagado en una cuota');
  }

  if (cuotas <= 0) {
    cuotas = 1;
  }

  const precioPorCuota = (valorProducto - pagoInicial) / cuotas;
  alert('El pago será en ' + cuotas + ' cuota/s con valor de ' + precioPorCuota );
}


function calculate(input) {
  const valorProducto = getValueProduct(input);
  if (!valorProducto) {
    return;
  }

  alert('El valor del producto seleccionado es ' + valorProducto);
  const pagoInicial = prompt('Ingrese cuanto será su pago inicial', 0);
  const cuotas = prompt('Ingrese el número de cuotas en las que desea pagar el producto', 1);
  calculateValue(valorProducto, pagoInicial, cuotas)
}

function showPrompt() {
  const message = 'Articulos en venta.\n 1. Televisor \n 2. Computador \n 3. Finalizar';
  let input = prompt(message, );
  while (input != 3) {

    if (!input) {
      input = 3;
    } else {
      calculate(input);
      input = prompt(message, 3);
    }

  };

}

showPrompt();