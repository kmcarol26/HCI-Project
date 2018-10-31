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
    }
})();