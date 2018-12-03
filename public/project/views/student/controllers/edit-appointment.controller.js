(function () {
    angular
        .module("TOHMS")
        .controller("editAppointmentController", editAppointmentController);

    function editAppointmentController($scope, $rootScope, $location) {
        var vm = this;
        vm.event = $rootScope.currEvent;
        // vm.categoryTypes = ["HW1", "HW2", "HW3", "Exam", "Project"];
        // vm.visibleTypes = ["Public", "Private"];
        vm.updateAppointment = updateAppointment;
        // vm.confirmAppointment=confirmAppointment;

        function init() {
            $('.popover.in').remove();

            vm.initStartTime = vm.event.startTime;
            vm.initEndTime = vm.event.endTime;
            vm.category = vm.event.category
            if (vm.event.public == true) {
                vm.visibility = 'Public';
            }
            else{
                vm.visibility = 'Private';
            }
            $('[data-toggle="tooltip"]').tooltip();
        }
        init();

        function updateAppointment() {
            $location.url('/taHome');
        }


    }
})();