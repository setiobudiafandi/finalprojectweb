class DashboardPage {

    get dashboard_menu() {
        return $("a[href='/dashboard']")
    }
}

module.exports = DashboardPage;