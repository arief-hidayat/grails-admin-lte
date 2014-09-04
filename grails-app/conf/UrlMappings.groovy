class UrlMappings {

	static mappings = {
        "/ajax/dashboard-boxrefresh-demo.php" (controller: 'demo', action: 'dashboardBoxRefresh')
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
