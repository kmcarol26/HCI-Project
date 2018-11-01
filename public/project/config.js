(function () {
    angular
        .module("TOHMS")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
        $routeProvider
            .when("/", {
                templateUrl: "views/student/templates/student-login.view.client.html",
                controller: 'studentLoginController',
                controllerAs: 'model'
            })
            .when("/home", {
                templateUrl: "views/student/templates/student-home.view.client.html",
                controller: 'studentHomeController',
                controllerAs: 'model'
            })
            .when("/bookprivate", {
                templateUrl: "views/student/templates/private-appointment.view.client.html",
                controller: 'privateAppointmentController',
                controllerAs: 'model'
            })


    }
})();