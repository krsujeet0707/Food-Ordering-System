class AuthenticationService {

    registerSuccessfulLogin(userid) {
        console.log("register successful login")
        sessionStorage.setItem("AuthenticatedUser", userid)
    }

    logout() {
        sessionStorage.removeItem('AuthenticatedUser')
    }

    isUserLoggedin() {
        let user = sessionStorage.getItem('AuthenticatedUser')
        if (user === null) return false;
        return true;
    }

    getUserIdLoggedin() {
        let userid = sessionStorage.getItem('AuthenticatedUser')
        return userid;
    }
    getNameLoggedin() {
        let name = sessionStorage.getItem('Authenticatedname')
        return name;
    }
    getRoleLoggedin() {
        let role = sessionStorage.getItem('Authenticatedrole')
        return role;
    }

    getEmailLoggedin() {
        let email = sessionStorage.getItem('Authenticatedemail')
        return email;
    }

}
export default new AuthenticationService()