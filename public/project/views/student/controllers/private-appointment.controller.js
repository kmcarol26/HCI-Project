(function () {
    angular
        .module("TOHMS")
        .controller("privateAppointmentController", privateAppointmentController);

    function privateAppointmentController($scope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        vm.visibleTypes = ["Public", "Private"];
        vm.bookAppointment = bookAppointment;

        function init() {
            vm.initStartTime = new Date("January 1, 1970 12:15:00");
            vm.initEndTime = new Date("January 1, 1970 12:30:00");
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime};
            vm.appointment.membercount = 1;
            $('[data-toggle="tooltip"]').tooltip();
        }
        init();



        function bookAppointment(appointment) {
            if ($scope.privateForm.$valid) {
                console.log(appointment);
                 vm.message = "Appointment Booked";
                 vm.error="";
            }
            else {
                $scope.privateForm.submitted = true;
                vm.error = "Fill required fields correctly";
            }
        }



    }
})();