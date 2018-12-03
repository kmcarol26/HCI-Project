(function () {
    angular
        .module("TOHMS")
        .controller("studentHomeController", studentHomeController);

    function studentHomeController($scope,$rootScope,$location) {
        var vm = this;
        vm.schedulePage = schedulePage

        function schedulePage(course){
            $rootScope.course = course;
            $location.url('/studentcalendar');        }
    }

})();