(function () {
    angular
        .module("TOHMS")
        .controller("studentHomeController", studentHomeController);

    function studentHomeController($scope,$rootScope,$location) {
        var vm = this;
        vm.userTypes = ["Student", "Teaching Assistant"];
    }

})();