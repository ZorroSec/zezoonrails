function time(){
    const now = new Date()
    const hou = now.getHours()
    const min = now.getMinutes()
    const sec = now .getSeconds()
    const m = checktime(min)
    const s = checktime(sec)
    document.querySelector('footer').innerHTML=`<i>&copy; Zezao ${hou}:${m}:${s}</i>`
    setTimeout(time, 500)
}
function checktime(i){
    if(i<=10){
        i = "0"+i
    }
    return i
}