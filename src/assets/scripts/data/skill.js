let language = '';
let frameworkFront = '';
let frameworkBack = '';
let runtime = '';
let cms = '';

const skills = [

   language = [
        'Langages',
        {
            name: 'HTML et Accessibilité',
            level: '90%',
        },
        {
            name: 'CSS et SASS',
            level: '80%',
        },
        {
            name: 'Javascript',
            level: '80%',
        },
        {
            name: 'SQL',
            level: '70%',
        },
    ],

    frameworkFront = [
        'Framework Front-End',
        {
            name: 'React',
            level: '70%',
        },
    ],

    frameworkBack = [
        'Framework Back-End',
        {
            name: 'Express.js',
            level: '70%',
        },
    ],

    runtime = [
        'Environnement d\'exécution',
        {
            name: 'Node.js',
            level: '70%',
        },
        {
            name: 'Bun',
            level: '20%',
        }
    ],

    cms = [
        'CMS',
        {
            name: 'WordPress',
            level: '30%',
        },
    ]
];

const addSkillToDom = (skill) => {
    const ul = document.querySelector('#skill-content');
    const li = document.createElement('li');
    li.classList.add('cv__container__content__card');
    const h3 = document.createElement('h3');
    h3.classList.add('cv__container__content__card__poste')
    h3.textContent = skill[0];
    skill.shift(0);
    ul.append(li);
    li.append(h3);
}

const addContentToSkill = (content) => {
    const li = document.querySelector('#skill-content li:last-child')
    const h4 = document.createElement('h4');
    h4.classList.add('cv__container__content__card__entreprise');
    h4.textContent = content.name;
    const divBar = document.createElement('div');
    divBar.classList.add('cv__container__content__card__bar');
    const divProgress = document.createElement('div');
    divProgress.classList.add('cv__container__content__card__progress')
    divProgress.style.width = `calc(${content.level} - 4px)`;
    li.append(h4, divBar);
    divBar.append(divProgress);
};

for (const skill of skills){
    addSkillToDom(skill);

    for (const content of skill){
        addContentToSkill(content);
    }
};

const jobBtn = document.querySelector('#job');
const skillBtn = document.querySelector('#skill');
const trainingBtn = document.querySelector('#training');
const jobContent = document.querySelector('.cv__container__content:first-child');
const skillContent = document.querySelector('.cv__container__content:nth-child(even)');
const trainingContent = document.querySelector('.cv__container__content:last-child');
const titleChange = document.querySelector('#modif-title');

jobBtn.addEventListener('click', () => {
    titleChange.textContent = 'Mes expériences';
    jobBtn.classList.add('current');
    skillBtn.classList.remove('current');
    trainingBtn.classList.remove('current');
    jobContent.classList.remove('hidden');
    skillContent.classList.add('hidden');
    trainingContent.classList.add('hidden');
});

skillBtn.addEventListener('click', () => {
    titleChange.textContent = 'Mes compétences';
    jobBtn.classList.remove('current');
    skillBtn.classList.add('current');
    trainingBtn.classList.remove('current');
    jobContent.classList.add('hidden');
    skillContent.classList.remove('hidden');
    trainingContent.classList.add('hidden');
});

trainingBtn.addEventListener('click', () => {
    titleChange.textContent = 'Mes formations';
    jobBtn.classList.remove('current');
    skillBtn.classList.remove('current');
    trainingBtn.classList.add('current');
    jobContent.classList.add('hidden');
    skillContent.classList.add('hidden');
    trainingContent.classList.remove('hidden');
});