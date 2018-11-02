(function () {
    angular
        .module("TOHMS")
        .controller("studentCalendarController", studentCalendarController);

    function studentCalendarController($scope, $location) {
        var vm = this;
        vm.taNames = ["Tweety", "Sylvester"];

        $(function() {
            $('#calendar').fullCalendar({
                defaultView: 'basicWeek',
                events: [
                    {
                        title  : 'TA Hours with Tweety',
                        start  : '2018-11-22'
                    },
                    {
                        title  : 'TA Hours with Sylvester',
                        start  : '2018-11-02',
                        url:'/#/bookpublic'

                    }

                ],
                eventClick: function(event) {
                    if (event.url) {
                        window.open(event.url);
                        return false;
                    }
                }
            })
        });

    }

})();