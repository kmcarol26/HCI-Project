(function () {
    angular
        .module("TOHMS")
        .controller("taCalendarController", taCalendarController);

    function taCalendarController($scope, $location) {
        var vm = this;
        vm.studentNames = ["Noddy", "Winnie"];

        $(function() {
            $('#calendar').fullCalendar({
                defaultView: 'agendaWeek',
                minTime:'9:00:00',
                maxTime:'18:00:00',
                eventLimit: true,
                // slotDuration:'00:15:00',


                events: [

                    {
                        title  : 'CS5200 Office Hours',
                        start  : '2018-11-02T10:00:00',
                        end    :  '2018-11-02T12:00:00',
                        allDay :false,
                        url:'/#/bookpublic'



                    }

                ],
                eventColor: '#378006',
                eventClick: function(event) {
                    if (event.url) {
                        window.open(event.url);
                        return false;
                    }
                },
                dayClick: function(date, jsEvent, view) {

                    $('#calendar').fullCalendar('renderEvent', {
                        title: 'CS5200 Office Hours',
                        start: date,
                        allDay: false,
                        editable : true,
                        startEditable: true,
                        durationEditable: true
                    },true);

                },
                eventMouseover: function( event, jsEvent, view ) {

                }




            })
        });

    }

})();