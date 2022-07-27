const base__path = `${window.location.origin}/image/`

const techList = [
    {
        id: 1,
        name: "HTML",
        img__path: `${base__path}html.png`,
        description: "HTML (Hyper Text Marcation Language), é o 'esqueleto' de uma página. Toda a estrutura da página é criada aqui.",
    },
    {
        id: 2,
        name: "CSS",
        img__path: `${base__path}css.png`,
        description: "CSS (Cascading Style Sheets) é a tecnologia que aplica a estilização a página criada em HTML.",
    },
    {
        id: 5,
        name: "Sass",
        img__path: `${base__path}sass.png`,
        description: "Sass (Syntactically Awesome Style Sheets) é um pré-processador de CSS. Com ele a folha de estilos é mais poderosa, podendo adicionar lógica, além de deixar o código mais organizado.",
    },
    {
        id: 3,
        name: "Javascript",
        img__path: `${base__path}js.png`,
        description: "O Javascript é uma linguagem de programação utilizado principalmente para o desenvolvimento web, é utilizada para adicionar interação á página, além de tratamento de dados.",
    },
    {
        id: 6,
        name: "Typescript",
        img__path: `${base__path}typescript.png`,
        description: "O Typescript adiciona tipagem ao javascript, auxiliando e muito o processo de desenvolvimento.",
    },
    {
        id: 4,
        name: "Vue.Js",
        img__path: `${base__path}vue.png`,
        description: "Vue.js é um framework progressivo leve e performático. Pode usá-lo para projetos de médio e longo porte.",
    },
]

export default techList