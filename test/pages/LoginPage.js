class LoginPage {

    get inginCobaDaftar_btn() {
        return $("a[href='/register']")
    }

    get emailField() {
        return $("input[type='email']")
    }

    get passwordField() {
        return $("input[type='password']")
    }

    get submitButton() {
        return $("button[type='submit']")
    }

    get errorMsg() {
        return $("div[role='alert']")
    }

}

module.exports = LoginPage;