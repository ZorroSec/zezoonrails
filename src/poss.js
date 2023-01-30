function poss(posts){
    const url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
    const methods = { method: 'GET', referrerPolicy: 'unsafe-url', mode: 'cors' }
    fetch(url, methods).then((res)=>{
        res.json().then(data=>{
            for(let i=0;i<=99;i++){
                posts.innerHTML+=data.items[i]['titulo']
            }
        })
    })
}

export default poss