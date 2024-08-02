const LoginPage = require("./pages/LoginPage");
const RegisterPage = require("./pages/RegisterPage");
const DashboardPage = require("./pages/DashboardPage")

class functions {

    constructor() {
        this.loginPageInstance = new LoginPage(); 
        this.registerPageInstance = new RegisterPage();
        this.dashboardPageInstance = new DashboardPage();
    }

    open(path) {
        return browser.url(path);
    }

    async register(namaToko, email, password) {
        const ingin_coba_daftar = await this.loginPageInstance.inginCobaDaftar_btn
        const nama_toko_field = await this.registerPageInstance.namaToko_field
        const email_field = await this.loginPageInstance.emailField 
        const password_field = await this.loginPageInstance.passwordField
        const submit_button = await this.loginPageInstance.submitButton

        await ingin_coba_daftar.click()
        await nama_toko_field.setValue(namaToko)
        await email_field.setValue(email)
        await password_field.setValue(password)
        await submit_button.click()
    }

    async assertPopup() {
        const popup = await this.registerPageInstance.popupMsg

        await popup.isDisplayed()
    }

    async assertErrorMsg(expectedErrorMsg) {
        const error_msg = await this.loginPageInstance.errorMsg

        await expect(error_msg).toHaveText(expectedErrorMsg);
    }

    async login(email,password) {
        const email_field = await this.loginPageInstance.emailField 
        const password_field = await this.loginPageInstance.passwordField
        const submit_button = await this.loginPageInstance.submitButton

        await email_field.setValue(email)
        await password_field.setValue(password)
        await submit_button.click()
    }
    
    async displyaDashboardMenu() {
        const dashboardMenu = await this.dashboardPageInstance.dashboard_menu

        await dashboardMenu.isDisplayed()
    }
}

module.exports = new functions;