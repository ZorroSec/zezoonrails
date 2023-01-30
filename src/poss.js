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
        res.json().then((data)=>{
            for(let i=0;i<=99;i++){
                posts.innerHTML+=`
                <div class='post'>
                    <div class=titulo''>
                        <h3>${data.items[i]['titulo']} </h3>
                    </div>
                </div>
                `
            }
        })
    })
}

export default poss