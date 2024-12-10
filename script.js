function choosePath(choice) {
    const story = document.getElementById("story");

    if (choice === "tranquilo") {
        story.innerHTML = `
            <p>Você segue pelo caminho tranquilo e encontra um lago cristalino. Um peixe dourado salta da água e diz: "Responda corretamente à minha pergunta e eu lhe concederei um desejo."</p>
            <p>O que você faz?</p>
        `;
        updateChoices([
            { text: "Aceitar o desafio do peixe", action: "desafio" },
            { text: "Ignorar o peixe e seguir em frente", action: "ignorar" }
        ]);
    } else if (choice === "nevoa") {
        story.innerHTML = `
            <p>Você entra na névoa e se sente perdido. De repente, uma figura encapuzada aparece e pergunta: "Você busca sabedoria ou poder?"</p>
            <p>O que você responde?</p>
        `;
        updateChoices([
            { text: "Buscar sabedoria", action: "sabedoria" },
            { text: "Buscar poder", action: "poder" }
        ]);
    } else if (choice === "desafio") {
        story.innerHTML = `
            <p>O peixe dourado pergunta: "O que cresce quanto mais você tira dela?" (Resposta: um buraco)</p>
            <p>Você acerta e o peixe concede um desejo. Sua aventura continua com novos poderes mágicos!</p>
        `;
        clearChoices();
    } else if (choice === "ignorar") {
        story.innerHTML = `
            <p>Você ignora o peixe e segue adiante. No entanto, sente que perdeu algo valioso. Sua aventura continua...</p>
        `;
        clearChoices();
    } else if (choice === "sabedoria") {
        story.innerHTML = `
            <p>A figura encapuzada entrega um livro antigo. Dentro, você encontra segredos sobre a floresta encantada. Sua jornada se torna mais clara!</p>
        `;
        clearChoices();
    } else if (choice === "poder") {
        story.innerHTML = `
            <p>A figura encapuzada entrega um amuleto mágico que aumenta sua força. Você sente uma energia poderosa crescendo dentro de você!</p>
        `;
        clearChoices();
    }
}

function updateChoices(choices) {
    const choicesSection = document.getElementById("choices");
    choicesSection.innerHTML = "";
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => choosePath(choice.action);
        choicesSection.appendChild(button);
    });
}

function clearChoices() {
    const choicesSection = document.getElementById("choices");
    choicesSection.innerHTML = "<p>Fim da aventura... ou será apenas o começo?</p>";
}
