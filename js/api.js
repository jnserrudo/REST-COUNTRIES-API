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
import {main_banderas} from './export.js'


const apiaxios=async ()=>{
    let {data:paises}= await axios.get("https://restcountries.com/v2/all")
    // p3.textContent=x[10]?.name
    console.log(paises)
    const fragment= document.createDocumentFragment()
    for( let pais of paises){

        // creacion de los elementos
        const banderas=document.createElement('div')
            const bandimg=document.createElement('img')
            const band_detalle=document.createElement('div')
                const lblnamepais=document.createElement('p')
                const band_detalle_poblacion=document.createElement('div')
                    let lbl_detalle_poblacion=document.createElement('p')
                    let lbl_detalle_poblacion_info=document.createElement('p')
                const band_detalle_region=document.createElement('div')
                    let lbl_detalle_region=document.createElement('p')
                    let lbl_detalle_region_info=document.createElement('p')
                const band_detalle_capital=document.createElement('div')
                    let lbl_detalle_capital=document.createElement('p')
                    let lbl_detalle_capital_info=document.createElement('p')
        // agregacion de las clases

        banderas.classList.add('main__banderas__band')
            bandimg.classList.add('main__banderas__band__img')
            bandimg.alt="no found"
            band_detalle.classList.add('main__banderas__band__detalle')
                lblnamepais.classList.add('lbl_namepais')
                band_detalle_poblacion.classList.add('main__banderas__band__detalle__poblacion')
                    lbl_detalle_poblacion.classList.add('lbl_detalle')
                band_detalle_region.classList.add('main__banderas__band__detalle__region')
                    lbl_detalle_region.classList.add('lbl_detalle')
                band_detalle_capital.classList.add('main__banderas__band__detalle__capital')
                    lbl_detalle_capital.classList.add('lbl_detalle')

        // insercion de los datos
        bandimg.src=pais.flag
        lblnamepais.textContent=pais.name
        lbl_detalle_poblacion.textContent="Population:"
        lbl_detalle_poblacion_info=pais.population
        lbl_detalle_region.textContent="Region:"
        lbl_detalle_region_info=pais.region
        lbl_detalle_capital.textContent="Capital:"
        lbl_detalle_capital_info=pais.capital

        // agregando hijos en el DOM
        band_detalle_poblacion.append(lbl_detalle_poblacion)
        band_detalle_poblacion.append(lbl_detalle_poblacion_info)

        band_detalle_region.append(lbl_detalle_region)
        band_detalle_region.append(lbl_detalle_region_info)

        band_detalle_capital.append(lbl_detalle_capital)
        band_detalle_capital.append(lbl_detalle_capital_info)

        band_detalle.append(lblnamepais)
        band_detalle.append(band_detalle_poblacion)
        band_detalle.append(band_detalle_region)
        band_detalle.append(band_detalle_capital)

        banderas.append(bandimg)
        banderas.append(band_detalle)
        fragment.append(banderas)
    }
    main_banderas.append(fragment)

}
apiaxios()

