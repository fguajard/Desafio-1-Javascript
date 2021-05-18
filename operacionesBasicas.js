// const number1 = +prompt("Ingrese un numero mayor que cero: ");
// const number2 = +prompt("Ingrese un numero mayor que cero y diferente del anterior: ");

// if( !number1 || !number2 || number1 <= 0 || number2 <= 0 || number1 == number2){
//     alert("Los datos ingresados no son validos")
// }


//Operaciones basicas
const basicOperations = {
  number1: 0,
  number2: 0,

  validation: function () {
    const n1 = this.number1;
    const n2 = this.number2;

    if (!n1 || !n2 || n1 <= 0 || n2 <= 0 || n1 == n2) {
      alert("Los datos ingresados no son validos");
      return false;
    } else {
      return true;
    }
  },
  sum: function () {
    const n1 = this.number1;
    const n2 = this.number2;
    return `La suma de los numeros es ${n1 + n2}`;
  },
  rest: function () {
    const n1 = this.number1;
    const n2 = this.number2;
    return `La resta de los numeros es ${n1 - n2}`;
  },
  multi: function () {
    const n1 = this.number1;
    const n2 = this.number2;
    return `La multiplicacion de los numeros es ${n1 * n2}`;
  },
  divition: function () {
    const n1 = this.number1;
    const n2 = this.number2;
    return `La division de los numeros es ${(n1 / n2).toFixed(2)}`;
  },
  module: function () {
    const n1 = this.number1;
    const n2 = this.number2;
    return `El modulo de los numeros es ${n1 % n2}`;
  },
};

//Funcion que llama al primer ejercicio
const ejercicio1 = () => {
  do {
    basicOperations.number1 = +prompt("Ingrese un numero mayor que cero: ");
    basicOperations.number2 = +prompt(
      "Ingrese un numero mayor que cero y diferente del anterior: "
    );
  } while (!basicOperations.validation());

  if (basicOperations.validation()) {    
    let respuesta = `
    <h2 class="text-center p-2">Operaciones Basicas</h2>    
    <p class="p-1">${basicOperations.sum()}</p>
    <p class="p-1">${basicOperations.rest()}</p>
    <p class="p-1">${basicOperations.multi()}</p>
    <p class="p-1">${basicOperations.divition()}</p>
    <p class="p-1">${basicOperations.module()}</p>
    `
    document.getElementById("print-respuestas").innerHTML = respuesta    
  }
};



//Celsius a grados Kelvin y Fahrenheit
const temperatura = {
  celcius: 0,
  validation: function () {
    const temp = this.celcius;
    if (!temp) {
      alert("temperatura ingresada no es valida");
      return false;
    } else {
      return true;
    }
  },
  toFahrenheit: function () {
    const temp = this.celcius;
    return `La temperatura en grados Fahrenheit es ${temp + 273.15}`;
  },
  toKelvin: function () {
    const temp = this.celcius;
    return `La temperatura en grados Kelvin es ${((temp * 9) / 5 + 32).toFixed(2)}`;   
  },
};


//Funcion que llama al segundo ejercicio
const ejercicio2 = () => {
  do {
    temperatura.celcius = +prompt("Ingrese temperatura: ");
  } while (!temperatura.validation());

  if (temperatura.validation()) {
    let respuesta = `
    <h2 class="text-center p-2">Conversion de Temperatura</h2>    
    <p class="p-1">${temperatura.toFahrenheit()}</p>
    <p class="p-1">${temperatura.toKelvin()}</p>   
    `
    document.getElementById("print-respuestas").innerHTML = respuesta    
  }
};



// Tranformacion de dias a años/semanas/dias
const tiempo = {
  time: 0,
  validation: function () {
    const localTime = this.time;
    if (localTime < 0 || !localTime) {
      alert("Cantidad de tiempo incorrecta");
      return false;
    } 
    else {
      return true;
    }
  },
  transformTime: function () {
    let localTime = this.time;
    const years = Math.floor(localTime / 365);
    const weeks = Math.floor((localTime % 365) / 7);
    const days = (localTime % 365) % 7;
    const result = { años: years, semanas: weeks, dias: days };
    return result;
  },
};

