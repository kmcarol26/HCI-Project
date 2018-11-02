(function () {
    angular
        .module("TOHMS")
        .config(configuration)
        .run(['$http', '$rootScope', function($rootScope) {
                $rootScope.events = [];
            $rootScope.events.concat({
                start: '2018-11-22T10:00:00',
                end: '2018-11-22T11:00:00',
                color: 'black',
                editable: false,
                rendering: 'background',
                public: false
            });
            }]);

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
            .when("/bookpublic", {
                templateUrl: "views/student/templates/public-appointment.view.client.html",
                controller: 'publicAppointmentController',
                controllerAs: 'model'
            })
            .when("/studentcalendar", {
                templateUrl: "views/student/templates/student-calendar.view.client.html",
                controller: 'studentCalendarController',
                controllerAs: 'model'
            })

            .when("/taHome", {
                templateUrl: "views/ta/templates/ta-home.view.client.html",
                controller: 'taHomeController',
                controllerAs: 'model'
            })
            .when("/tacalendar", {
                templateUrl: "views/ta/templates/ta-calendar.view.client.html",
                controller: 'taCalendarController',
                controllerAs: 'model'
            })

            .when("/studentday/:uid", {
                templateUrl: "views/student/templates/student-day.view.client.html",
                controller: 'studentDayController',
                controllerAs: 'model'
            })
            .when("/taday/:uid", {
                templateUrl: "views/ta/templates/ta-day.view.client.html",
                controller: 'taDayController',
                controllerAs: 'model'
            })


    }
})();