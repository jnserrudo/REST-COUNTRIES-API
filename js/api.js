// consulta api

// const p=document.getElementById("dea")
// const p2=document.getElementById("dea2")
// const p3=document.getElementById("dea3")
// // METODO FETCH TRADICIONAL
// fetch("https://restcountries.com/v2/all")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     p.textContent=data[10]?.name
// })

// // METODO DE FETCH CON AWAIT
// const apiawait= async()=>{
//     let res=await fetch("https://restcountries.com/v2/all")
//     let datos= await res.json()
//     p2.textContent=datos[10]?.name
// }
// apiawait()

// // METODO CON AXIOS Y DESTRUCTURACION


// export const main_banderas = document.getElementById("main_banderas")
import {main_banderas,select,apiaxios,input} from './export.js'


apiaxios("https://restcountries.com/v2/all")

const borrar_banderas=()=>{
    while(main_banderas.firstChild){
        main_banderas.removeChild(main_banderas.firstChild)
    }
}

// import {input} from "./export.js";
input.addEventListener('change',()=>{
    let x=input.value
    borrar_banderas()
    apiaxios(`https://restcountries.com/v2/name/${x}`)

})


const filtro_region= async()=>{
    try{
        borrar_banderas()
        console.log(select.selectedIndex)
        console.log(select.options[select.selectedIndex])
        let optionseleccionada=select.options[select.selectedIndex].value.toLowerCase()
        let r= optionseleccionada==='all'?"https://restcountries.com/v2/all":optionseleccionada  
        
        r.includes('all')?apiaxios(r):apiaxios(`https://restcountries.com/v2/region/${r}`)
    }
    catch(e){
        console.log(e)
    }
   
}
//filtro_region()


select.addEventListener('change',()=>{
    console.log(select.firstElementChild.value)
    if(select.firstElementChild.value!=='All'){
        const optionall=document.createElement('option')
        optionall.value='All'
        optionall.text='All'
        select.firstElementChild.before(optionall)
    }
    filtro_region()

})

main_banderas.addEventListener('click',(e)=>{
    console.log(e.target)
    let band=e.target
    let id_band=band.dataset?.id
    console.log(typeof(id_band),id_band)
    if(id_band){
        window.location.href=`../infoband.html?x=${id_band}`
    }
    
})