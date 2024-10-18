//pega o elemento no html e cria a função no click
document.querySelector('.botao-forca').addEventListener('click', function () {

    const nomeHeroi = document.getElementById('nome-heroi').value;
    var xp = gerarNumeroAleatorio(1000, 12000);
    var classificacao = classificarXP(xp);
    // Verifica se o campo está vazio
    if (nomeHeroi === '') {
        alert('Por favor, digite o nome do herói antes de ver a força dele.');
        return; // Impede a execução do código a seguir
    }
    // envia uma msg na tela com o nome do herói e sua xp e classificação
    alert(`${nomeHeroi} tem ${xp} XP e sua classificação é ${classificacao}.`)
    //recarrega a pagina após o alert
    location.reload();
});
function gerarNumeroAleatorio(min, max) {
    // Gera um número aleatório
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

// gera um número aleatório
const numero = gerarNumeroAleatorio(1000, 12000);
function classificarXP(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }

}

