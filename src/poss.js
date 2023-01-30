function poss(posts){
    const url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
    const methods = {
        method: 'GET',
        referrerPolicy: 'unsafe-url', 
        mode: 'no-cors',
        Headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",

        }
    }
    fetch(url).then((res)=>{
        res.json()
    }).then((data)=>{
        for(let i=0;i<=99;i++){
            posts.innerHTML+=data.items[i]['titulo']
        }
    })
}

export default poss