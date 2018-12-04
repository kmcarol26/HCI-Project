(function () {
    angular
        .module("TOHMS")
        .controller("taHomeController", taHomeController);

    function taHomeController($scope,$rootScope, $location) {
        var vm = this;
        vm.userTypes = ["Student", "Teaching Assistant"];
        vm.taPage = taPage;
        vm.schedulePage = schedulePage;

        function schedulePage(course){
            $rootScope.course = course;
            $location.url('/studentcalendar');        }

        function taPage(course){
            $rootScope.course = course;
            $location.url('/tacalendar');        }

    }

})();