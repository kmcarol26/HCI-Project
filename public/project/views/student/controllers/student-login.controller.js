(function () {
    angular
        .module("TOHMS")
        .controller("studentLoginController", studentLoginController);

    function studentLoginController($scope, $rootScope,$location) {
        var vm = this;
        vm.login = login;
        vm.changeView = changeView;

        function init() {

            if(typeof $rootScope.events == 'undefined')
            {
                $rootScope.events=[

                    {
                        id:'1',
                        category:'HW1',
                        title: "File Upload Issue",
                        start: '2018-12-06T12:00:00',
                        end: '2018-12-06T12:20:00',
                        color: 'dodgerblue',
                        editable: false,
                        public: true,
                        selectable : false
                    },
                    {
                        id:'2',
                        title:"Android Layout Problem",
                        start: '2018-12-06T11:00:00',
                        end: '2018-12-06T11:15:00',
                        editable: false,
                        color: 'tomato',
                        public: false
                    }
                ]
            }
        }init();


        function login(user) {
            if ($scope.loginForm.$valid) {
                vm.changeView(user);
            }
            else {
                $scope.loginForm.submitted = true;
                vm.error = "Missing Fields";
            }
        }

        function changeView(user)
        {
              if(user.username ==  'tweety' && user.password == 'tweety')
              {
                  $location.url('/taHome');
              }

              if(user.username ==  'noddy' && user.password == 'noddy')
              {
                  $location.url('/home');
              }
        }
    }
})();