let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')

let error = document.getElementById('error')
error.style.color = 'red'

document.getElementById('signup').addEventListener('click',()=>{
    if(fname.value==='' || lname.value==='' || email.value==='' || password.value==='' || confirmPassword.value===''){
        error.textContent = 'Please fill all requireds fields'
    }

    else if(password.value===confirmPassword.value){

        let users = JSON.parse(localStorage.getItem('users') ?? "[]")
        console.log(users)
        let filterUsers = users.filter((user)=>user.email === email.value);

        if(filterUsers.length > 0){
            error.textContent = "User already exists !!"
        }

        else{
            users.push({
                email:email.value,
                password:password.value,
                fname:fname.value,
                lname:lname.value,
                createdAt:new Date()
            });

            localStorage.setItem('users',JSON.stringify(users));
            error.textContent=''
            fname.value='' 
            lname.value='' 
            email.value='' 
             password.value=''
             confirmPassword.value=''
        }
    }

    else{
        error.textContent = 'Please make sure password and confirm password are equal !!'
    }
})