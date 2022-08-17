import {LogoVue, LogoJavascript, LogoSass, LogoNodejs, LogoHtml5, LogoCss3} from 'react-ionicons'
const base__path = `${window.location.origin}/image/`

const size = '100px'
const techList = [
    {
        id: 1,
        name: "HTML",
        img__path: `${base__path}html.png`,
        icon__path: <LogoHtml5
            width={size}
            height={size}
            color='orangered'
        />,
        description: "HTML (Hyper Text Marcation Language), é o 'esqueleto' de uma página. Toda a estrutura da página é criada aqui.",
    },
    {
        id: 2,
        name: "CSS",
        img__path: `${base__path}css.png`,
        icon__path: <LogoCss3
            width={size}
            height={size}

        />,
        description: "CSS (Cascading Style Sheets) é a tecnologia que aplica a estilização a página criada em HTML.",
    },
    {
        id: 5,
        name: "Sass",
        icon__path: <LogoSass
            width={size}
            height={size}

        />,
        img__path: `${base__path}sass.png`,
        description: "Sass (Syntactically Awesome Style Sheets) é um pré-processador de CSS. Com ele a folha de estilos é mais poderosa, podendo adicionar lógica, além de deixar o código mais organizado.",
    },
    {
        id: 3,
        name: "Javascript",
        img__path: `${base__path}js.png`,
        icon__path: <LogoJavascript
            width={size}
            height={size}

        />,
        description: "O Javascript é uma linguagem de programação utilizado principalmente para o desenvolvimento web, é utilizada para adicionar interação á página, além de tratamento de dados.",
        libs: [
            {
                id: 1,
                name: "Axios",
                description: "Lib utilizada para realizar requisições web nas aplicações de forma mais prática ao desenvolvedor.",
                img__path: `${base__path}axios.jpg`
            }
        ],
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
        icon__path: <LogoVue
            width={size}
            height={size}

        />,
        description: "Vue.js é um framework progressivo leve e performático. Pode usá-lo para projetos de médio e longo porte.",
        libs: [
            {
                id: 1,
                name: "Vue Router",
                description: "Utilizada para criação de rotas da aplicação.",
                img__path: `${base__path}vue-router.png`
            },
            {
                id: 2,
                name: "VueX",
                description: "Gerenciamento de estado da aplicação. Armazenda dados a nível global, para que possam ser utilizados em vários componentes",
                img__path: `${base__path}vuex.png`
            },
        ],
    },
]

export default techList