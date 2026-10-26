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
    
    const jou = {
        nom: nom.value,
        num: num.value,
        poste:input.value, 
        butt:'x',  
        mod:'mod'
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
    info.append(cercle,parent,icone,modifier)
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