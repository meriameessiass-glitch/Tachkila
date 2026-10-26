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
    modul.classList.remove('afficherForme')
})
const listj=[]
modul.addEventListener('submit', (event) => {
    event.preventDefault();

    c

    const jou = {
        nom: nom.value,
        num: num.value,
    };

    listj.push(jou);

    const parent = document.createElement("div");
    parent.classList.add(
        "flex", "bg-slate-800", "p-4",
        "rounded-xl", "border", "border-slate-700", "gap-3"
    );

    const para = document.createElement("p");
    para.classList.add(
        "w-9", "h-9", "rounded-full",
        "border-2", "border-orange-500",
        "flex", "justify-center", "items-center"
    );

    const span = document.createElement("span");
    span.textContent = jou.num;
    para.append(span);

    const divchild = document.createElement("div");

    const titre = document.createElement("h1");
    titre.classList.add("font-bold", "text-white");
    titre.textContent = jou.nom;

    const parachild = document.createElement("p");
    
    parachild.classList.add("text-sm", "text-orange-400");

    divchild.append(titre, parachild);
    parent.append(para, divchild);
    list1.append(parent);

     modul.reset();
    modul.classList.remove('afficherForme');
});
annulerJ.addEventListener('click', (event) => {
    event.preventDefault();

    modul.reset();
    modul.hidden = true;
    modul.classList.remove('afficherForme');
});