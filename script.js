let project = [
    {
        ahref: 'https://formulariodev-coral.vercel.app/',
        img: 'dist/img/Formulario_thumbnail.png',
        alt: 'Formulario',
        description: 'Um Formulário simples'
    },
    {
        ahref: 'https://jslamp.vercel.app/',
        img: 'dist/img/lamp_thumbnail.png',
        alt: 'Javascript Lamp',
        description: 'Lampada em js'
    },
    {
        ahref: 'https://js-buttons.vercel.app/',
        img: 'dist/img/buttons_thumbnail.png',
        alt: 'Buttons pag',
        description: ' Basic JavaScript Buttons'
    },
    {
        ahref: 'https://css-menu.vercel.app/',
        img: 'dist/img/css_navbar.png',
        alt: 'Css navbar page',
        description: 'Menu basico',
    },
    {
        ahref: 'https://quiz-de-ds.vercel.app/home',
        img: 'dist/img/quizdeds_thumbnail.png',
        alt: 'Quiz de DS pag',
        description: 'Quiz de Ds',
    },
    {
        ahref: 'https://blog-gabrielbessi.vercel.app/',
        img: 'dist/img/blog_thumbnail.png',
        alt: 'Blog page',
        description: 'Blog',
    },
    {
        ahref: 'https://clima-js.vercel.app/',
        img: 'dist/img/clima_thumbnail.png',
        alt: 'Clima page',
        description: 'Clima',
    },
    {
        ahref: 'https://quiz-js-silk.vercel.app',
        img: 'dist/img/quizJs_thumbnail.png',
        alt: 'Quiz JavaScript',
    description: 'Quiz JS',
    },
    {
        ahref: 'https://relogio-js-alpha.vercel.app',
        img: 'dist/img/relogio_thumbnail.png',
        alt: 'Relógio page',
        description: 'Relógio Analógico e Digital',
    },
    {
        ahref: 'https://tic-tac-toe-game-js.vercel.app',
        img: 'dist/img/tictactoe_thumbnail.png',
        alt: 'tictactoe page',
        description: 'tic-tac-toe',
    },
    {
        ahref: 'https://canva-js-two.vercel.app',
        img: 'dist/img/canva_thumbnail.png',
        alt: 'canva page',
        description: 'Canva pra desenhar',
    },
];
let pp = 0;
addProjets();

function addProjets() {
    let projectsHtml = '';
    for (let i in project) {
        projectsHtml += '<a href="' + project[pp].ahref + '" target="_blank" class="project project-tile">'
            + '<img class="project-image" src="' + project[pp].img + '" alt = "' + project[pp].alt + '" />'
            + '<p class="project-title">'
            + '<span class="code">&lt;</span>'
            + project[pp].description
            + '<span class="code">&#47;&gt;</span>'
            + '</p>'
            + '</a>'
            ;
        console.log(project[pp]);
        pp++;
    }
    
    document.querySelector('#projects-grid').innerHTML = projectsHtml;
}