//Funcion que llama al tercer ejercicio
const ejercicio3 = () => {
    do {
      tiempo.time = +prompt("Ingrese la cantidad de dias: ");
    } while (!tiempo.validation());
  
    if (tiempo.validation()) {
      let respuesta = `
      <h2 class="text-center p-2">Transformacio de Tiempo</h2>    
      <p class="p-1">Los dias ingresados equivalen a: </p>
      <ul>
      <li>${tiempo.transformTime().años} años</li>
      <li>${tiempo.transformTime().semanas} semanas</li>
      <li>${tiempo.transformTime().dias} dias</li>      
      </ul>
         
      `
      document.getElementById("print-respuestas").innerHTML = respuesta
      
    }
  };

// Calculo de la suma y el promedio para 5 numeros
  const fiveNumbers = {
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,

    validation: function () {
      const n1 = this.number1;
      const n2 = this.number2;
      const n3 = this.number3;
      const n4 = this.number4;
      const n5 = this.number5;  
  
      if (!n1 || !n2 || !n3 || !n4 || !n5) {
        alert("Uno o mas de los numeros ingresados no es/son valido(s)");
        return false;
      } else {
        return true;
      }
    },
    suma: function () {
        const n1 = this.number1;
        const n2 = this.number2;
        const n3 = this.number3;
        const n4 = this.number4;
        const n5 = this.number5;
        return `La suma de los 5 numeros es ${n1+n2+n3+n4+n5}` ; 
    },

    promedio: function () {
        const n1 = this.number1;
        const n2 = this.number2;
        const n3 = this.number3;
        const n4 = this.number4;
        const n5 = this.number5;
        return `El promedio de los 5 numeros es ${((n1+n2+n3+n4+n5)/5).toFixed(2)}` ; 
    },
  }

//Funcion que llama al cuarto ejercicio
  const ejercicio4 = () => {
    do {
      fiveNumbers.number1 = +prompt("Ingrese numero 1: ");
      fiveNumbers.number2 = +prompt("Ingrese numero 2: ");
      fiveNumbers.number3 = +prompt("Ingrese numero 3: ");
      fiveNumbers.number4 = +prompt("Ingrese numero 4: ");
      fiveNumbers.number5 = +prompt("Ingrese numero 5: ");
    } while (!fiveNumbers.validation());
  
    if (fiveNumbers.validation()) {
      let respuesta = `
      <h2 class="text-center p-2">Cinco Numeros</h2>    
      <p class="p-1">${fiveNumbers.suma()}</p>
      <p class="p-1">${fiveNumbers.promedio()}</p>   
      `
      document.getElementById("print-respuestas").innerHTML = respuesta      
    }
  };


// crear un switch con objetos literales

//sabemos que las propiedades de un objeto se puede llamar de la forma objeto.primerValor o tambien objeto["primerValor"] para crear el switch haremos
//uso de la segunda nomenclatura, en esta pasaremos el caso que queremos y que en base a eso caso nos devuelva la propiedad asociada a ese "indice"

  const switchCool = (option) => {
    
    // validation = function () {
    //     const opcion = this.option;
    //     if (!opcion || opcion > 4) {
    //       alert("Ingrese opcion valida");
    //       return false;
    //     } 
    //     else {
    //       return true;
    //     }
    // }
    const listActions = {
      1: () => {
        return ejercicio1();
      },
      2: () => {
        return ejercicio2();
      },
      3: () => {
          return ejercicio3();
        },
      4: () => {
          return ejercicio4();
        },
      default: () => {
        alert("opcion invalida");
        return false;
      },
    };
    return (listActions[option] || listActions["default"])();
  };

  //funcion auxiliar para verificar que la opcion ingresada es valida
  const validationAux = (option) =>{
    if (!option || option>4){
      alert("opcion ingresada es invalida")
      return false    
    }
    else{return true}

  }  
  
  //implementacion de switchCool
  const usoSwitch = (option) => {
    
    
    if(validationAux){
    switchCool(+option);
     }
  };
  
  //usoSwitch();

  //recibe respuesta desde imput

  const desafio1 = function(){      
      let radioOptions = document.getElementsByClassName("form-check-input");            
      Array.from(radioOptions).forEach((imput)=>{
        if(imput.checked)
          usoSwitch(+imput.value)
      })    
  }