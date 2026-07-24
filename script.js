let personagemAtual = "girl";

// Escolhe o personagem
document.getElementById("personagem").addEventListener("change", function(){

    personagemAtual = this.value;

});

// Troca a roupa
function trocarRoupa(cor){

    let roupa;

    if(personagemAtual == "girl"){

        roupa = document.querySelector(".roupaGirl");

    }else{

        roupa = document.querySelector(".roupaBoy");

    }

    if(cor == "rosa"){

        roupa.style.background = "#ff69b4";

    }

    if(cor == "azul"){

        roupa.style.background = "#4da6ff";

    }

    if(cor == "verde"){

        roupa.style.background = "#32cd32";

    }

}

// Finaliza o look
function finalizarLook(){

    let nota = Math.floor(Math.random()*3)+8; // 8 a 10

    let mensagens = [

        "🌟 Arrasou! Esse look ficou incrível!",
        "💖 Que combinação linda!",
        "✨ Estilo nota 10!",
        "😎 Super fashion!",
        "👗 Esse look faria sucesso na passarela!",
        "🔥 Muito estiloso!",
        "🎉 Parabéns! Você criou um look maravilhoso!"

    ];

    let mensagem = mensagens[Math.floor(Math.random()*mensagens.length)];

    document.getElementById("resultado").innerHTML =

    `
    <h2>🏆 Resultado</h2>

    <br>

    <h1>${nota}/10 ⭐</h1>

    <br>

    <p>${mensagem}</p>

    `;

    // Pequena animação
    document.getElementById("resultado").animate(

        [

            {transform:"scale(0.8)"},
            {transform:"scale(1.08)"},
            {transform:"scale(1)"}

        ],

        {

            duration:600

        }

    );

}