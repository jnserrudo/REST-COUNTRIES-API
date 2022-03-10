console.log(window.location.pathname)
console.log(window.location.search)
console.log(window.location.search.indexOf('='))
console.log(window.location.search.slice(window.location.search.indexOf('=')+1))
import {apiaxios} from './export.js'

//obtencion del id de la bandera
const detallepais=async ()=>{
    let parteURL=window.location.search
    let indexIgual=parteURL.indexOf('=')
//    let id_pais=parseInt(parteURL.slice(indexIgual+1))
    let id_pais=parteURL.slice(indexIgual+1)

    console.log(id_pais)
    apiaxios()
}
detallepais()