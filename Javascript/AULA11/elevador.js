const elevator = document.querySelector('.elevator');
const botoes_andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 70; // altura de cada andar

let andar_atual = 0; 

botoes_andar.forEach(button => {
    button.addEventListener('click', () => {
        const andar_destino = parseInt(button.dataset.floor);
        moverElevador(andar_destino);
    });
});

function moverElevador(andar_destino) {
    const distancia = andar_destino * tamanho_piso; // calcula a posição correta
    elevator.style.bottom = `${distancia}px`; // move o elevador para o andar correspondente
    andar_atual = andar_destino; //Atualiza o andar atual
}