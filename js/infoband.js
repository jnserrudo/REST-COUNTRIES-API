console.log(window.location.pathname)
console.log(window.location.search)
console.log(window.location.search.indexOf('='))
console.log(window.location.search.slice(window.location.search.indexOf('=')+1))
import {apiaxios_infoband,conversion,main_detalle_pais,apiaxios_paiscode, btnmodo } from './export.js'



const imginfo=document.getElementById('imginfo')
const nompais=document.getElementById('nom_pais')
const imgflechaback=document.getElementById('imgflechaback')
const btnback=document.getElementById('btnback')


const txt_nom_nativo=document.getElementById('txt_nom_nativo')
const txt_poblacion=document.getElementById('txt_poblacion')
const txt_region=document.getElementById('txt_region')
const txt_subregion=document.getElementById('txt_subregion')
const txt_capital=document.getElementById('txt_capital')

const txt_dominio=document.getElementById('txt_dominio')
const txt_moneda=document.getElementById('txt_moneda')
const txt_lenguajes=document.getElementById('txt_lenguajes')
const cont_btns_limites=document.getElementById('main_detalle_pais__info__limites__btns')
const cont_limites=document.getElementById('main_detalle_pais__info__limites')

//obtencion del id de la bandera
const detallepais=async ()=>{
    let parteURL=window.location.search
    let indexIgual=parteURL.indexOf('=')
//    let id_pais=parseInt(parteURL.slice(indexIgual+1))
    let id_pais=parteURL.slice(indexIgual+1)

    console.log(id_pais)
    // apiaxios(`https://restcountries.com/v2/callingcode/${id_pais}`)
    // apiaxios("https://restcountries.com/v2/callingcode/51")
    let pais = await apiaxios_infoband(id_pais)

    console.log(pais)

    imginfo.src=pais.flag
    nompais.textContent=pais.name
    txt_nom_nativo.textContent=pais.nativeName
    txt_poblacion.textContent=conversion(pais.population.toString())
    txt_region.textContent=pais.region
    txt_subregion.textContent=pais.subregion
    txt_capital.textContent=pais.capital
    txt_dominio.textContent=pais.topLevelDomain?.[0]
    if(pais.currencies){
        let monedas=[]
        for(let mon of pais.currencies){
            monedas.push(mon.name)
        }
        txt_moneda.textContent=monedas.join()
    }else{
        txt_moneda.textContent='No Currencies'
    }
    
    if(pais.languages){
        let lengs=[]
        for(let leng of pais.languages){
            lengs.push(leng.name)
        }
        txt_lenguajes.textContent=lengs.join()
    }else{
        txt_lenguajes.textContent='No lenguages'
    }
    
    
    // creacion de los botones para los paises limites
    const fragment=document.createDocumentFragment()
    if(pais.borders){
        for(let lim of pais.borders){
            const a=document.createElement('a')
            const btn=document.createElement('button')
            btn.classList.add('btn_back')
            console.log(lim)
            let p=await apiaxios_paiscode(lim)
            btn.textContent=p.nativeName
    
            let idlim=p.callingCodes[0]
            a.href=`../infoband.html?x=${parseInt(idlim)}`
            a.classList.add('enlace_btns')
            a.append(btn)
            fragment.append(a)
            
    
        }
       
    }else{
        const p= document.createElement('p')
        p.textContent= "No Borders!"
        fragment.append(p)
    }
    cont_btns_limites.append(fragment)
    
    console.log(pais)
    



}

detallepais()

btnmodo.addEventListener('click',()=>{
    body.classList.toggle('body--dark')
    header.classList.toggle('header--dark')
    btnmodo.classList.toggle('header__btnmodo--dark')
    btnback.classList.toggle('header__btnmodo--dark')

    if(!imgluna.src.includes("/assets/luna--dark.svg")){
        console.log("entro if",imgluna.src)
        imgluna.src="./assets/luna--dark.svg"
        imgflechaback.src="./assets/flecha-back--dark.svg" 
    }else{
        console.log("entro else")

        imgluna.src="./assets/luna.svg"
        imgflechaback.src="./assets/flecha-back.svg"
    }
    let aux=cont_limites.firstElementChild.nextElementSibling.firstElementChild
    aux.firstElementChild.classList.toggle('header__btnmodo--dark')
    while(aux.nextElementSibling){
        aux=aux.nextElementSibling
        aux.firstElementChild.classList.toggle('header__btnmodo--dark')
        aux=aux.nextElementSibling
    }
})
