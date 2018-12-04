(function () {
    angular
        .module("TOHMS")
        .controller("taCalendarController", taCalendarController);

    function taCalendarController($scope,$rootScope, $location) {
        var vm = this;

        vm.studentNames = ["Noddy", "Winnie"];
        vm.events=[

            {
                id:'1',
                title  : 'Office Hours:Tweety',
                start  : '2018-11-22T11:00:00',
                end    :  '2018-11-22T13:00:00',
                allDay :false,
                url:'#/taday/-1'



            }

        ];


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
                    right: 'agendaWeek,agendaDay'
                },


                events: vm.events ,
                eventColor: '#378006',
                eventClick: function(event) {
                    $('.popover.in').remove();

                    if (event.url) {
                        location.url(event.url);

                        return false;
                    }
                    if (event.id=='2'){
                        $location.url('#/newTaHours/');
                    }
                },
                dayClick: function(date, jsEvent, view) {
                    $('.popover.in').remove();

                    vm.events.push({
                        title:'Office Hours: Tweety',
                        start: date,
                        editable: true,
                        startEditable: true,
                        durationEditable: true,
                        url:'#/newTaHours/'
                    });
                    $location.url('/studentday/1');

                    $('#calendar').fullCalendar('renderEvent', {
                        id: '2',
                        title: 'Office Hours: Tweety',
                        start: date,
                        allDay: false,
                        editable: true,
                        startEditable: true,
                        durationEditable: true,
                        url:'#/newTaHours/'
                    }, true)
                },
                    eventRender: function(eventObj, $el) {
                        $('.popover.in').remove();
                        if (eventObj.id != '2') {
                            console.log($el)
                            // $el.html('<a href style="padding-left:0px; font-size: 1.2em;"class="glyphicon glyphicon-remove"></a>');
                            // $el.html('<a href style="padding-left:100px; font-size: 1.2em;"class="glyphicon glyphicon-remove"></a>');


                            $el.popover({
                                title: eventObj.duration,
                                content: "Click to see the full schedule",
                                trigger: 'hover',
                                placement: 'top',
                                container: 'body'
                            });
                        }


                        else{
                            // $el.html('<a href style="padding-left:0px; font-size: 1.2em;"class="glyphicon glyphicon-remove"></a>');
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