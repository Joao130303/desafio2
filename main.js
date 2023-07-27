const ingressos = [];

function addRedBorder(id){
    element = document.querySelector(`#${id}`);
    element.style.border = "5px solid red";

}

//o toggle serve para quando o elemento esta sem a função ele coloca, e quando esta com a função ele tira, não precisa criar 2 functions

function highlighCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("cardHighligh");
}


//identifica qual o codigo e qual letra foi pressionada no teclado
function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        alert(`A tecla pressionada foi ${name} \r e o seu codigo foi ${code}`);
    }, false)
}

function addKeyboardEventListener(){
    //vai escutar um evento na pagina, executar a função 'keydown' e declara a variavel event mesma de cima^^
    document.addEventListener('keydown', (event) =>{
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");
        //aqui voce entendeu né para cada if de qual codigo retornou ele vai adicionar a função cardHighligh
        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle('cardHighligh')
            ingresso2.classList.remove('cardHighligh')
            ingresso3.classList.remove('cardHighligh')
            ingresso4.classList.remove('cardHighligh')
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove('cardHighligh')
            ingresso2.classList.toggle('cardHighligh')
            ingresso3.classList.remove('cardHighligh')
            ingresso4.classList.remove('cardHighligh')
        }

        if(code == 'Digit3'){
            ingresso1.classList.remove('cardHighligh')
            ingresso2.classList.remove('cardHighligh')
            ingresso3.classList.toggle('cardHighligh')
            ingresso4.classList.remove('cardHighligh')
        }

        if(code == 'Digit4'){
            ingresso1.classList.remove('cardHighligh')
            ingresso2.classList.remove('cardHighligh')
            ingresso3.classList.remove('cardHighligh')
            ingresso4.classList.toggle('cardHighligh')
        }
    }, false);
}


//aqui ele executa a função
addKeyboardEventListener();

selectCard=(selector)=>{

    //puxa o seletor que seria o id da img, o  classlist adiciona a class cardselected com o toggle ou remove ja que o toggle faz isso, e verifica se o id da imagem ja foi incluido
    //a class cardselected, caso tenha sido incluido ele da um pop na const ingressos(la em cima) e caso tenha sido removido com o toggle ele da um push na const ingressos
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}
//aqui ele so informa ao clicar no botão o que foi selecionado
// o => significa function, eu estipulo os parametros no () e utilizo o arrow(=>)
showSelectedCards=()=>{
    if(ingressos.length>0) alert("Ingressos selecionados: "+ingressos)
}