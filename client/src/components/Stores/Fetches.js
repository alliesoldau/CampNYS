
const baseURL = 'http://localhost:3000'

export function LoginUser(user) {
    return fetch(baseURL+"/login",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        // TO DO: look into .catch for fetches for error handling 
} 

export function SignUpUser(user) {
    return fetch(baseURL+"/signup",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        // TO DO: look into .catch for fetches for error handling 
} 

export function LogoutUser(user) {
    return fetch(baseURL+"/logout",{ 
            method: "DELETE" 
        })
        .then(res => res.json())
}

export function AutoLogin() {
    return fetch(baseURL+`/authorized/${localStorage.userID}`)
    .then(res => res.json())
    }



