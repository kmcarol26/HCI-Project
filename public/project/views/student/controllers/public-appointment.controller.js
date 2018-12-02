(function () {
    angular
        .module("TOHMS")
        .controller("publicAppointmentController", publicAppointmentController);

    function publicAppointmentController($rootScope, $scope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        vm.bookAppointment = bookAppointment;
        vm.confirmAppointment=confirmAppointment;

        function init() {
            $('.popover.in').remove();
            vm.event = $rootScope.publicEvent;
            vm.initStartTime = new Date(vm.event.start._i);
            vm.initEndTime = new Date(vm.event.end._i);
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime, category: vm.event.category,
                membercount :1 , title : vm.event.title, description : vm.event.description};

            $('[data-toggle="tooltip"]').tooltip();
        }
        init();

        function bookAppointment() {

            if ($scope.publicForm.$valid) {
                $('#confirmModal').modal('show');
            }
            else {
                $scope.publicForm.submitted = true;
                vm.error = "Fill required fields correctly";
            }
        }

        function confirmAppointment(appointment) {
            $(".modal-backdrop").remove();
            $location.url('/studentday/1');
            vm.message = "Appointment Booked";
            vm.error="";
        }
    }
})();