(function () {
    angular
        .module("TOHMS")
        .controller("privateAppointmentController", privateAppointmentController);

    function privateAppointmentController($scope, $rootScope, $location) {
        var vm = this;
        vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        // vm.visibleTypes = ["Group Appointment", "Private Appointment"];
        vm.bookAppointment = bookAppointment;
        vm.confirmAppointment=confirmAppointment;
        vm.setVisibility = setVisibility;


        function init() {
            $('.popover.in').remove();
            var event = $rootScope.privateEvent;
            vm.initStartTime = new Date(event.startTime);
            vm.initEndTime = new Date(event.endTime);
            vm.appointment = {startTime: vm.initStartTime, endTime : vm.initEndTime, category : vm.category};
            vm.appointment.membercount = 1;
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="privateAppt-tooltip"]').tooltip();
            $('[data-toggle="publicAppt-tooltip"]').tooltip();
            $("#option1").click(function(){
                console.log("clicked");
                $(this).button('toggle');
                vm.appointment.visibility = 'Private'
            });
            $("#option2").click(function(){
                $(this).button('toggle');
                vm.appointment.visibility = 'Public'

            });


        }
        init();
        function setVisibility(){
            console.log("set v");

        }


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