let contantRef = document.querySelector('#contantRef');

let champions = [
    {
        titulo: 'Garen',
        descricao: `Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. 
        Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa
        família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada,
        Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha, em um verdadeiro furacão de aço virtuoso.`,
        url: './img/garen'
    },

]
for (let champions of champions) {
    contantRef.innerHTML += `
      <div class="item">
        <img src="${champions.url}">
        <h2>${champions.titulo}</h2>
        <p>${champions.descricao}</p>
      </div>
    `
}