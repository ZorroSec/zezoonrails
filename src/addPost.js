const username = document.getElementById('username')
const post = document.getElementById('post')
const btn = document.getElementById('btn')
const posts = document.getElementById('posts')

if(btn){
    btn.onclick = ()=>{
        posts.innerHTML+=`
            <div class='post'>
                <div class='user'>
                    <h4>${username.value}</h4>
                </div>
                <div class='postContent'>
                    <p>${post.value}</p>
                </div>
            </div>
        `
    }
}