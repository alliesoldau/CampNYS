
export function LoginUser(user) {

    return fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        // TO DO: look into .catch for fetches for error handling 
} 


