function calcularEdad() {
    var edad = parseInt(document.getElementById("edad").value);

    if (!isNaN(edad)) {
        if (edad <= 12) {
            document.getElementById("resultadoedad").innerHTML = '<div class="alert alert-secondary" role="alert"><strong> Eres un niño </strong> <i class="bi bi-person-fill-down"></i></div>';
        } else if (edad > 12 && edad <= 40) {
            document.getElementById("resultadoedad").innerHTML = '<div class="alert alert-success" role="alert"><strong> Eres un joven </strong><i class="bi bi-person-badge-fill"></i></div>';
        } else if (edad > 40 && edad <= 60) {
            document.getElementById("resultadoedad").innerHTML = '<div class="alert alert-warning" role="alert"><strong> Eres un adulto </strong> <i class="bi bi-person-fill-up"></i></div>';
        } else {
            document.getElementById("resultadoedad").innerHTML = '<div class="alert alert-danger" role="alert"><strong> Eres un adulto </strong> mayor <i class="bi bi-person-up"></i></div>';
        }
        } else {
        document.getElementById("resultadoedad").innerHTML = '<div class="alert alert-danger" role="alert"><strong>ingrese por favor su edad..!<strong></div>';
    }
}
function peso_estatura() {
    var sexo = document.getElementById("sexo").value;
    var edad = parseInt(document.getElementById("edadPesoEstatura").value);

    if (isNaN(edad)) {
        document.getElementById("resultadoPesoEstatura").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Por favor, ingrese un valor válido para la edad..!</strong></div>';
        return;
    }

    var genero, pesoEstimado, estaturaEstimada;
    if (sexo === "H") {
        if (11 <= edad && edad <= 14) {
            genero = "un hombre";
            pesoEstimado = 45;
            estaturaEstimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "un hombre";
            pesoEstimado = 66;
            estaturaEstimada = 176;
        } else if (19 <= edad && edad <= 24) {
            genero = "un hombre";
            pesoEstimado = 72;
            estaturaEstimada = 177;
        } else if (25 <= edad && edad <= 50) {
            genero = "un hombre";
            pesoEstimado = 79;
            estaturaEstimada = 176;
        } else {
            genero = "un hombre";
            pesoEstimado = 77;
            estaturaEstimada = 173;
        }
    } else {
        if (11 <= edad && edad <= 14) {
            genero = "una mujer";
            pesoEstimado = 46;
            estaturaEstimada = 157;
        } else if (15 <= edad && edad <= 18) {
            genero = "una mujer";
            pesoEstimado = 55;
            estaturaEstimada = 163;
        } else if (19 <= edad && edad <= 24) {
            genero = "una mujer";
            pesoEstimado = 58;
            estaturaEstimada = 164;
        } else if (25 <= edad && edad <= 50) {
            genero = "una mujer";
            pesoEstimado = 63;
            estaturaEstimada = 163;
        } else {
            genero = "una mujer";
            pesoEstimado = 65;
            estaturaEstimada = 160;
        }
    }
    document.getElementById("resultadoPesoEstatura").innerHTML = '<div class="alert alert-success" role="alert"> Para ' + genero + ' de ' + edad + ' años, el peso estimado es de ' + pesoEstimado + ' kg y la estatura estimada es de ' + estaturaEstimada + ' cm. </div>';
}
function calcular_IMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("estatura").value);

    if (!isNaN(peso) && !isNaN(estatura) && peso > 0 && estatura > 0) {
        var imc = peso / (estatura * estatura);

        if (imc < 18.5) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-secondary" role="alert"><strong>Usted tiene bajo peso <i class="bi bi-arrow-bar-down"></i> </strong> </div> ';
        } else if (imc >= 18.5 && imc <= 24.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-success" role="alert"><strong>Usted tiene un peso normal <i class="bi bi-balloon-heart"></i></strong></div>';
        } else if (imc >= 25 && imc <= 29.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-warning" role="alert"><strong>Usted tiene sobrepeso <i class="bi bi-emoji-frown-fill"></i></strong></div>';
        } else if (imc >= 30 && imc <= 34.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Usted tiene obesidad tipo <i class="bi bi-emoji-grimace-fill"></i></strong></div>';
        } else if (imc >= 35 && imc <= 39.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Usted tiene obesidad tipo II <i class="bi bi-emoji-tear-fill"></i></strong></div>';
        } else if (imc >= 40 && imc <= 49.9) {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Usted tiene obesidad tipo III <i class="bi bi-emoji-tear-fill"></i></strong></div>';
        } else {
            document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Usted tiene obesidad tipo IV <i class="bi bi-emoji-tear-fill"></i></strong></div>';
        }
    } else {
        document.getElementById("resultadoIMC").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Por favor, ingrese tu peso y tu estatura..!</strong></div>';
    }
}

function calcularArterial() {
    var presionSistolica = parseInt(document.getElementById("presionSistolica").value);

    if (!isNaN(presionSistolica)) {
        if (presionSistolica < 90) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-info" role="alert"><strong>Su presion arterial es baja.</strong> <i class="bi bi-arrow-bar-down"></i></div>';
        } else if (presionSistolica < 120) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-success" role="alert"><strong>Su presion arterial es normal.</strong> <i class="bi bi-balloon-heart"></i></div>';
        } else if (presionSistolica >= 120 && presionSistolica <= 139) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-warning" role="alert"><strong>Su presion arterial esta en prehipertension.</strong> <i class="bi bi-emoji-frown-fill"></i></div>';
        } else if (presionSistolica >= 140 && presionSistolica <= 159) {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Su presion arterial es Alta: hipertension Fase 1</strong> <i class="bi bi-emoji-grimace-fill"></i></div>';
        } else {
            document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><strong>Su presion arterial es Alta: hipertension Fase 2</strong> <i class="bi bi-emoji-tear-fill"></i></div>';
        }
    } else {
        document.getElementById("resultadoPresion").innerHTML = '<div class="alert alert-danger" role="alert"><strong><strong>Por favor, ingrese un valor valido para la presion arterial..!</strong></div>';
    }
}