/*Utilize os 3 parâmetros para serem passados na tela: 
a. Valor; 
b. Índice; 
c. Array. */
let jogos = ['Minecraft','Crash','Paciência','Terraria','Sudoku']

jogos.forEach((jogo,lugar,arrayCompleto)=>{
    console.log(`Seu jogo é: ${jogo}`);
    console.log(`ID do jogo: ${lugar}`);
    console.log(`Os jogos são: ${arrayCompleto}`);
    console.log(`------------------------`);
})