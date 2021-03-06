export const main_banderas = document.getElementById("main_banderas")
 export const input=document.getElementById('input')
//-------

export const main_detalle_pais = document.getElementById("main_detalle_pais")


//------
export const imgluna=document.getElementById('imgluna')

export const body=document.getElementById('body')
export const header=document.getElementById('header')
export const select= document.getElementById('select')
export const btnmodo=document.getElementById('btnmodo')


export const modo=0

export const conversion=(x)=>{
    console.log(x)
    let y=[...x]
    y=y.reverse()
    for(let i=3;i<y.length;i+=4){
        y.splice(i,0,'.')
    }
    return y.reverse().join('')
}
export const apiaxios_infoband=async(id)=>{
    let {data:x}=await axios.get(`https://restcountries.com/v2/callingcode/${id}`)
    let pais=x[0]
    return pais;
}
export const apiaxios_paiscode=async(p)=>{
    let {data:x}=await axios.get(`https://restcountries.com/v2/alpha/${p}`)
    console.log('por code',x)
    return x;
    
}

export const apiaxios=async (q)=>{
    let {data:paises}= await axios.get(q)
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
        bandimg.dataset.id=pais.callingCodes[0]
        lblnamepais.textContent=pais.name
        lblnamepais.dataset.id=pais.numericCode
        lbl_detalle_poblacion.textContent="Population:"
        lbl_detalle_poblacion_info=conversion(pais.population.toString())
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
        banderas.dataset.id=pais.numericCode
        fragment.append(banderas)
    }
    
    main_banderas.append(fragment)

}