(function () {
    angular
        .module("TOHMS")
        .controller("publicAppointmentController", publicAppointmentController);

    function publicAppointmentController($scope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        vm.bookAppointment = bookAppointment;
        vm.confirmAppointment=confirmAppointment;

        function init() {
            vm.initStartTime = new Date("January 1, 1970 12:15:00");
            vm.initEndTime = new Date("January 1, 1970 12:30:00");
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime, category: "HW2",
                membercount :1 , summary : "Some Question", description : "Some Description"};

            $('[data-toggle="tooltip"]').tooltip();
        }
        init();

        function bookAppointment() {
            if ($scope.privateForm.$valid) {
                $('#confirmModal').modal('show');

            }
            else {
                $scope.privateForm.submitted = true;
                vm.error = "Fill required fields correctly";
            }
        }

        function confirmAppointment(appointment) {
            console.log(appointment);
            vm.message = "Appointment Booked";
            vm.error="";
        }
    }
})();