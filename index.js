const modul=document.querySelector("#form")
const ajouter=document.querySelector("#boutton")
const annuler=document.querySelector("#annuler")
const ajouterJ=document.querySelector('#ajouter')
const annulerJ=document.querySelector('#annuler1')
const list1=document.querySelector('#espjoueur')
const nom=document.querySelector('#nom')
const num=document.querySelector('#number')

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

const listj=[]
modul.addEventListener('submit', (event) => {
    event.preventDefault();
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
    ];
    const jou = {
        nom: nom.value,
        num: num.value,
        poste:input.value, 
        butt:'x',  
        mod:'mod',
        placement: ''
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
    const postej=document.createElement('p')
    postej.textContent=element.poste
    const parent=document.createElement('div')
    parent.append(postej,nome)
    const select=document.createElement('select')
    select.classList = "bg-slate-800 text-white text-sm rounded p-1 w-full mt-2";
    POSTES.forEach(pos=>{
        const option=document.createElement('option')
        option.setAttribute('value',pos.value)
        option.textContent=pos.label
        select.append(option)
    })
    const modifier=document.createElement('button')
    modifier.textContent=element.mod
    modifier.addEventListener('click', ()=>{
        nom.value=element.nom
        num.value=element.num
        input.value=element.poste
        modul.hidden=false
        modul.classList.add('afficherForme')
        info.remove()
        listj.splice(index,1) 
        console.log(listj)
    })
    
    const info=document.createElement('div')
    info.classList="text-white font-meduim "
    info.append(cercle,parent,icone,modifier,select)
    list1.append(info)
    icone.addEventListener('click', ()=>{
        info.remove()
        listj.splice(index,1)
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