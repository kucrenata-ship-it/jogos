let gols = 0;
let defesas = 0;

function bater(lado){

    const goleiro = document.getElementById("goleiro");
    const bola = document.getElementById("bola");
    const resultado = document.getElementById("resultado");

    // Posições possíveis
    const posicoes = {
        esquerda:{
            goleiro:"110px",
            bola:"120px"
        },
        meio:{
            goleiro:"210px",
            bola:"225px"
        },
        direita:{
            goleiro:"320px",
            bola:"330px"
        }
    };

    // Escolha aleatória do goleiro
    let lados = ["esquerda","meio","direita"];
    let defesa = lados[Math.floor(Math.random()*3)];

    // Move o goleiro
    goleiro.style.left = posicoes[defesa].goleiro;

    // Move a bola
    bola.style.left = posicoes[lado].bola;
    bola.style.bottom = "170px";

    // Resultado
    setTimeout(function(){

        if(lado == defesa){

            resultado.innerHTML = "🧤 DEFENDEU!!";

            resultado.style.color = "#ff4d4d";

            defesas++;

            document.getElementById("defesas").innerHTML = defesas;

        }else{

            resultado.innerHTML = "⚽ GOOOOOOLLLLL!!";

            resultado.style.color = "#00ff66";

            gols++;

            document.getElementById("gols").innerHTML = gols;

        }

    },500);

    // Reinicia posição
    setTimeout(function(){

        goleiro.style.left = "210px";

        bola.style.left = "225px";

        bola.style.bottom = "15px";

    },1800);

}