(function () {
    angular
        .module("TOHMS")
        .controller("studentCalendarController", studentCalendarController);

    function studentCalendarController($scope, $location) {
        var vm = this;
        vm.userTypes = ["Student", "Teaching Assistant"];

        $(function() {
            $('#calendar').fullCalendar({
                defaultView: 'basicWeek'
            })
        });

    }

})();