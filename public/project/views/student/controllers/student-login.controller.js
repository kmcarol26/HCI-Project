(function () {
    angular
        .module("TOHMS")
        .controller("studentLoginController", studentLoginController);

    function studentLoginController($scope, $location) {
        var vm = this;
        vm.login = login;
        vm.logout = logout;

        function login(user) {
           // User Login functionality goes here
         }
        function logout()
        {
          //User Logout functionality goes here
        }
    }
})();