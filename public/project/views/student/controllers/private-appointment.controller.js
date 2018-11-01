(function () {
    angular
        .module("TOHMS")
        .controller("privateAppointmentController", privateAppointmentController);

    function privateAppointmentController($scope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];

    }
})();