const btnmodo=document.getElementById('btnmodo')
const body=document.getElementById('body')
const header=document.getElementById('header')
const continput=document.getElementById('continput')
const input=document.getElementById('input')
const select=document.getElementById('select')
const imglupa=document.getElementById('imglupa')
const imgluna=document.getElementById('imgluna')
import {main_banderas} from "./export.js";

btnmodo.addEventListener('click', ()=>{
    body.classList.toggle('body--dark')
    header.classList.toggle('header--dark')
    continput.classList.toggle('main__search__cont_input--dark')
    input.classList.toggle('main__search__cont_input__input--dark')
    select.classList.toggle('main__search__select--dark')
    // let x=imgluna.src
    // console.log(typeof(x),x)
    if(!imgluna.src.includes("/assets/luna--dark.svg")){
        console.log("entro if",imgluna.src)
        imgluna.src="./assets/luna--dark.svg"
        imglupa.src="./assets/lupa--dark.svg" 
    }else{
        console.log("entro else")

        imgluna.src="./assets/luna.svg"
        imglupa.src="./assets/lupa.svg"
    }
    
    btnmodo.classList.toggle('header__btnmodo--dark')

    // cada bandera
    let bandera1=main_banderas.firstElementChild
    console.log(bandera1)
    bandera1.classList.toggle('main__banderas__band--dark')
    while(bandera1.nextElementSibling){
        bandera1=bandera1.nextElementSibling
        bandera1.classList.toggle('main__banderas__band--dark')

        console.log(bandera1)

    }
    
    

})