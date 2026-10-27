const localS ="sauve-joueurs"
const modul=document.querySelector("#form")
const ajouter=document.querySelector("#boutton")
const annuler=document.querySelector("#annuler")
const ajouterJ=document.querySelector('#ajouter')
const annulerJ=document.querySelector('#annuler1')
const list1=document.querySelector('#espjoueur')
const nom=document.querySelector('#nom')
const num=document.querySelector('#number')
const GB=document.querySelector(".GB")
const DD=document.querySelector(".DD")
const DC1=document.querySelector(".DC1")
const DC2=document.querySelector('.DC2')
const DG=document.querySelector('.DG')
const MG=document.querySelector('.MG')
const MD=document.querySelector('.MD')
const MC1=document.querySelector('.MC1')
const MC2=document.querySelector('.MC2')
const AT1=document.querySelector('.AT1')
const AT2=document.querySelector('.AT2')
const postes={
    'Gardient':[GB],
    'Défenseur': ['DG', 'DC1', 'DC2', 'DD'],
    'Milieu':    ['MG', 'MC1', 'MC2', 'MD'],
    'Attaquant': ['AT1', 'AT2']
}
function posteConfondis(joueur, code) {
    if (code === '') return true                     
    const autorises = postes[joueur.poste]
    if (!autorises) return true                      
    return autorises.includes(code)
}
const POSTES = [
    { value: '',      label: 'Sur le banc' },
    { value: 'GB',    label: 'GB - Gardien' },
    { value: 'DG',    label: 'DG - Défenseur gauche' },
    { value: 'DC1',   label: 'DC - Défenseur central 1' },
    { value: 'DC2',   label: 'DC - Défenseur central 2' },
    { value: 'DD',    label: 'DD - Défenseur droit' },
    { value: 'MG',    label: 'MG - Milieu gauche' },
    { value: 'MC1',   label: 'MC - Milieu central 1' },
    { value: 'MC2',   label: 'MC - Milieu central 2' },
    { value: 'MD',    label: 'MD - Milieu droit' },
    { value: 'AT1',   label: 'BU - Buteur 1' },
    { value: 'AT2',   label: 'BU - Buteur 2' }
    ]

const listj=[]
try{
    listj=JSON.parse(
        localStorage.getItem(localS)
    ) || [];
}catch(error){
    listj=[]
}

function sauveJoueurs() {
    localStorage.setItem(
        localS,
        JSON.stringify(listj)
    )
}
const cases = {}
POSTES.forEach(p => {
    if (!p.value) return
    const c = document.querySelector('.terrain .' + p.value)
    if (c) {
        c.dataset.original = c.innerHTML   
        cases[p.value] = c
    }
})
 
 
function placerSurTerrain() {
    Object.values(cases).forEach(c => {
        c.innerHTML = c.dataset.original
        c.classList.remove('occupe')
    })

    listj.forEach(j => {
        const c = cases[j.placement]
        if (!j.placement || !c) return
        const n = document.createElement('p')
        n.textContent = j.num
        const nm = document.createElement('p')
        nm.textContent = j.nom
        c.innerHTML = ''
        c.append(n, nm)
        c.classList.add('occupe')
    })
}

 



ajouter.addEventListener('click', ()=> {
    modul.hidden = false;
    modul.classList.add('afficherForme')
})
annuler.addEventListener('click', ()=> {
    modul.hidden=true
    modul.classList.remove('afficherForme')
})
const poste=document.querySelectorAll('#post button')
const input=document.querySelector('#postechoisie')
   poste.forEach(button =>
    button.addEventListener('click', function(){
        button.classList.add('active')
        input.value = button.getAttribute('data-value');
        }));


modul.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value) {
        alert('Choisis un poste pour le joueur')
        return
    }
    const regexNom = /^[a-zA-ZÀ-ÿ]+( [a-zA-ZÀ-ÿ]+)*$/
    const regexNum = /^([1-9]|[1-9][0-9])$/
    if (!regexNom.test(nom.value.trim())) {
        const message=document.querySelector('#mess')
        message.hidden=false
        return
    }
    if (!regexNum.test(num.value.trim())) {
        const message=document.querySelector('#messN')
        message.hidden=false
        return
    }
    const jou = {
        nom: nom.value,
        num: num.value,
        poste:input.value, 
        butt:'x',  
        mod:'mod',
        placement:''
    };


    listj.push(jou);
    list1.innerHTML=''
    
   listj.forEach((element,index)=>{
    const icone=document.createElement('button')
    icone.textContent=element.butt
    icone.classList="text-red-500 "
    const cercle=document.createElement('div')
    const number=document.createElement('p')
    number.textContent=element.num
    cercle.classList="border-solide rounded-full  h-6 w-6 flex items-center justify-center bg-red-500/40 "
    cercle.append(number)
    const nome=document.createElement('p')
    nome.textContent=element.nom
    nome.classList = "font-semibold"
    const postej=document.createElement('p')
    postej.textContent=element.poste
    postej.classList = "text-xs text-white/60"
    const parent=document.createElement('div')
    parent.classList = "flex-1"
    parent.append(postej,nome)
    const select=document.createElement('select')
    select.classList = "bg-slate-800 text-white text-sm rounded p-1 w-full mt-2";
    POSTES.forEach(pos => {
        if(!posteConfondis(element,pos.value))return
        const option = document.createElement('option')
        option.value = pos.value
        option.textContent = pos.label
        select.append(option)
     })
    select.value = element.placement

    select.addEventListener('change', () => {
    const nouveau = select.value
     if (!posteConfondis(element, nouveau)) {
        alert('Un' `${element.poste}`,'ne peut pas jouer à ce poste !')
        select.value = element.placement
        return
    }
    const pris = nouveau !== '' &&
        listj.some(j => j !== element && j.placement === nouveau)
    if (pris) {
        alert('Ce poste est déjà occupé !')
        select.value = element.placement
        return
    }
    element.placement = nouveau
    placerSurTerrain()    
})
   
    
    const modifier=document.createElement('button')
    modifier.textContent=element.mod
    modifier.classList = "text-xs text-white/60"
    modifier.addEventListener('click', ()=>{
        nom.value=element.nom
        num.value=element.num
        input.value=element.poste
        modul.hidden=false
        modul.classList.add('afficherForme')
        info.remove()
        listj.splice(index,1)
        placerSurTerrain()  
        console.log(listj)
    })
    
    const info=document.createElement('div')
    info.classList = "flex flex-wrap items-center gap-2 bg-blue-950/60 rounded p-2 mb-2 text-white"
    info.append(cercle,parent,icone,modifier,select)
    list1.append(info)
    icone.addEventListener('click', ()=>{
        info.remove()
        listj.splice(index,1)
        placerSurTerrain() 
    })
   })
     modul.reset();
    modul.classList.remove('afficherForme'); 

});


annulerJ.addEventListener('click', (event) => {
    event.preventDefault();

    modul.reset();
    modul.hidden = true;
    modul.classList.remove('afficherForme');
});

