(function () {
    angular
        .module("TOHMS")
        .controller("studentCalendarController", studentCalendarController);

    function studentCalendarController($scope,$rootScope,$location) {
        var vm = this;
        vm.taNames = ["Tweety", "Sylvester"];


        $(function() {
            $('#calendar').fullCalendar({
                defaultView: 'agendaWeek',
                events: [
                    {
                        title  : 'TA Hours with Tweety',
                        start  : '2018-11-221T12:00:00',
                        allDay :false
                    },
                    {
                        title  : 'TA Hours with Sylvester',
                        minTime:"09:00",
                        maxTime:"17:00",
                        start  : '2018-11-02T12:00:00',
                        end    :   '2018-11-02T15:00:00',
                        allDay :false,
                        url:'#/studentday/-1',
                        weekends: false
                    }

                ],
                eventColor: '#378006',
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