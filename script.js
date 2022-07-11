let project = [
    {
        ahref: 'https://formulariodev-coral.vercel.app/',
        img: 'dist/img/Formulario_thumbnail.png',
        alt: 'project',
        description: 'Um Formulário simples'
    },
    {
        ahref: 'https://jslamp.vercel.app/',
        img: 'dist/img/lamp_thumbnail.png',
        alt: 'project',
        description: 'Lampada em js'
    },
    {
        ahref: 'https://js-buttons.vercel.app/',
        img: 'dist/img/buttons_thumbnail.png',
        alt: 'project',
        description: ' Basic JavaScript Buttons'
    },
    {
        ahref: 'https://css-menu.vercel.app/',
        img: 'dist/img/css_navbar.png',
        alt: 'project',
        description: 'Menu basico',
    },
    {
        ahref: 'https://quiz-de-ds.vercel.app/home',
        img: 'dist/img/quizdeds_thumbnail.png',
        alt: 'project',
        description: 'Quiz de Ds',
    },
    {
        ahref: 'https://blog-gabrielbessi.vercel.app/',
        img: 'dist/img/blog_thumbnail.png',
        alt: 'project',
        description: 'Blog',
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