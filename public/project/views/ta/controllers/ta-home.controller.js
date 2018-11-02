(function () {
    angular
        .module("TOHMS")
        .controller("taHomeController", taHomeController);

    function taHomeController($scope, $location) {
        var vm = this;
        vm.userTypes = ["Student", "Teaching Assistant"];

    }

})();