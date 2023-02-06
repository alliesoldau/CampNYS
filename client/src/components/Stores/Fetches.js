
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

export function EditProfileInfo(user) {
    return fetch(baseURL+`/users/${user.id}/profile/edit`,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => res.json())
    }

export function EditCampgroundInfo(campground) {
    return fetch(baseURL+`/campgrounds/${campground.id}/edit`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(campground)
      })
      .then(res => res.json())
}

export function GrabAllCampgrounds() {
    return fetch(baseURL+'/all_campgrounds')
    .then(res => res.json())
    }

export function GrabCamperReservations(id) {
    return fetch(baseURL+`/camper/${id}/reservations`)
    .then(res => res.json())
    }

export function DeleteReservation(id) {
    return fetch(baseURL+`/camper/reservation/${id}`,{ 
        method: "DELETE" 
    })
    }

export function GrabHostCampgrounds(id) {
    return fetch(baseURL+`/host/${id}/campgrounds`)
    .then(res => res.json())
    }

export function DeleteCampground(id) {
    return fetch(baseURL+`/campgrounds/${id}`,{ 
            method: "DELETE" 
        })
    }

export function DeleteSite(id) {
    return fetch(baseURL+`/sites/${id}`,{ 
        method: "DELETE" 
    })
    }
    





