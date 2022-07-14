const produtos = [
    {
        nome: 'Clock',
        valor: 10.00,
        departamento: 'painting',
        imagem: 'clock.jpg'
    },
    {
        nome: 'Gamepad',
        valor: 20.00,
        departamento: 'painting',
        imagem: 'gamepad.jpg'
    },
    {
        nome: 'Personagem',
        valor: 30.00,
        departamento: 'painting',
        imagem: 'personagem.jpg'
    },
    {
        nome: 'Anime Woman',
        valor: 10.00,
        departamento: 'actions',
        imagem: 'animewoman.jpg'
    },
    {
        nome: 'Dragon Ball Personagem',
        valor: 20.00,
        departamento: 'actions',
        imagem: 'dragonballpersonagem.jpg'
    },
    {
        nome: 'Star Wars Personagem',
        valor: 30.00,
        departamento: 'actions',
        imagem: 'starwarspersonagem.jpg'
    }
]

let vitrineFigure = document.querySelector('.Figures')
let vitrinePaintings = document.querySelector('.Paintings')

function listarProdutos (listaProdutos,departamentoVitrine,vitrine){
    for (let i=0; i<listaProdutos.length;i++){
        let produto = listaProdutos[i]
        let departamentoProduto = produto.departamento
        if (departamentoProduto == departamentoVitrine){
            let cardProduto = criarcardProduto(produto)
            vitrine.appendChild(cardProduto)
        }
    }
}

function criarcardProduto (produto){
    let nome = produto.nome
    let valor = produto.valor
    let imagem = produto.imagem

    let tagLi = document.createElement('li')
    let tagdiv1 = document.createElement('div')
    let tagImagem = document.createElement('img')
    let tagdiv2 = document.createElement('div')
    let tagNome = document.createElement('h2')
    let tagValor = document.createElement('p')

    tagdiv1.classList.add('imagem')
    tagdiv2.classList.add('texto')

    if(produto.departamento == 'painting'){
        tagImagem.src = `assets/img/painting/${imagem}`
    }
    else{
        tagImagem.src = `assets/img/actions/${imagem}`
    }
    tagImagem.alt = nome
    tagNome.innerText = nome
    tagValor.innerText = `R$ ${valor}`.replace('.',',')

    tagLi.appendChild(tagdiv1)
    tagdiv1.appendChild(tagImagem)
    tagLi.appendChild(tagdiv2)
    tagdiv2.appendChild(tagNome)
    tagdiv2.appendChild(tagValor)

    return tagLi
}

listarProdutos (produtos,'painting',vitrinePaintings)
listarProdutos (produtos,'actions',vitrineFigure)
