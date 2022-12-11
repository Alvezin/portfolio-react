import {LogoHtml5, LogoCss3, LogoJavascript, LogoNodejs, LogoVue, LogoSass} from 'react-ionicons'
const base__path = `${window.location.origin}/image/`


const size = '30px'
const color= 'white'
export const projectList = [
    {
        id: 1,
        name: "Quotation Now",
        img__path: `${base__path}captura2.png`,
        tech__list: [
            <LogoHtml5
                width={size}
                height={size}
                color={color}
            />,
            <LogoCss3
                width={size}
                height={size}
                color={color}
            />,
            <LogoJavascript
                width={size}
                height={size}
                color={color}
            />,
        ],
        project__url: "https://alvezin.github.io/cotacao-moedas-por-api/",
        repo__url: "https://github.com/Alvezin/cotacao-moedas-por-api",
    },
    {
        id: 2,
        name: "Petit Store",
        img__path: `${base__path}petit-store.png`,
        tech__list: [
            <LogoSass
                width={size}
                height={size}
                color={color}
            />,
            <LogoVue
                width={size}
                height={size}
                color={color}
            />
        ],
        project__url: "https://desafio-03-rho.vercel.app/",
        repo__url: "https://github.com/Alvezin/desafio-03",
    },
    {
        id: 3,
        name: "Cine House",
        img__path: `${base__path}cine-house.jpeg`,
        tech__list: [
            <LogoSass
                width={size}
                height={size}
                color={color}
            />,
            <LogoVue
                width={size}
                height={size}
                color={color}        
            />

        ],
        project__url: "https://cine-house-project.vercel.app/",
        repo__url: "https://github.com/Alvezin/cine-house-project",
    },
]
export const backEndProjectList = [
    {
        id: 1,
        name: 'Número por extenso',
        img__path: `${base__path}pc-livro.jpg`,
        tech__list: [
            <LogoNodejs
                width={size}
                height={size}
                color={'green'}
            />
        ],
        repo__url: "https://github.com/Alvezin/numero-por-extenso",
        aditional__path: [
            `${base__path}typescript.png`
        ]
    },
    {
        id: 2,
        name: 'Operator.JS',
        img__path: `${base__path}pc-livro.jpg`,
        tech__list: [
            <LogoNodejs
                width={size}
                height={size}
                color={'green'}
            />
        ],
        repo__url: 'https://github.com/Alvezin/operator',
        aditional__path: [
            `${base__path}typescript.png`
        ],
    }
]
