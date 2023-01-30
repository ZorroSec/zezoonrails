function poss(posts){
    const url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
    fetch(url,{ referrerPolicy: 'unsafe-url', mode: 'no-cors' }).then((res)=>{
        res.json().then((data)=>{
            for(let i=0;i<=99;i++){
                posts.innerHTML=`
                <div class='post'>
                    <div class='titulo'>
                        <h4>${data.items[i]['titulo']}</h4>
                    </div>
                    <div class='introducao'>
                        <p>${data.items[i]['introducao']}</p>
                    </div>
                </div>
                `
            }
        })
    })
}

export default poss