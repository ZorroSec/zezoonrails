function poss(){
    const url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
    fetch(url).then((res)=>{
        res.json().then((data)=>{
            for(let i=0;i<=99;i++){
                console.log(data.items[i]['titulo'])
            }
        })
    })
}

export default poss