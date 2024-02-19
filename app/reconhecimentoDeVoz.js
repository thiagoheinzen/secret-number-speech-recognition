const elementoChute = document.getElementById('chute');
const elementoBotao = document.getElementById('jogar-novamente');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const spokenText = e.results[0][0].transcript;
    const numbers = spokenText.match(/\d+/g);

    if (numbers) {
        const number = numbers.join('');
        exibeChuteNaTela(number);
        verificaSeOChutePossuiUmValorValido(number);
    } else {
        exibeChuteNaTela('Nenhum número reconhecido');
    }

    exibeBotaoJogarNovamente();
}

function exibeBotaoJogarNovamente() {
    elementoBotao.style.display = 'block';
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());
