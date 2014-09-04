package grails.admin.lte

class DemoController {

    def dashboardBoxRefresh() {
        Thread.sleep(1.2 * 1000)
        render(view: "dashboardBoxRefresh")
    }
}
