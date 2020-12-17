class SignInPage { 
    // define page objects
    get email() {
        return $('#username');
    }
    get password() {
        return $('#password');
    }
    get signInBtn() {
        return $('#signinButton');
    }

    get loginErrorText(){
        return $('.globalErrors li')
    }
    //define page functions/actions
    getLoginErrorTxt(){
        return this.loginErrorText.getText();
    }
}

export default new SignInPage();
