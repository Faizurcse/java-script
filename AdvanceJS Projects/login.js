let email = document.getElementById('email')
let password = document.getElementById('password')

function generateToken(){
    return (Math.random(0,100000)*10).toString()
}

document.getElementById('login').addEventListener('click',()=>{
    if(email.value=='' || password.value==''){
        // fill
    }

    else{
        let users = JSON.parse(localStorage.getItem('users') ?? '[]');
        console.log(users);
        if(users.length>0){
            let user = users.filter((user)=>user.email==email.value)
            if(user.length>0){
                 //user exists
                 let obj  = user[0];
                 if(obj.password == password.value){
                    // login
                    localStorage.setItem('currentUser',JSON.stringify({
                        email:email.value,
                        password:password.value,
                        token:generateToken()
                    }))
                 
                        window.location.href = "/profile/index.html"

                 }
            }
            else{
                // back to signup
            }
        }    
        else{
            // plz signup
        }
    }
})