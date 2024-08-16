//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

//const areaEntrada = document.querySelector(".apresentacao__conteudo__escrita");
//const areaSaida = document.querySelector(".area__saida");




function botaoCripto() {
    let fraseUsuario = document.getElementById("input-text").value;
    let textoCriptografado = criptografar(fraseUsuario);
    document.getElementById("output-text").value = textoCriptografado;
    document.getElementById("input-text").value = "";
}

function criptografar(textoCripto) {
    let matrizCripto = [['a', 'tr12'] , ['e', 'mg34k'] , ['i', 'nr56g'] , ['o', 'cbv78'] , ['u', 'wxz90']];
    textoCripto = textoCripto.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
            textoCripto = textoCripto.replaceAll(matrizCripto[i][0], matrizCripto[i][1]);
        }
    return textoCripto;
    }
    


function botaoDecripto() {
    let fraseUsuario = document.getElementById("input-text").value;
    let textoDescriptografado = descriptografar(fraseUsuario);
    document.getElementById("output-text").value = textoDescriptografado;
    document.getElementById("input-text").value = "";
}

function descriptografar(textoDecripto) {
    let matrizCripto = [['a', 'tr12'] , ['e', 'mg34k'] , ['i', 'nr56g'] , ['o', 'cbv78'] , ['u', 'wxz90']];
    textoDecripto = textoDecripto.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
        textoDecripto = textoDecripto.replaceAll(matrizCripto[i][1], matrizCripto[i][0]);
    }
    return textoDecripto;
}


function copiar() {
    let textoCopiado = document.getElementById("output-text").value;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado: " + textoCopiado);
    }).catch(function(error) {
        console.error("Erro ao copiar texto: ", error);
    });
}