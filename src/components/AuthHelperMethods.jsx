import decode from 'jwt-decode';
import axios from 'axios';
export default class AuthHelperMethods {

    login = (username, password) => { 
        axios.post('http://localhost:7000/login', {
        username:username,
        password:password
    })
        .then(res => {
            this.setToken(res.data.token) 
            return Promise.resolve(res);
        })
    console.log(this.getToken())
    }


    loggedIn = () => {
        
        const token = this.getToken() 
        return !!token && !this.isTokenExpired(token) 
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { 
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    }

    setToken = (idToken) => {
        localStorage.setItem('id_token', idToken)
    }

    getToken = () => {
        return localStorage.getItem('id_token')
    }

    logout = () => {
        localStorage.removeItem('id_token');
    }

    getConfirm = () => {
        let answer = decode(this.getToken());
        console.log("Recieved answer!");
        return answer;
    }

    _checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) { 
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}