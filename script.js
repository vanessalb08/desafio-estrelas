//Declarando as constantes necessárias
const image1 = document.querySelector('#imagem1');
const image2 = document.querySelector('#imagem2');
const image3 = document.querySelector('#imagem3');
const image4 = document.querySelector('#imagem4');
const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');

//Gerando números aleatórios
aleatorio1 = () => {
    return Math.floor(Math.random() * 671);
}
aleatorio2 = () => {
    return Math.floor(Math.random() * 671);
}
aleatorio3 = () => {
    return Math.floor(Math.random() * 671);
}
aleatorio4 = () => {
    return Math.floor(Math.random() * 671);
}

//Buscando informações na API
primeiraImagem = () => {
    let numero1 = aleatorio1();

    return fetch(`https://rickandmortyapi.com/api/character/${numero1}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        nome1.innerHTML = data.name;
    });
}

segundaImagem = () => {
    let numero2 = aleatorio2();

    return fetch(`https://rickandmortyapi.com/api/character/${numero2}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        nome2.innerHTML = data.name;
    });
}

terceiraImagem = () => {
    let numero3 = aleatorio3();

    return fetch(`https://rickandmortyapi.com/api/character/${numero3}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        nome3.innerHTML = data.name;
    });
}

quartaImagem = () => {
    let numero4 = aleatorio4();

    return fetch(`https://rickandmortyapi.com/api/character/${numero4}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        nome4.innerHTML = data.name;
    });
}

//Chamando funções e executando
atualizarPagina = () => {
    primeiraImagem();
    segundaImagem();
    terceiraImagem();
    quartaImagem();
}

window.onload = atualizarPagina;