function Jogo() {
    const form = document.querySelector('form');
    const respErros = document.querySelector('#outErros');
    const respChances = document.querySelector('#outChances');
    const respDica = document.querySelector('#outDica');
    const btNovo = document.querySelector('#btNovo');

    let erros = [];
    const sorteado = Math.floor(Math.random() * 20) + 1;
    const CHANCES = 6;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numero = Number(form.inNumero.value);

        if (numero === sorteado) {
            respDica.innerText = `🎉 Parabéns!! Você acertou! Número sorteado: ${sorteado}`;
            form.btSubmit.disabled = true;
            btNovo.classList.add("exibe");
        } else {
            if (erros.includes(numero)) {
                alert(`⚠️ Você já apostou o número ${numero}. Tente outro...`);
            } else {
                erros.push(numero);
                const numErros = erros.length;
                const numChances = CHANCES - numErros;

                respErros.innerText = `${numErros} erro(s): (${erros.join(" - ")})`;
                respChances.innerText = numChances;

                if (numChances === 0) {
                    alert('😢 Suas chances acabaram...');
                    form.btSubmit.disabled = true;
                    btNovo.classList.add('exibe');
                    respDica.innerText = `❌ GAME OVER! O número sorteado era: ${sorteado}`;
                } else {
                    const dica = numero < sorteado ? 'maior' : 'menor';
                    respDica.innerText = `🔎 Dica: Tente um número ${dica} que ${numero}`;
                }
            }
        }

        form.inNumero.value = '';
        form.inNumero.focus();
    });

    btNovo.addEventListener('click', () => {
        location.reload(); // Recarrega a página para iniciar um novo jogo
    });
}

Jogo();
