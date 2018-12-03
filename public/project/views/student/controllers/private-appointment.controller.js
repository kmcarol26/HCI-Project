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
            $('.popover.in').remove();
            var event = $rootScope.privateEvent;
            vm.initStartTime = new Date(event.startTime);
            vm.initEndTime = new Date(event.endTime);
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime, category : vm.category};
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
            if(appointment.visibility == "Public") {
                appointment.color = 'dodgerblue';
                p = true;
            }
            else {
                appointment.color = 'tomato';
                p = false;
            }
            $(".modal-backdrop").remove();
            $rootScope.events.push({
                title: appointment.summary,
                description: appointment.description,
                start: vm.appointment.startTime,
                end: vm.appointment.endTime,
                category:appointment.category,
                summary:appointment.summary,
                color:appointment.color,
                editable: false,
                public:p
            });
            $location.url('/studentday/1');

            vm.message = "Appointment Booked";
            vm.error="";
        }


    }
})();