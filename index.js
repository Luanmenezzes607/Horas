function contar(){
    var horario = document.getElementById('hora')
    var tempo = new Date();

    let horaCompleta = maisZero(tempo.getHours()) + ':' + maisZero(tempo.getMinutes()) + ':' + maisZero(tempo.getSeconds());

    horario.textContent = horaCompleta
    }

    function maisZero(numero){
        if(numero < 10){
        numero = '0' + numero
        }
        return numero
    }

    function turno(){
        const turnos = document.getElementById('horario')
        var temp = new Date().getHours();
        if( temp > 12){
            turnos.textContent = "PM"
        }else{
            turnos.textContent = "AM"
        }
    }

    turno()
    contar()
    setInterval(contar, 1000)