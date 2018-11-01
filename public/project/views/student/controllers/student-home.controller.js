(function () {
    angular
        .module("TOHMS")
        .controller("studentHomeController", studentHomeController);

    function studentHomeController($scope, $location) {
        var vm = this;
        vm.userTypes = ["Student", "Teaching Assistant"];



    }
})();