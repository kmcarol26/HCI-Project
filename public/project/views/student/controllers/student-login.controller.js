(function () {
    angular
        .module("TOHMS")
        .controller("studentLoginController", studentLoginController);

    function studentLoginController($scope, $location) {
        var vm = this;
        vm.login = login;
        vm.changeView = changeView;


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