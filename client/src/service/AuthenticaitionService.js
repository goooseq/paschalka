import $api from "../http/http"

export default class AuthenticationService{
    static async login(email, password){
        return $api.post('/login', { email, password })
            
    }
    static async registration(email, password){
        return $api.post('/registration', { email, password })
            
    }
    static async logout(){
        return $api.post('/logout')
    }
}