class RegisterPage {
    
    get namaToko_field() {
        return $("input[type='text']")
    }

    get popupMsg() {
        return $("div[role='alert']")
    }

}

module.exports = RegisterPage;