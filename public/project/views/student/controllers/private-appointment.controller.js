(function () {
    angular
        .module("TOHMS")
        .controller("privateAppointmentController", privateAppointmentController);

    function privateAppointmentController($scope, $rootScope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        vm.visibleTypes = ["Public", "Private"];
        vm.bookAppointment = bookAppointment;
        vm.confirmAppointment=confirmAppointment;

        function init() {
            var event = $rootScope.privateEvent;
            vm.initStartTime = new Date(event.startTime);
            vm.initEndTime = new Date(event.endTime);
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime};
            vm.appointment.membercount = 1;
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
            var p;
            if(appointment.visibility == "Public")
                p = true;
            else
                p = false;
            $(".modal-backdrop").remove();
            $rootScope.events.push({
                title: appointment.summary,
                start: vm.appointment.startTime,
                end: vm.appointment.endTime,
                color:'darkcyan',
                editable: false,
                public:p
            });
            $location.url('/studentday/1');
            vm.message = "Appointment Booked";
            vm.error="";
        }


    }
})();