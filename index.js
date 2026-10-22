const ajoute=document.querySelector("#boutton")
const modal=document.querySelector("#joueur")
const annuler=document.querySelector(".btn-annuler")


ajoute.addEventListener('click' , () =>  {
modal.classList.add('afficherForme')
})
annuler.addEventListener('click' , () =>  {
modal.classList.remove('afficherForme')
})
 



// const Name=document.querySelector("#name")
// Name.addEventListener("input",ValidateName)
// function ValidateName(){;
//     const message=document.querySelector("#msg_name")
//     if(Name.textContent ==""){
//         message.textContent== "You should enter a name"
//         console.log("test")
//     }
//     else{
//         message.textContent=="correct"
//         console.log("test")
//     }

// }
