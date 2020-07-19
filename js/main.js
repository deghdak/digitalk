console.log('test')

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.12,

});

const etudiants = document.querySelector('.etudiants')
const startup = document.querySelector('.start-up')
const missions = document.querySelector('.missions')
const bilan = document.querySelector('.bilan')
const temoignage = document.querySelector('.temoin')
console.log(temoignage)
const remerciement = document.querySelector('.remerciement')

const scroll_1 = document.getElementById('01')
const scroll_2 = document.getElementById('02')
const scroll_3 = document.getElementById('03')
const scroll_4 = document.getElementById('04')
const scroll_5 = document.getElementById('05')
const scroll_6 = document.getElementById('06')


etudiants.addEventListener('click', function(){
  scroll.scrollTo('top')
})

startup.addEventListener('click', function(){
  scroll.scrollTo(scroll_2, -100)
})

missions.addEventListener('click', function(){
  scroll.scrollTo(scroll_3, -100)
})

bilan.addEventListener('click', function(){
  scroll.scrollTo(scroll_4, -100)
})

temoignage.addEventListener('click', function(){
  scroll.scrollTo(scroll_5, -100)
})

remerciement.addEventListener('click', function(){
  scroll.scrollTo(scroll_6, -100)
})


function Cursor() {
  const title = document.querySelector('.cursor-title')
  const infos = document.querySelector('.cursor-infos')

  document.addEventListener('mousemove', function(){
    gsap.to('.cursor', {duration:0.6, x:event.clientX, y:event.clientY, ease:'power3.out'})
  })

  const people1 = document.querySelector('.Justine')
  const people2 = document.querySelector('.Ambroise')
  const people3 = document.querySelector('.Jeremy')
  const people4 = document.querySelector('.Maureen')
  const people5 = document.querySelector('.Leo')
  const cursor = document.querySelector('.cursor')
  cursor.style.display = "none"

  people1.addEventListener('mouseenter', function(){
    cursor.style.display = "block"
    console.log('Enter')
    title.textContent = "Justine"
    infos.textContent = "Justine est chargée de communication digitale. Elle jongle habilement entre tous nos canaux de communication pour animer la communauté Unly au quotidien."
  })
  people1.addEventListener('mouseleave', function(){
    cursor.style.display = "none"
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  people2.addEventListener('mouseenter', function(){
    cursor.style.display = "block"
    console.log('Enter')
    title.textContent = "Ambroise"
    infos.textContent = "Expert du développement web, Ambroise est le CTO d’Unly. Il déploie du code plus vite que son ombre, de jour comme de nuit, sans jamais déroger à la rigueur « essentielle à tout bon développeur » qui s’impose. Allergique à l’imprévu, il a toujours tout sous contrôle."
  })
  people2.addEventListener('mouseleave', function(){
    cursor.style.display = "none"
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  people3.addEventListener('mouseenter', function(){
    cursor.style.display = "block"
    console.log('Enter')
    title.textContent = "Jeremy"
    infos.textContent = "Diplômé d’un BEP, d’un Bac technologique, d’un BTS et enfin du programme Grande Ecole de GEM, son parcours incarne l’ascension sociale permise par l’éducation supérieure. Après plusieurs années dans le secteur bancaire, Jérémy a créé Unly pour lutter contre un accès à l’éducation limité par l’argent."
  })
  people3.addEventListener('mouseleave', function(){
    cursor.style.display = "none"
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  people4.addEventListener('mouseenter', function(){
    cursor.style.display = "block"
    console.log('Enter')
    title.textContent = "Maureen"
    infos.textContent = "Maureen, responsable marketing d’Unly, est l'un des esprits créatifs de l'équipe. Elle se charge de promouvoir nos services à travers différents contenus et canaux digitaux."
  })
  people4.addEventListener('mouseleave', function(){
    cursor.style.display = "none"
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  people5.addEventListener('mouseenter', function(){
    cursor.style.display = "block"
    console.log('Enter')
    title.textContent = "Léo"
    infos.textContent = "Léo est un designer de talent qui a l'oeil pour les détails. Du bout de son curseur il imagine des interfaces efficaces et attrayantes pour faciliter la vie de nos utilisateurs. Véritable couteau suisse, Léo se charge aussi de donner vie à ses maquettes en tant qu'intégrateur front-end."
  })
  people5.addEventListener('mouseleave', function(){
    cursor.style.display = "none"
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })
}

Cursor()
