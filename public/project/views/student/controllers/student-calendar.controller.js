(function () {
    angular
        .module("TOHMS")
        .controller("studentCalendarController", studentCalendarController);

    function studentCalendarController($scope,$rootScope,$location) {
        var vm = this;
        vm.taNames = ["Tweety", "Sylvester"];
        $(function() {
            $('#calendar').fullCalendar({
                height:520,
                defaultView: 'agendaWeek',
                minTime:'9:00:00',
                maxTime:'18:00:00',
                eventLimit: true,
                height:'auto',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'agendaDay'
                },


                events: [

                    {
                        id:'1',
                        title  : 'CS5200 Office Hours',
                        start  : '2018-11-22T11:00:00',
                        end    :  '2018-11-22T13:00:00',
                        allDay :false,
                        url:'#/studentday/-1'



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
                        id: '2',
                        title: 'CS5200 Office Hours',
                        start: date,
                        allDay: false,
                        editable: true,
                        startEditable: true,
                        durationEditable: true
                    }, true)
                },
                eventRender: function(eventObj, $el) {
                    if (eventObj.id != '2') {
                        $el.popover({
                            title: eventObj.duration,
                            content: "Click to see the full schedule",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });

                    }
                    else{
                        $el.popover({
                            title: eventObj.duration,
                            content: "Drag to adjust the time",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });

                    }
                }

            })
        });

    }

})();