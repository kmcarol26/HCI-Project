(function () {
    angular
        .module("TOHMS")
        .controller("studentDayController", studentDayController);

    function studentDayController($rootScope, $scope, $routeParams, $location) {
        var vm = this;
        vm.openPublicAppointment = openPublicAppointment;
        vm.openPrivateAppointment = openPrivateAppointment;
        vm.findQuestions = findQuestions;
        vm.uid = $routeParams['uid'];
        vm.showAllAppointments = showAllAppointments;
        vm.showMyBookedAppointments = showMyBookedAppointments;
        vm.showAllGroupAppointments = showAllGroupAppointments;
        vm.editAppointment = editAppointment;
        vm.cancelAppointment = cancelAppointment;
        vm.cancelAppointmentModal = cancelAppointmentModal;
        vm.searchTerm = "";


        function init() {

            $('.popover.in').remove();
            $rootScope.count += 1;

            // if(vm.uid == 1)
            // {
            //     vm.booked = "Appointment Booked!";
            // }
            vm.minTime = "11:00:00";
            vm.maxTime = "13:00:00";
            vm.ed = '2018-11-22T12:20:00';
            vm.sd = '2018-11-22T12:00:00';


            // if(vm.uid == -1) {

            // $rootScope.events.push({
            //     id:'1',
            //     summary: "File Upload Issue",
            //     category:'HW1',
            //     start: '2018-11-22T12:00:00',
            //     end: '2018-11-22T12:20:00',
            //     color: 'dodgerblue',
            //     editable: false,
            //     public: true,
            //     selectable : false
            // });
            // $rootScope.events.push({
            //     id:'2',
            //     start: '2018-11-22T11:05:00',
            //     end: '2018-11-22T11:15:00',
            //     color: 'black',
            //     editable: false,
            //     rendering: 'background',
            //     public: false,
            //     bg : true
            // });

            //TODO : Assign Ids

            $('#calendar').fullCalendar({
                allDaySlot: false,
                height: 600,
                selectOverlap: false,
                slotDuration: '00:05:00',
                defaultDate: "2018-11-22",
                defaultView: 'agendaDay',
                selectable: true,
                timezone: 'local',
                eventOverlap: false,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'agendaDay'
                },
                events: $rootScope.events,
                minTime: vm.minTime,
                maxTime: vm.maxTime,

                eventRender: function (eventObj, $el) {

                    if (eventObj.public && (eventObj.id == '1' || eventObj.id == '2')) {
                        $el.html('<button class="btn btn-warning btn-sm disabled" tabindex="-1" aria-disabled="true" " >' +
                            eventObj.category + '</button> <b>' + eventObj.title + '</b>');
                        $el.popover({
                            title: "Group Appointment",
                            content: "Click on this slot to join a group appointment for the question.",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }


                    var source = eventObj.title.toLowerCase();
                    if(eventObj.id != '2' && vm.searchTerm!="" && source.includes(vm.searchTerm.toLowerCase()))
                    {
                        $el
                            .css({"border-color": "red", "border-width": "thick"});

                    }

                    if (eventObj.id == '2') {
                        eventObj.rendering = 'background';
                        eventObj.bg = true;
                        $el.css({"background-color": "tomato", "color": "tomato", "opacity": 0.1})
                    }


                    if (eventObj.rendering == 'background') {
                        $el.popover({
                            title: "Unavailable time slot",
                            content: "This slot is booked by someone else",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }
                    else if ((eventObj.public == false) && eventObj.id != '1' && eventObj.id != '2') {
                        $el.html('<button class="btn btn-warning btn-sm disabled" tabindex="-1" aria-disabled="true" " >' +
                            eventObj.category + '</button> <b>' + eventObj.title + '</b>  ' +
                            '<button style="margin-left:525px" class="btn btn-warning btn-sm" >Cancel</button>');

                        $el.popover({
                            title: "Your Private Appointment",
                            content: "This is your private appointment and is visible only to you",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }


                    else if (eventObj.public == true && eventObj.id != '1' && eventObj.id != '2') {
                        $el.html('<button class="btn btn-warning btn-sm disabled" tabindex="-1" aria-disabled="true" " >'
                            + '' + eventObj.category + '</button> <b>' + eventObj.title + '</b> ' +
                            '<button style="margin-left:525px"'
                            +
                            ' class="btn btn-warning btn-sm" >Cancel</button> ');
                        $el.popover({
                            title: "Your Group Appointment",
                            content: "This is your group appointment and is visible to other students.",
                            trigger: 'hover',
                            placement: 'top',
                            container: 'body'
                        });
                    }

                },

                eventClick: function (event, jsEvent, view) {
                    vm.clickedEvent = event;
                    console.log(event);
                    vm.clickedStartTime = event.start._i;
                    vm.clickedEndTime = event._i;


                    if (jsEvent.target.nodeName == 'BUTTON') {
                        vm.cancelAppointmentModal(event)
                    }
                    if (event.id != '1' && event.id != '2' && jsEvent.target.nodeName != 'BUTTON')
                        vm.editAppointment(event);

                    // console.log(jsEvent.target.nodeName);
                    if (event.public == true && (event.id == '1' || event.id == '2'))
                        vm.openPublicAppointment(event);

                },
                select: function (startDate, endDate) {

                    vm.openPrivateAppointment(startDate._d, endDate._d);
                }


            });

            // var $input = $('<button class="btn btn-warning btn-sm">HW1</button>');
            // var $e = $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end');
            // $input.appendTo($e);

            $('[data-toggle="tooltip"]').tooltip();

        }

        init();

        function cancelAppointmentModal(event) {
            $("#confirmCancelModal").modal('show');
        }

        function cancelAppointment() {
            $('#calendar').fullCalendar('removeEvents', vm.clickedEvent._id)
            vm.booked = "Appointment cancelled!"
        }

        function openPublicAppointment(event) {
            event.category = "HW1";
            event.description = "Unable to upload output jar files to remote repository. Could you explain the procedure?" +
                " Thanks.";
            $rootScope.publicEvent = event;
            $location.url('/bookpublic/');
            $scope.$apply();
        }

        function editAppointment(event) {
            console.log("editApp");
            $rootScope.editEvent = event;
            $location.url('/editAppointment/');
            $scope.$apply();

        }

        function openPrivateAppointment(s, e) {
            var event = {startTime: s, endTime: e};
            $rootScope.privateEvent = event;
            $location.url('/bookprivate/');
            $scope.$apply();
        }

        function findQuestions(term) {
            // for (var i = 0; i < $rootScope.events.length; i++) {
            //     var source = $rootScope.events[i].title.toLowerCase();
            //     if (source.includes(term.toLowerCase())) {
            //         $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end')
            //             .css({"border-color": "red", "border-width": "thick"});
            //     }
            //     else {
            //         $('a.fc-time-grid-event.fc-v-event.fc-event.fc-start.fc-end')
            //             .css({"border": "none"})
            //     }
            //
            // }

            vm.searchTerm = term;
            $('#calendar').fullCalendar('rerenderEvents');

        }

        function showMyBookedAppointments() {
            var myAppointments = [];

            var events = $rootScope.events;
            for (var i = 0; i < events.length; i++) {

                if (events[i].id != '1' && events[i].id != '2') {
                    myAppointments.push(events[i]);
                }
            }

            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', myAppointments)

        }

        function showAllGroupAppointments() {
            var groupAppointments = []
            var events = $rootScope.events;
            for (var i = 0; i < events.length; i++) {

                if (events[i].public == true) {
                    groupAppointments.push(events[i]);
                }
            }

            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', groupAppointments)


        }

        function showAllAppointments() {
            var events = $rootScope.events;
            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', events)
            $('[data-toggle="tooltip"]').tooltip();

        }
    }

})();