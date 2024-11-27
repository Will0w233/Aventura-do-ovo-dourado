const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

// Estados da história
let gameState = {
    currentScene: "start"
};

// Histórias e caminhos
const scenes = {
    start: {
        text: "Você ouviu rumores sobre o lendário Ovo Dourado, escondido pela ave mística Aurífera. Dois caminhos estão à sua frente: uma floresta sombria e colinas ventosas.",
        choices: [
            { text: "Entrar na floresta", nextScene: "forest" },
            { text: "Explorar as colinas", nextScene: "hills" }
        ]
    },
    forest: {
        text: "A floresta é densa e úmida. Você encontra uma bifurcação: um trilho estreito com penas douradas e um caminho largo e seguro.",
        choices: [
            { text: "Seguir o trilho estreito", nextScene: "lake" },
            { text: "Pegar o caminho largo", nextScene: "lake" }
        ]
    },
    hills: {
        text: "As colinas são traiçoeiras com ventos fortes. Você avista um desfiladeiro e uma caverna nas rochas.",
        choices: [
            { text: "Descer para o desfiladeiro", nextScene: "lake" },
            { text: "Entrar na caverna", nextScene: "lake" }
        ]
    },
    lake: {
        text: "Você chega a um lago cristalino. Algo dourado brilha no fundo das águas.",
        choices: [
            { text: "Mergulhar no lago", nextScene: "final" },
            { text: "Contornar o lago", nextScene: "lost" }
        ]
    },
    final: {
        text: "Você encontra o Ovo Dourado em um baú no fundo do lago! Sua jornada foi bem-sucedida.",
        choices: []
    },
    lost: {
        text: "Você contorna o lago, mas se perde na floresta. Sua jornada termina aqui.",
        choices: []
    }
};

// Atualiza a cena
function updateScene(sceneName) {
    const scene = scenes[sceneName];
    storyElement.textContent = scene.text;
    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            updateScene(choice.nextScene);
        };
        choicesElement.appendChild(button);
    });

    gameState.currentScene = sceneName;
}

// Inicializa o jogo
updateScene(gameState.currentScene);
