(function () {
    angular
        .module("TOHMS")
        .controller("studentCalendarController", studentCalendarController);

    function studentCalendarController($scope, $location) {
        var vm = this;
        vm.taNames = ["Tweety", "Sylvester"];

        $(function() {
            $('#calendar').fullCalendar({
                defaultView: 'basicWeek'
            })
        });

    }

})();