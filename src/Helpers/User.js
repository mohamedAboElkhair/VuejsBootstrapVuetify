import Token from './Token'
import AppStorage from './AppStorage'
import axios from 'axios';
class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const username = res.data.user

        if (Token.isValid(access_token)) {
            AppStorage.store(username, access_token)
            window.location = '/'
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : this.logout()
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    logout() {
        AppStorage.clear()
        window.location = 'login'
    }
  
   

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser()
        }
    }
    nameToke(){
        if(this.loggedIn){
         return localStorage.getItem('token')
  
        }
     }
   

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
    
    
   admin(){
    axios.post(`/api/auth/me?token=${AppStorge.getToken()}`)
   .then(res=>  this.AdminOrNot(res.data.job_title)
   ) 
   .catch(error=> this.errors = error.response.data.errors)
    
 }
//   user_job_title(){
//     axios.post(`/api/auth/me?token=${AppStorge.getToken()}`)
//     .then(res=>  console.log(res.data)) 
//     .catch(error=> this.errors = error.response.data.errors)
//  }
//   job_title(jobTitel){
//     return  jobTitel
//   }

  AdminOrNot(res){
    const job_title = res
       if (job_title == "Admin"){
             return job_title
       } 
       return false
   } 
    own(id) {
        return this.id() == id
    }

    admin() {
        return this.id() == 1
    }

}

export default User = new User();