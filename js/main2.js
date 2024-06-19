document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores
    const sexojs = document.getElementById("sexojs").value;
    const edadjs = parseInt(document.getElementById("edadjs").value);
    const pesojs = parseFloat(document.getElementById("pesojs").value);
    const alturajs = parseFloat(document.getElementById("alturajs").value);
    
    if(isNaN(edadjs) || isNaN (pesojs) || isNaN(alturajs)){
      // Mostrar todos los resultados
      document.getElementById("resultados").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Por favor, digite todos los campos..!</strong></div>';
      return;
    }    

    

    // Calcular IMC utilizando la función proporcionada
    const imcResultado = calcularIMC(pesojs, alturajs);

    // Calcular peso ideal segun la formula de Lorentz
    const pesoIdealResultado = calcularPesoIdeal(sexojs, alturajs);
    const calcularDiferencia = pesojs - pesoIdealResultado;

    let mensaje;
    if (calcularDiferencia > 0) {
        mensaje = "perder";
    } else {
        mensaje = "ganar";
    }

    // Mostrar todos los resultados
    document.getElementById("resultados").innerHTML = "<div class='alert alert-primary text-black' role='alert'><p>Edad: " + edadjs + " años</p>" + "<p>Peso Actual: " + pesojs + " kg</p>" + "<p>Altura: " + alturajs + " cm</p>" + "<p>IMC: " + imcResultado + "</p>" + "<p>Peso Ideal: <span class='badge text-bg-success'>" + pesoIdealResultado + " kg </span></p>" + "<p>Deberias " + mensaje + ": <span class='badge text-bg-success'>" + calcularDiferencia + " kg</span</p>" + "</div>";
});

    function calcularIMC(pesojs, estaturajs) {
      if (!isNaN(pesojs) && !isNaN(estaturajs) && pesojs > 0 && estaturajs > 0) {
        let imcVar = pesojs / (estaturajs * estaturajs / 10000);
        let resultadoImc = "";

        if (imcVar < 18.5) {
          resultadoImc = "<span class='badge text-bg-warning'>Bajo Peso</span>";
        } else if (imcVar >= 18.5 && imcVar <= 24.9) {
          resultadoImc = "<span class='badge text-bg-success'>Peso Normal</span>";
        } else if (imcVar >= 25 && imcVar <= 29.9) {
          resultadoImc = "<span class='badge text-bg-warning'>Sobrepeso</span>";
        } else if (imcVar >= 30 && imcVar <= 34.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad I</span>";
        } else if (imcVar >= 35 && imcVar <= 39.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad II</span>";
        } else if (imcVar >= 40 && imcVar <= 49.9) {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad III</span>";
        } else {
          resultadoImc = "<span class='badge text-bg-danger'>Obesidad IV</span>";
        }


        return imcVar.toFixed(2) + " " + resultadoImc;
      }
    }

    function calcularPesoIdeal(sexojs, alturajs) {
      let pesoIdeal;
      if (sexojs === "hombre") {
        pesoIdeal = (alturajs - 100) - ((alturajs - 150) / 4);
      } else if (sexojs === "mujer") {
        pesoIdeal = (alturajs - 100) - ((alturajs - 150) / 2);
      }
      return pesoIdeal;
    }