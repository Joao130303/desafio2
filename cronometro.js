const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const launch = "01 dec 2023"
//para fazer o contador precisamos saber a quantidade de segundos faltantes
function countDown(){       // com o parametro ele converte o mesmo em data
    const launchDate = new Date(launch)
    const hoje = new Date()
                    //date sem parametros pega o momento atual
    const totalSec = (launchDate - hoje)/1000;
                    //sempre retorna o valor em ms, por isso se divide em
                    // 1000 para obter os segundos
    const dias = Math.floor(totalSec/60/60/24);
    //fazer sempre com o resto (%)
                //o math.floor tira o mais numero inteiro da conta, tira os decimais, que seria o resto.
    const horas = Math.floor(totalSec/60/60)%24;
    const minutos = Math.floor(totalSec/60)%60;
    const segundos = Math.floor(totalSec)%60;

    dia.innerHTML = formatoTempoDia(dias)
    hora.innerHTML = formatoTempoHora(horas)
    minuto.innerHTML = formatoTempoMinuto(minutos)
    segundo.innerHTML = formatoTempoSegundos(segundos)
}

function formatoTempoDia(tempo){
    if(tempo>=10){
    return `${tempo}D`
    }else{
        return tempo<10?`0${tempo}D`:tempo
    }
}

function formatoTempoHora(tempo){
    if(tempo>=10){
    return `${tempo}H`
    }else{
        return tempo<10?`0${tempo}H`:tempo
    }
}

function formatoTempoMinuto(tempo){
    if(tempo>=10){
    return `${tempo}M`
    }else{
        return tempo<10?`0${tempo}M`:tempo
    }
}

function formatoTempoSegundos(tempo){
    if(tempo>=10){
    return `${tempo}S`
    }else{
        return tempo<10?`0${tempo}S`:tempo
    }
}

countDown();

setInterval(countDown, 1000)